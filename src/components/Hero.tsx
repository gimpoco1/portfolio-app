import styled from "@emotion/styled";

export const Hero = ({ experienceYears }: { experienceYears: number }) => (
  <HeroSection id="hero">
    <Image src="/assets/pixelated name.png" alt="Giacomo's profile picture" />

    <Eyebrow>Full-Stack Developer · {experienceYears}+ years</Eyebrow>
  </HeroSection>
);

const HeroSection = styled.section`
  text-align: center;
  padding: 50vh 18px 28vh;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--muted);
  font-weight: 500;
  font-size: 14px;
  margin-top: 24px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(34px, 5vw, 48px);
  line-height: 1.1;
  margin: 18px auto 12px;
  max-width: 820px;
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, #f6d365, #fda085, #c471f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Lead = styled.p`
  max-width: 720px;
  margin: 0 auto 20px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.6;
`;
