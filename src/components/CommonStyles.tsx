import styled from "@emotion/styled";

export const FeatureCard = styled.section`
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 26px;
  padding: 26px;
  background: linear-gradient(
    160deg,
    rgba(8, 6, 16, 0.82),
    rgba(12, 10, 22, 0.72)
  );
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.42);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -18% -18% 50% -18%;
    filter: blur(10px);
    opacity: 0.55;
    z-index: 0;
    transform: translate3d(0, 0, 0);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }
`;

export const FeatureHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;

  h3 {
    margin: 0;
    font-size: 18px;
    letter-spacing: -0.01em;
  }
`;

export const PillLabel = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 16px;
`;
