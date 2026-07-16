import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  count: number;
  level: string;
  weekday: number;
};

type ContributionWeek = {
  firstDay: string;
  days: ContributionDay[];
};

type ContributionData = {
  username: string;
  totalContributions: number;
  weeks: ContributionWeek[];
  generatedAt: string;
};

const GITHUB_PROFILE_URL = "https://github.com/gimpoco1";
const EMPTY_WEEKS = Array.from({ length: 53 }, (_, index) => ({
  firstDay: `loading-${index}`,
  days: [] as ContributionDay[],
}));

const levelColors: Record<string, string> = {
  NONE: "rgba(255, 255, 255, 0.055)",
  FIRST_QUARTILE: "rgba(14, 190, 255, 0.34)",
  SECOND_QUARTILE: "rgba(14, 190, 255, 0.58)",
  THIRD_QUARTILE: "rgba(120, 92, 255, 0.78)",
  FOURTH_QUARTILE: "#e4d1ff",
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));

export const Hero = ({ experienceYears }: { experienceYears: number }) => {
  const [contributions, setContributions] =
    useState<ContributionData | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github-contributions", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub activity request failed");
        return response.json() as Promise<ContributionData>;
      })
      .then((data) => setContributions(data))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setHasError(true);
      });

    return () => controller.abort();
  }, []);

  const weeks = contributions?.weeks ?? EMPTY_WEEKS;
  const activityLabel = contributions
    ? `${contributions.totalContributions.toLocaleString()} contributions in the last year`
    : hasError
      ? "See my latest work on GitHub"
      : "Loading the latest activity…";

  return (
    <HeroSection id="hero">
      <ActivityCard
        href={GITHUB_PROFILE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={`Giacomo's GitHub profile. ${activityLabel}`}
      >
        <ActivityHeader>
          <ActivityTitle>
            <GitHubIcon viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.29-5.27-5.7 0-1.27.45-2.3 1.19-3.1-.12-.3-.52-1.48.11-3.07 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.78.11 3.08.74.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.79 1.06.79 2.15v3.2c0 .3.2.67.8.55A11.5 11.5 0 0 0 12 .7Z" />
            </GitHubIcon>
            <span>
              <strong>A year on GitHub</strong>
              <small>{activityLabel}</small>
            </span>
          </ActivityTitle>
          <LiveLabel>
            <LiveDot />
            {contributions
              ? "Live from GitHub"
              : hasError
                ? "GitHub profile"
                : "Connecting to GitHub"}
          </LiveLabel>
        </ActivityHeader>

        <ContributionGrid
          role="img"
          aria-label={activityLabel}
          aria-busy={!contributions && !hasError}
        >
          {weeks.map((week) => (
            <ContributionWeekColumn key={week.firstDay}>
              {Array.from({ length: 7 }, (_, weekday) => {
                const day = week.days.find((item) => item.weekday === weekday);
                const title = day
                  ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`
                  : undefined;

                return (
                  <ContributionCell
                    key={`${week.firstDay}-${weekday}`}
                    className={!contributions && !hasError ? "is-loading" : ""}
                    style={{
                      backgroundColor: day
                        ? levelColors[day.level] ?? levelColors.NONE
                        : levelColors.NONE,
                    }}
                    title={title}
                  />
                );
              })}
            </ContributionWeekColumn>
          ))}
        </ContributionGrid>

        <ActivityFooter>
          <span>Less</span>
          {Object.values(levelColors).map((color) => (
            <LegendCell key={color} style={{ backgroundColor: color }} />
          ))}
          <span>More</span>
          <ProfileLink>View GitHub profile ↗</ProfileLink>
        </ActivityFooter>
      </ActivityCard>

      <Eyebrow>Full-Stack Developer · {experienceYears}+ years</Eyebrow>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  text-align: center;
  padding: 46vh 18px 28vh;

  @media (max-width: 880px) {
    padding: 38vh 0 18vh;
  }
`;

const ActivityCard = styled.a`
  width: min(100%, 1040px);
  margin: 0 auto;
  padding: clamp(16px, 2.2vw, 24px);
  display: block;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.035)
    ),
    rgba(8, 6, 16, 0.76);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(14px);
  transition: transform 180ms ease, border-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(113, 216, 255, 0.38);
    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.48),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`;

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
  text-align: left;
`;

const ActivityTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;

  > span {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }

  strong {
    color: var(--text);
    font-size: clamp(16px, 2vw, 20px);
    letter-spacing: -0.02em;
  }

  small {
    color: var(--muted);
    font-size: 12px;
  }
`;

const GitHubIcon = styled.svg`
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  fill: currentColor;
  color: var(--text);
`;

const LiveLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex: 0 0 auto;
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;

  @media (max-width: 560px) {
    font-size: 0;
    gap: 0;
  }
`;

const LiveDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #57ebff;
  box-shadow: 0 0 14px rgba(87, 235, 255, 0.9);
`;

const ContributionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(53, minmax(3px, 1fr));
  gap: clamp(2px, 0.35vw, 4px);
  width: 100%;
`;

const ContributionWeekColumn = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(3px, 1fr));
  gap: clamp(2px, 0.35vw, 4px);
`;

const ContributionCell = styled.span`
  width: 100%;
  aspect-ratio: 1;
  border-radius: clamp(1px, 0.35vw, 3px);
  border: 1px solid rgba(255, 255, 255, 0.035);
  transition: transform 140ms ease, filter 140ms ease;

  &[title]:hover {
    transform: scale(1.45);
    filter: brightness(1.25);
  }

  &.is-loading {
    animation: activity-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes activity-pulse {
    from {
      opacity: 0.35;
    }
    to {
      opacity: 0.75;
    }
  }
`;

const ActivityFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 13px;
  color: var(--muted);
  font-size: 11px;
`;

const LegendCell = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
`;

const ProfileLink = styled.span`
  margin-left: auto;
  color: var(--text);
  font-weight: 700;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: white;
  color: var(--text-dark);
  font-weight: 700;
  font-size: 16px;
  margin-top: 36px;

  @media (max-width: 880px) {
    margin-top: 28px;
    padding: 4px 10px;
    font-size: 12px;
  }
`;
