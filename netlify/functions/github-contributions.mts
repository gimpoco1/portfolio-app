import type { Config } from "@netlify/functions";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_USERNAME = "gimpoco1";

declare const process: {
  env: Record<string, string | undefined>;
};

type GitHubContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel: string;
  weekday: number;
};

type GitHubContributionWeek = {
  firstDay: string;
  contributionDays: GitHubContributionDay[];
};

type GitHubResponse = {
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: GitHubContributionWeek[];
        };
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
};

const query = `
  query Contributions($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              date
              contributionCount
              contributionLevel
              weekday
            }
          }
        }
      }
    }
  }
`;

const json = (
  body: unknown,
  status = 200,
  netlifyCacheControl = "no-store",
) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": status === 200 ? "public, max-age=300" : "no-store",
      "Netlify-CDN-Cache-Control": netlifyCacheControl,
      "Content-Type": "application/json; charset=utf-8",
    },
  });

export default async (request: Request) => {
    if (request.method !== "GET") {
      return json({ error: "Method not allowed." }, 405);
    }

    const token = process.env.GITHUB_CONTRIBUTIONS_TOKEN;
    if (!token) {
      return json({ error: "GitHub activity is not configured." }, 503);
    }

    const to = new Date();
    const from = new Date(to);
    from.setUTCDate(from.getUTCDate() - 364);

    try {
      const response = await fetch(GITHUB_GRAPHQL_URL, {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "gimpoco1-portfolio",
        },
        body: JSON.stringify({
          query,
          variables: {
            username: GITHUB_USERNAME,
            from: from.toISOString(),
            to: to.toISOString(),
          },
        }),
      });

      if (!response.ok) {
        return json({ error: "GitHub activity is temporarily unavailable." }, 502);
      }

      const payload = (await response.json()) as GitHubResponse;
      const calendar =
        payload.data?.user?.contributionsCollection.contributionCalendar;

      if (!calendar || payload.errors?.length) {
        return json({ error: "GitHub activity is temporarily unavailable." }, 502);
      }

      return json(
        {
          username: GITHUB_USERNAME,
          totalContributions: calendar.totalContributions,
          weeks: calendar.weeks.map((week) => ({
            firstDay: week.firstDay,
            days: week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
              level: day.contributionLevel,
              weekday: day.weekday,
            })),
          })),
          generatedAt: new Date().toISOString(),
        },
        200,
        "public, durable, s-maxage=3600, stale-while-revalidate=86400",
      );
    } catch {
      return json({ error: "GitHub activity is temporarily unavailable." }, 502);
    }
};

export const config: Config = {
  path: "/api/github-contributions",
};
