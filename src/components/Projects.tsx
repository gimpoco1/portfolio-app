import styled from "@emotion/styled";
import { projects } from "../content";
import { FeatureCard, FeatureHeader, PillLabel } from "./CommonStyles";

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--stroke);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 250px;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`;

const ProjectMeta = styled.div`
  padding: 12px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    margin: 0;
    font-size: 16px;
    color: var(--text);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  a {
    padding: 8px 10px;
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.08);
    color: var(--text);
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Projects = () => (
  <FeatureCard id="projects">
    <FeatureHeader>
      <PillLabel>After Hours</PillLabel>
    </FeatureHeader>
    <ProjectsGrid>
      {projects.map((project) => (
        <ProjectCard key={project.title}>
          <img src={project.image} alt={project.title} />
          <ProjectMeta>
            <h4>{project.title}</h4>
            <ProjectLinks>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </ProjectLinks>
          </ProjectMeta>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </FeatureCard>
);
