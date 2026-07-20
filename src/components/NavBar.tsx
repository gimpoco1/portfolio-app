import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "../content";

type Props = { scrolled?: boolean };
type NavLinksProps = Props & { open?: boolean };
type NavWrapProps = Props & { expanded?: boolean };
type BrandProps = Props & { onClick?: () => void };

export const NavBar = ({ scrolled = false }: Props) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const collapseTimer = useRef<ReturnType<typeof setTimeout>>();

  const openMenu = () => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
    setOpen(true);
    setExpanded(true);
  };

  const collapseMenu = () => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
    setOpen(false);
    collapseTimer.current = setTimeout(() => {
      setExpanded(false);
      collapseTimer.current = undefined;
    }, 350);
  };

  const toggleMenu = () => (open ? collapseMenu() : openMenu());
  const closeMenu = () => {
    if (open) collapseMenu();
  };

  useEffect(() => {
    return () => {
      if (collapseTimer.current) clearTimeout(collapseTimer.current);
    };
  }, []);

  return (
    <NavWrap scrolled={scrolled} expanded={expanded}>
      <TopRow>
        <Brand scrolled={scrolled} onClick={closeMenu} />
        <NavLinks scrolled={scrolled}>
          {navLinks.map((link) => (
            <NavAnchor
              scrolled={scrolled}
              key={link.label}
              href={link.href}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noreferrer" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </NavAnchor>
          ))}
        </NavLinks>
        <MenuButton
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </TopRow>
      <MobileMenu open={open}>
        {navLinks.map((link) => (
          <NavAnchor
            key={`mobile-${link.label}`}
            href={link.href}
            target={link.newTab ? "_blank" : undefined}
            rel={link.newTab ? "noreferrer" : undefined}
            onClick={closeMenu}
          >
            {link.label}
          </NavAnchor>
        ))}
      </MobileMenu>
    </NavWrap>
  );
};

const NavWrap = styled.div<NavWrapProps>`
  width: 100%;
  max-width: ${({ scrolled }) => (scrolled ? "90%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ scrolled }) => (scrolled ? "12px 18px" : "12px 0")};
  border-radius: ${({ scrolled, expanded }) =>
    expanded ? "34px" : scrolled ? "999px" : "18px"};
  background: transparent;
  border: ${({ scrolled }) =>
    scrolled ? "1px solid rgba(255, 255, 255, 0.24)" : "none"};

  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 10px 30px rgba(0,0,0,0.35)" : "none"};
  backdrop-filter: ${({ scrolled }) =>
    scrolled ? "blur(10px) saturate(160%)" : "none"};
  overflow: hidden;
  isolation: isolate;
  transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease,
    max-width 0.35s ease, top 0.35s ease, border-color 0.35s ease;
  position: sticky;
  top: ${({ scrolled }) => (scrolled ? "16px" : "22px")};
  z-index: 10;

  @media (max-width: 1050px) {
    padding: 12px;
    flex-direction: column;
    align-items: stretch;
    min-width: 270px;
    gap: 0;
  }
`;

const TopRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`;

const NameWrap = styled.a<Props>`
  display: inline-flex;
  align-items: center;
  gap: ${({ scrolled }) => (scrolled ? "10px" : "6px")};
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ scrolled }) => (scrolled ? "#ffffff" : "#f5f3ff")};
  transition: color 0.35s ease, gap 0.35s ease;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid #8de9ff;
    outline-offset: 4px;
    border-radius: 999px;
  }
`;

const Avatar = styled.img<Props>`
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

const Name = styled.span<Props>`
  font-size: 16px;
  transition: font-size 0.35s ease, color 0.35s ease;
`;

const NavLinks = styled.div<Props>`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: ${({ scrolled }) => (scrolled ? "0" : "clamp(18px, 2.4vw, 32px)")};
  transition: gap 0.35s ease;

  @media (max-width: 1050px) {
    display: none;
  }
`;

const NavAnchor = styled.a<Props>`
  padding: ${({ scrolled }) => (scrolled ? "10px 16px" : "0")};
  border-radius: ${({ scrolled }) => (scrolled ? "999px" : "0")};
  color: white;
  background: transparent;
  transition: color 0.35s ease, background 0.35s ease, transform 0.35s ease,
    border-color 0.35s ease, box-shadow 0.35s ease;
  white-space: nowrap;
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
  @media (max-width: 1050px) {
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const MenuButton = styled.button<Props>`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: ${({ scrolled }) =>
    scrolled ? "1px solid rgba(255, 255, 255, 0.24)" : "none"};
  background: transparent;
  backdrop-filter: blur(2px);
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  span {
    width: 18px;
    height: 2px;
    background: #fff;
    border-radius: 999px;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.35);
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 1050px) {
    display: inline-flex;
  }
`;

const MobileMenu = styled.div<NavLinksProps>`
  display: none;
  width: 100%;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1050px) {
    display: flex;
    flex-basis: 100%;
    padding-top: ${({ open }) => (open ? "6px" : "0")};

    max-height: ${({ open }) => (open ? "420px" : "0")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition: max-height 0.35s ease, opacity 0.25s ease,
      padding-top 0.25s ease, border-top 0.25s ease;
  }
`;

const Brand = ({ scrolled, onClick }: BrandProps) => (
  <NameWrap
    href="#hero"
    scrolled={scrolled}
    onClick={onClick}
    aria-label="Back to the top"
  >
    <Avatar
      scrolled={scrolled}
      src="/assets/mypic.jpeg"
      alt="Giacomo portrait"
    />
    <Name scrolled={scrolled}>Giacomo Impoco</Name>
  </NameWrap>
);
