import styled from "@emotion/styled";
import { navLinks } from "../content";

type Props = { scrolled?: boolean };

export const NavBar = ({ scrolled = false }: Props) => (
  <NavWrap scrolled={scrolled}>
    <Brand scrolled={scrolled} />
    <NavLinks scrolled={scrolled}>
      {navLinks.map((link) => (
        <NavAnchor
          scrolled={scrolled}
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </NavAnchor>
      ))}
    </NavLinks>
  </NavWrap>
);

const NavWrap = styled.div<Props>`
  width: 100%;
  max-width: ${({ scrolled }) => (scrolled ? "fit-content" : "100%")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ scrolled }) => (scrolled ? "12px 18px" : "8px 0")};
  border-radius: ${({ scrolled }) => (scrolled ? "999px" : "0")};
  background: transparent;
  border: ${({ scrolled }) =>
    scrolled ? "1px solid rgba(255, 255, 255, 0.24)" : "none"};
  box-shadow: none;
  backdrop-filter: ${({ scrolled }) =>
    scrolled ? "blur(4px) saturate(160%)" : "none"};
  overflow: hidden;
  isolation: isolate;
  transition: all 0.35s ease;
`;

const BrandWrap = styled.div<Props>`
  display: inline-flex;
  align-items: center;
  gap: ${({ scrolled }) => (scrolled ? "10px" : "6px")};
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ scrolled }) => (scrolled ? "#ffffff" : "#f5f3ff")};
  transition: color 0.35s ease, gap 0.35s ease;
`;

const BrandPhoto = styled.img<Props>`
  width: ${({ scrolled }) => (scrolled ? "40px" : "32px")};
  height: ${({ scrolled }) => (scrolled ? "40px" : "32px")};
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid
    rgba(255, 255, 255, ${({ scrolled }) => (scrolled ? "0.12" : "0.18")});
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 10px 30px rgba(0, 0, 0, 0.35)" : "none"};
  transition: width 0.35s ease, height 0.35s ease, border-color 0.35s ease,
    box-shadow 0.35s ease;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1.1;
`;

const BrandName = styled.span<Props>`
  font-size: ${({ scrolled }) => (scrolled ? "16px" : "16px")};
  transition: font-size 0.35s ease, color 0.35s ease;
  margin-right: 24px;
`;

const NavLinks = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: ${({ scrolled }) => (scrolled ? "0" : "36px")};
  transition: gap 0.35s ease;
`;

const NavAnchor = styled.a<Props>`
  padding: ${({ scrolled }) => (scrolled ? "10px 16px" : "0")};
  border-radius: ${({ scrolled }) => (scrolled ? "999px" : "0")};
  color: white;
  background: transparent;
  transition: color 0.35s ease, background 0.35s ease, transform 0.35s ease,
    border-color 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    color: ${({ scrolled }) => (scrolled ? "var(--text)" : "#fff")};
    background: ${({ scrolled }) =>
      scrolled ? "rgba(255, 255, 255, 0.14)" : "transparent"};
    border-color: ${({ scrolled }) =>
      scrolled ? "rgba(255, 255, 255, 0.36)" : "none"};
    box-shadow: ${({ scrolled }) =>
      scrolled
        ? "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 14px 34px rgba(0, 0, 0, 0.24)"
        : "none"};
    transform: ${({ scrolled }) => (scrolled ? "translateY(-1px)" : "none")};
  }
`;

const Brand = ({ scrolled }: Props) => (
  <BrandWrap scrolled={scrolled}>
    <BrandPhoto
      scrolled={scrolled}
      src="/assets/mypic.jpeg"
      alt="Giacomo portrait"
    />
    <BrandText>
      <BrandName scrolled={scrolled}>Giacomo Impoco</BrandName>
    </BrandText>
  </BrandWrap>
);
