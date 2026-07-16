import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { projects, type Project } from "../content";
import { FeatureCard, FeatureHeader, PillLabel } from "./CommonStyles";

export const Projects = () => (
  <FeatureCard id="projects">
    <FeatureHeader>
      <PillLabel>After Hours Projects</PillLabel>
    </FeatureHeader>
    {projects
      .filter((project) => project.featured)
      .map((project) => (
        <FeaturedProjectCard key={project.title} project={project} />
      ))}
    <ProjectsGrid>
      {projects
        .filter((project) => !project.featured)
        .map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
    </ProjectsGrid>
  </FeatureCard>
);

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  grid-auto-rows: 1fr;
  align-items: stretch;
  position: relative;
  z-index: 1;
`;

const FeaturedCard = styled.article`
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
  border-radius: 23px;
  padding: 12px;
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.04)
    ),
    rgba(12, 10, 22, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
  transition: transform 220ms ease, border-color 220ms ease,
    box-shadow 220ms ease;
  --x: 50%;
  --y: 50%;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    background: radial-gradient(
      600px circle at var(--x) var(--y),
      rgba(255, 255, 255, 0.18),
      transparent 56%
    );
    opacity: 0;
    transition: opacity 260ms ease;
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.38);
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.45);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const FeaturedBanner = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const FeaturedContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 22px 16px 14px;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  gap: 26px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 18px 10px 10px;
  }
`;

const FeaturedIntro = styled.div`
  min-width: 0;

  h3 {
    margin: 4px 0 10px;
    color: var(--text);
    font-size: clamp(22px, 3vw, 30px);
    letter-spacing: -0.03em;
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.65;
  }
`;

const ProjectKicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #dcff37;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 16px rgba(220, 255, 55, 0.8);
  }
`;

const FeatureGroup = styled.div`
  margin-top: 20px;

  h4 {
    margin: 0 0 10px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

const EngineeringFeatureGroup = styled(FeatureGroup)`
  margin-top: 0;
`;

const FeatureChips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FeatureChip = styled.li`
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.055);
  color: rgba(255, 255, 255, 0.84);
  font-size: 12px;
  font-weight: 650;
`;

const EngineeringPanel = styled.div`
  align-self: stretch;
  padding: 17px;
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FeaturedLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

const SpotlightCard = styled.article`
  position: relative;
  border-radius: 23px;
  padding: 12px;
  background: linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.04)
    ),
    rgba(12, 10, 22, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  isolation: isolate;
  backdrop-filter: blur(2px);
  transition: transform 220ms ease, border-color 220ms ease,
    box-shadow 220ms ease, background 220ms ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 260px;
  --x: 50%;
  --y: 50%;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    background: radial-gradient(
      480px circle at var(--x) var(--y),
      rgba(255, 255, 255, 0.18),
      transparent 52%
    );
    opacity: 0;
    transition: opacity 260ms ease;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from 120deg,
      rgba(255, 78, 146, 0.3),
      rgba(14, 190, 255, 0.35),
      rgba(255, 182, 0, 0.3),
      rgba(255, 78, 146, 0.3)
    );
    opacity: 0.24;
    filter: blur(26px);
    transform: scale(1.2);
    z-index: 0;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.38);
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.45);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const CardBody = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  flex: 1;
`;

const ProjectThumb = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  aspect-ratio: 16 / 14;
  min-height: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 260ms ease;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-direction: column;
  gap: 1px;

  h4 {
    margin: 4px 0 16px;
    font-size: 16px;
    color: var(--text);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: nowrap;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkButton = styled.a`
  padding: 10px 14px;
  border-radius: 16px;
  background: radial-gradient(
    circle at 20% 20%,
    rgba(255, 255, 255, 0.18),
    rgba(255, 255, 255, 0.06)
  );
  color: var(--text);
  font-weight: 700;
  font-size: 14px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35),
    0 10px 30px rgba(0, 0, 0, 0.35);
  transition: transform 180ms ease, background 180ms ease,
    border-color 180ms ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  &:hover {
    transform: translateY(-1px);
    background: radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.26),
      rgba(255, 255, 255, 0.12)
    );
    border-color: rgba(255, 255, 255, 0.38);
  }
`;

const SiteLinkButton = styled(LinkButton)`
  background: linear-gradient(
    135deg,
    rgba(14, 190, 255, 0.34),
    rgba(120, 92, 255, 0.34)
  );
  border-color: rgba(113, 216, 255, 0.5);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32),
    0 10px 30px rgba(14, 190, 255, 0.14);

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(14, 190, 255, 0.48),
      rgba(120, 92, 255, 0.48)
    );
    border-color: rgba(154, 230, 255, 0.72);
  }
`;

const CodeIcon = styled.svg`
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
`;

const ViewCodeIcon = () => (
  <CodeIcon
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m8 9-3 3 3 3" />
    <path d="m16 9 3 3-3 3" />
    <path d="m14 5-4 14" />
  </CodeIcon>
);

const getSpotlightPosition = (event: React.MouseEvent<HTMLElement>) => {
  const { currentTarget } = event;
  const rect = currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  currentTarget.style.setProperty("--x", `${x}%`);
  currentTarget.style.setProperty("--y", `${y}%`);
};

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const handleSpotlight = useCallback(getSpotlightPosition, []);

  return (
    <FeaturedCard onMouseMove={handleSpotlight}>
      <FeaturedBanner>
        <img src={project.image} alt="Plink score tracker product banner" />
      </FeaturedBanner>
      <FeaturedContent>
        <FeaturedIntro>
          <ProjectKicker>Featured product</ProjectKicker>
          <h3>{project.title}</h3>
          {project.description && <p>{project.description}</p>}
          {project.productFeatures && (
            <FeatureGroup>
              <h4>Product experience</h4>
              <FeatureChips>
                {project.productFeatures.map((feature) => (
                  <FeatureChip key={feature}>{feature}</FeatureChip>
                ))}
              </FeatureChips>
            </FeatureGroup>
          )}
        </FeaturedIntro>
        <EngineeringPanel>
          {project.technicalFeatures && (
            <EngineeringFeatureGroup>
              <h4>Engineering highlights</h4>
              <FeatureChips>
                {project.technicalFeatures.map((feature) => (
                  <FeatureChip key={feature}>{feature}</FeatureChip>
                ))}
              </FeatureChips>
            </EngineeringFeatureGroup>
          )}
          <FeaturedLinks>
            {project.demo && (
              <SiteLinkButton
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Visit Plink ↗
              </SiteLinkButton>
            )}
            {project.github && (
              <LinkButton href={project.github} target="_blank" rel="noreferrer">
                <ViewCodeIcon />
                View code
              </LinkButton>
            )}
          </FeaturedLinks>
        </EngineeringPanel>
      </FeaturedContent>
    </FeaturedCard>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const handleSpotlight = useCallback(getSpotlightPosition, []);

  return (
    <SpotlightCard onMouseMove={handleSpotlight}>
      <CardBody>
        <ProjectThumb>
          <img src={project.image} alt={project.title} loading="lazy" />
        </ProjectThumb>
        <ProjectTitle>
          <h4>{project.title}</h4>
        </ProjectTitle>
        <ProjectLinks>
          {project.demo && (
            <SiteLinkButton
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              {project.demoLabel ?? "Live demo"} ↗
            </SiteLinkButton>
          )}
          {project.github && (
            <LinkButton href={project.github} target="_blank" rel="noreferrer">
              <ViewCodeIcon />
              View code
            </LinkButton>
          )}
        </ProjectLinks>
      </CardBody>
    </SpotlightCard>
  );
};
