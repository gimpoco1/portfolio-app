import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { projects, type Project } from "../content";
import { FeatureCard, FeatureHeader, PillLabel } from "./CommonStyles";

export const Projects = () => (
  <FeatureCard id="projects">
    <FeatureHeader>
      <PillLabel>After Hours Projects</PillLabel>
    </FeatureHeader>
    <ProjectsGrid>
      {projects.map((project) => (
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

const ProjectCard = ({ project }: { project: Project }) => {
  const handleSpotlight = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const { currentTarget } = event;
      const rect = currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      currentTarget.style.setProperty("--x", `${x}%`);
      currentTarget.style.setProperty("--y", `${y}%`);
    },
    []
  );

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
          {project.github && (
            <LinkButton href={project.github} target="_blank" rel="noreferrer">
              View code
            </LinkButton>
          )}
          {project.demo && (
            <LinkButton href={project.demo} target="_blank" rel="noreferrer">
              Live demo
            </LinkButton>
          )}
        </ProjectLinks>
      </CardBody>
    </SpotlightCard>
  );
};
