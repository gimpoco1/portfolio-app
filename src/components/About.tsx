import styled from "@emotion/styled";
import { FeatureCard, FeatureHeader, PillLabel } from "./CommonStyles";

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
  background: linear-gradient(180deg, #ff6347, #ffc857, #57ebff);
  filter: drop-shadow(0 0 16px rgba(255, 155, 245, 0.7));
`;

const AboutCopy = styled.div`
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 16px;
`;

export const About = () => (
  <FeatureCard id="about">
    <FeatureHeader>
      <PillLabel>Story so far</PillLabel>
    </FeatureHeader>
    <AboutBody>
      <GlowAccent aria-hidden="true" />
      <AboutCopy>
        Originally from Italy, I moved out when I was 17 and spent almost 7
        years soaking up London life. These days I'm based in sunny Barcelona,
        swapping rain for tapas and sea breezes. I kicked off my career in
        customer service—waiting tables, cooking, then supporting customers with
        tech and appliances for John Lewis—so I'm wired to listen and solve what
        people need.
        <br />
        <br />
        I always had the itch to build software, and now I focus on frontend—
        making interfaces that feel fast, fun, and human. I've also got backend
        chops, so I think through the whole stack before I code. I'm a learning
        sponge who keeps up with new patterns and tools, then puts them to work.
        I thrive in fast-paced, collaborative teams and I'm the person who
        quietly keeps delivery on track.
        <br />
        <br /> When I'm not coding, I'm probably on a long walk, biking
        somewhere new, or playing the piano.
      </AboutCopy>
    </AboutBody>
  </FeatureCard>
);
