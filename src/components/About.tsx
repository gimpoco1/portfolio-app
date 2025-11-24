import styled from "@emotion/styled";
import { FeatureCard, FeatureHeader, PillLabel } from "./ui";

const AboutBody = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
`;

const GlowAccent = styled.div`
  width: 6px;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(180deg, #ff9bf5, #71d8ff, #8cf3b7);
  filter: drop-shadow(0 0 16px rgba(255, 155, 245, 0.7));
`;

const AboutCopy = styled.div`
  p {
    margin: 0 0 12px;
    color: var(--muted);
    line-height: 1.65;
    font-size: 16px;
  }
`;

export const About = () => (
  <FeatureCard id="about">
    <FeatureHeader>
      <PillLabel>Story so far</PillLabel>
    </FeatureHeader>
    <AboutBody>
      <GlowAccent aria-hidden="true" />
      <AboutCopy>
        <p>
          Originally from Italy, I moved out of the country when I was 17 and I've been soaking up
          London life for almost 7 years. I kicked off my career in customer service, starting as a
          waiter and chef in a restaurant, and then working my way up to delivering customer support
          to one of the UK's biggest companies, John Lewis.
        </p>
        <p>
          All along, I had this itch to dive into software development, and here I am on that
          journey to become a full-fledged developer. In my free time, I love diving into tutorials
          and keeping up with the latest tech trends. I'm like a sponge for learning, always staying
          in the loop with what's happening in the tech world. I aspire to craft innovative
          solutions and create my own impactful piece in the tech landscape. When it comes to work,
          I thrive in fast-paced, teamwork-heavy setups. I'm your go-to person for delivering
          results on time. Outside the coding realm, catch me on long walks, biking through new
          spots, and jamming on the piano.
        </p>
      </AboutCopy>
    </AboutBody>
  </FeatureCard>
);
