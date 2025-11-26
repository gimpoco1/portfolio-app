import styled from "@emotion/styled";
import { education } from "../content";
import { FeatureCard, FeatureHeader, PillLabel } from "./CommonStyles";

const EduList = styled.div`
  display: grid;
  gap: 12px;
`;

const EduItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 14px 16px;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 12px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
`;

const Year = styled.div`
  font-weight: 800;
  color: var(--text);
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const EduMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h4 {
    margin: 0;
    font-size: 16px;
    color: var(--text);
  }

  .issuer {
    font-weight: 700;
    color: var(--muted);
    letter-spacing: -0.01em;
  }

  .summary {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }
`;

const CredentialLink = styled.a`
  color: var(--text);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Education = () => (
  <FeatureCard id="education">
    <FeatureHeader>
      <PillLabel>Learnings</PillLabel>
    </FeatureHeader>
    <EduList>
      {education.map((item) => (
        <EduItem key={`${item.title}-${item.year}`}>
          <Year>{item.year}</Year>
          <EduMeta>
            <h4>{item.title}</h4>
            <span className="issuer">{item.issuer}</span>
            {item.summary && <p className="summary">{item.summary}</p>}
            {item.link && (
              <CredentialLink href={item.link} target="_blank" rel="noreferrer">
                View credential →
              </CredentialLink>
            )}
          </EduMeta>
        </EduItem>
      ))}
    </EduList>
  </FeatureCard>
);
