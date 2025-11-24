import styled from "@emotion/styled";
import { navLinks } from "../content";

const NavPill = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.14),
      rgba(255, 255, 255, 0.06)
    );
  border-radius: 999px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    inset 0 0 0 1px rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(5px) saturate(120%);
  overflow: hidden;
  isolation: isolate;
`;

const BrandWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.01em;
`;

const BrandPhoto = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: contain;
  border: 2px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1.1;
`;

const BrandName = styled.span`
  font-size: 18px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const NavAnchor = styled.a`
  padding: 10px 16px;
  border-radius: 999px;
  color: var(--muted);
  font-weight: 600;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25),
    0 12px 26px rgba(0, 0, 0, 0.18);
  transition: color 0.2s, background 0.2s, transform 0.2s,
    border-color 0.2s, box-shadow 0.2s;

  &:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.36);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 14px 34px rgba(0, 0, 0, 0.24);
    transform: translateY(-1px);
    filter: saturate(1.1);
  }
`;

const Brand = () => (
  <BrandWrap>
    <BrandPhoto src="/assets/mypic.jpeg" alt="Giacomo portrait" />
    <BrandText>
      <BrandName>Giacomo Impoco</BrandName>
    </BrandText>
  </BrandWrap>
);

export const NavBar = () => (
  <NavPill>
    <Brand />
    <NavLinks>
      {navLinks.map((link) => (
        <NavAnchor key={link.label} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </NavAnchor>
      ))}
    </NavLinks>
  </NavPill>
);
