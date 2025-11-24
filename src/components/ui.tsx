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
    ),
    linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -18% -18% 50% -18%;
    background: radial-gradient(
      circle at 25% 30%,
      rgba(255, 140, 255, 0.16),
      transparent 45%
    );
    filter: blur(50px);
    opacity: 0.55;
    z-index: 0;
    transform: translate3d(0, 0, 0);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 70% 85%,
        rgba(0, 0, 0, 0.35),
        transparent 45%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.08));
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

export const PillLabel = styled.span<{ subtle?: boolean }>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  background: ${({ subtle }) =>
    subtle ? "rgba(255,255,255,0.08)" : "rgba(255, 255, 255, 0.12)"};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
  margin-bottom: 16px;
  text-transform: ${({ subtle }) => (subtle ? "uppercase" : "none")};
  letter-spacing: ${({ subtle }) => (subtle ? "0.08em" : "normal")};
  font-size: ${({ subtle }) => (subtle ? "11px" : "inherit")};
`;
