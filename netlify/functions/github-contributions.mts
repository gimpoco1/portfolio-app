import type { Config } from "@netlify/functions";

const GITHUB_USERNAME = "gimpoco1";
const CONTRIBUTIONS_URL = `https://github.com/users/${GITHUB_USERNAME}/contributions`;

const levelNames = [
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
] as const;

type ContributionDay = {
  date: string;
  count: number;
  level: (typeof levelNames)[number];
  weekday: number;
};

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

const toDateKey = (date: Date) => date.toISOString().slice(0, 10);

const addUtcDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
};

const parseContributionDays = (html: string) => {
  const days = new Map<string, ContributionDay>();
  const dayPattern =
    /<td\b(?=[^>]*class="[^"]*ContributionCalendar-day)([^>]*)><\/td>\s*<tool-tip\b[^>]*>([^<]*)<\/tool-tip>/g;

  for (const match of html.matchAll(dayPattern)) {
    const attributes = match[1];
    const tooltip = match[2];
    const date = attributes.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const rawLevel = Number(attributes.match(/\bdata-level="([0-4])"/)?.[1]);

    if (!date || !Number.isInteger(rawLevel)) continue;

    const countText = tooltip.match(/([\d,]+) contributions?/i)?.[1];
    const count = countText ? Number(countText.replaceAll(",", "")) : 0;

    days.set(date, {
      date,
      count,
      level: levelNames[rawLevel] ?? "NONE",
      weekday: new Date(`${date}T00:00:00Z`).getUTCDay(),
    });
  }

  return days;
};

const fetchContributionYear = async (year: number) => {
  const response = await fetch(
    `${CONTRIBUTIONS_URL}?from=${year}-01-01&to=${year}-12-31`,
    {
      headers: {
        Accept: "text/html",
        "User-Agent": "gimpoco1-portfolio",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub contribution calendar returned ${response.status}.`);
  }

  return parseContributionDays(await response.text());
};

export default async (request: Request) => {
  if (request.method !== "GET") {
    return json({ error: "Method not allowed." }, 405);
  }

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const firstDay = addUtcDays(today, -364);

  try {
    const years = Array.from(
      { length: today.getUTCFullYear() - firstDay.getUTCFullYear() + 1 },
      (_, index) => firstDay.getUTCFullYear() + index,
    );
    const yearlyDays = await Promise.all(years.map(fetchContributionYear));
    const contributionDays = new Map(
      yearlyDays.flatMap((days) => [...days.entries()]),
    );

    const firstWeekDay = addUtcDays(firstDay, -firstDay.getUTCDay());
    const weeks = Array.from({ length: 53 }, (_, weekIndex) => {
      const weekStart = addUtcDays(firstWeekDay, weekIndex * 7);
      const days = Array.from({ length: 7 }, (_, weekday) => {
        const date = addUtcDays(weekStart, weekday);
        const dateKey = toDateKey(date);

        if (date < firstDay || date > today) return null;

        return (
          contributionDays.get(dateKey) ?? {
            date: dateKey,
            count: 0,
            level: "NONE" as const,
            weekday,
          }
        );
      }).filter((day): day is ContributionDay => day !== null);

      return {
        firstDay: toDateKey(weekStart),
        days,
      };
    });
    const totalContributions = weeks.reduce(
      (total, week) =>
        total + week.days.reduce((weekTotal, day) => weekTotal + day.count, 0),
      0,
    );

    if (contributionDays.size === 0) {
      throw new Error("GitHub contribution calendar did not contain any days.");
    }

    return json(
      {
        username: GITHUB_USERNAME,
        totalContributions,
        weeks,
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
