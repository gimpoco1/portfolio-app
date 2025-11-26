import styled from "@emotion/styled";

export const Hero = ({ experienceYears }: { experienceYears: number }) => (
  <HeroSection id="hero">
    <Image src="/assets/pixelatedName8.png" alt="Giacomo's profile picture" />

    <Eyebrow>Full-Stack Developer · {experienceYears}+ years</Eyebrow>
  </HeroSection>
);

const HeroSection = styled.section`
  text-align: center;
  padding: 50vh 18px 28vh;
  @media (max-width: 880px) {
    padding: 40vh 0px 18vh;
  }
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
