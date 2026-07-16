import styled from "@emotion/styled";
import { techStack } from "../content";
import { FeatureCard, FeatureHeader, PillLabel } from "./CommonStyles";

export const Skills = () => (
  <FeatureCard id="experience">
    <FeatureHeader>
      <PillLabel>Experience with</PillLabel>
    </FeatureHeader>
    <TechGrid>
      {techStack.map((skill) => (
        <TechCard key={skill}>
          <TechIcon>
            <img
              src={iconForSkill(skill)}
              alt={`${skill} icon`}
              className={lightIconSkills.has(skill) ? "light-icon" : undefined}
            />
          </TechIcon>
          <TechLabel>{skill}</TechLabel>
        </TechCard>
      ))}
    </TechGrid>
  </FeatureCard>
);

const iconSlugs: Record<string, string> = {
  HTML: "html5",
  CSS: "csswizardry",
  React: "react",
  JavaScript: "javascript",
  TypeScript: "typescript",
  "Next JS": "nextdotjs",
  "Chakra UI": "chakraui",
  TailwindCSS: "tailwindcss",
  "Node JS": "nodedotjs",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  "Express/KOA": "express",
  "Git CD/CI": "git",
  MongoDB: "mongodb",
  Redux: "redux",
  Storybook: "storybook",
  Python: "python",
  Django: "django",
  Docker: "docker",
  Vite: "vite",
  iOS: "apple",
  Swift: "swift",
  Capacitor: "capacitor",
  "Apple StoreKit": "apple",
  Supabase: "supabase",
  Stripe: "stripe",
  "Google AdSense": "googleadsense",
  "Three.js": "threedotjs",
};

const iconForSkill = (skill: string) => {
  const slug =
    iconSlugs[skill] ??
    skill
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  return `https://cdn.simpleicons.org/${slug}`;
};

const lightIconSkills = new Set(["iOS", "Apple StoreKit", "Three.js"]);

const StackSubtitle = styled.p`
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 2fr));
  gap: 12px;
  margin-top: 10px;
  position: relative;
  z-index: 1;
`;

const TechCard = styled.div`
  position: relative;
  border-radius: 18px;
  padding: 18px 14px;
  min-height: 90px;
  background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.07)
    ),
    rgba(18, 16, 28, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.18s ease, box-shadow 0.18s ease,
    border-color 0.18s ease;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: linear-gradient(
      135deg,
      rgba(120, 92, 255, 0.4),
      rgba(87, 235, 255, 0.35)
    );
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 0;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.16);
  }

  &:hover::after {
    opacity: 0.12;
  }
`;

const TechIcon = styled.div`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .light-icon {
    filter: invert(1) brightness(1.2);
  }
`;

const TechLabel = styled.div`
  z-index: 1;
  width: 100%;
  min-height: 20px;
  margin-top: auto;
  display: grid;
  place-items: end center;
  text-align: center;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.01em;
`;
