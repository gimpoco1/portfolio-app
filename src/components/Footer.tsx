import styled from "@emotion/styled";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.6 3.7 10 7.1a1.8 1.8 0 0 1-.4 2l-1.3 1.3a14.3 14.3 0 0 0 5.3 5.3l1.3-1.3a1.8 1.8 0 0 1 2-.4l3.4 1.4a1.8 1.8 0 0 1 1.1 1.7v2.4a1.9 1.9 0 0 1-1.9 1.9A16.9 16.9 0 0 1 2.6 4.5a1.9 1.9 0 0 1 1.9-1.9h2.4a1.8 1.8 0 0 1 1.7 1.1Z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="is-filled">
    <path d="M5.3 7.7A2.2 2.2 0 1 0 5.3 3.3a2.2 2.2 0 0 0 0 4.4ZM3.5 9.3h3.7v11.2H3.5V9.3Zm6.1 0h3.6v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v5.9h-3.7v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.3H9.6V9.3Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="is-filled">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.29-5.27-5.7 0-1.27.45-2.3 1.19-3.1-.12-.3-.52-1.48.11-3.07 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.78.11 3.08.74.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.79 1.06.79 2.15v3.2c0 .3.2.67.8.55A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const FooterBar = styled.footer`
  width: 100%;
  margin-top: 24px;
  padding: clamp(44px, 6vw, 72px) 0 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--muted);
  align-self: stretch;
  background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.045),
      transparent 42%
    ),
    rgba(6, 3, 13, 0.55);
  backdrop-filter: blur(18px);
`;

const FooterShell = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 0 clamp(24px, 4vw, 42px);
`;

const FooterCallout = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: clamp(36px, 5vw, 54px);

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 28px;
  }
`;

const CalloutCopy = styled.div`
  max-width: 760px;
`;

const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 18px;
  color: #d9d4e5;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const AvailabilityDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #57ebff;
  box-shadow: 0 0 14px rgba(87, 235, 255, 0.9);
`;

const FooterTitle = styled.h2`
  max-width: 760px;
  margin: 0;
  color: var(--text);
  font-size: clamp(36px, 5.4vw, 66px);
  line-height: 0.98;
  letter-spacing: -0.05em;
  text-wrap: balance;
`;

const FooterIntro = styled.p`
  max-width: 650px;
  margin: 20px 0 0;
  color: var(--muted);
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.55;
`;

const ConversationButton = styled.a`
  min-height: 52px;
  padding: 13px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 0 0 auto;
  border: 1px solid rgba(141, 233, 255, 0.65);
  border-radius: 999px;
  color: #071018;
  background: linear-gradient(115deg, #8de9ff, #d8c1ff);
  box-shadow: 0 14px 38px rgba(93, 185, 255, 0.22);
  font-size: 15px;
  font-weight: 800;
  transition: transform 180ms ease, box-shadow 180ms ease;

  svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 180ms ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 48px rgba(93, 185, 255, 0.34);

    svg {
      transform: translate(2px, -2px);
    }
  }

  &:focus-visible {
    outline: 2px solid #8de9ff;
    outline-offset: 3px;
  }
`;

const ContactSection = styled.div`
  padding: 28px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const FooterHeading = styled.h3`
  margin: 0;
  color: var(--text);
  font-size: 18px;
  letter-spacing: -0.02em;
`;

const Location = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 650;

  svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: #8de9ff;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const ContactList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ContactRow = styled.a`
  min-width: 0;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  color: var(--text);
  background: rgba(255, 255, 255, 0.045);
  transition: transform 180ms ease, border-color 180ms ease,
    background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(141, 233, 255, 0.38);
    background: rgba(255, 255, 255, 0.075);
  }

  &:focus-visible {
    outline: 2px solid #8de9ff;
    outline-offset: 3px;
  }
`;

const ContactIcon = styled.span`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border: 1px solid rgba(141, 233, 255, 0.2);
  border-radius: 12px;
  color: #8de9ff;
  background: linear-gradient(
    145deg,
    rgba(141, 233, 255, 0.14),
    rgba(216, 193, 255, 0.08)
  );

  svg {
    width: 21px;
    height: 21px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  svg.is-filled {
    fill: currentColor;
    stroke: none;
  }
`;

const ContactCopy = styled.span`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: left;

  strong {
    color: var(--text);
    font-size: 14px;
  }

  small {
    overflow: hidden;
    color: var(--muted);
    font-size: 12px;
    font-weight: 550;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Copyright = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 20px;
  font-size: 13px;
`;

const FooterMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 16px;
`;

const FiverrLink = styled.a`
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(29, 191, 115, 0.25);
  border-radius: 999px;
  color: #b8d9c8;
  background: rgba(29, 191, 115, 0.07);
  font-size: 12px;
  font-weight: 650;
  transition: color 180ms ease, border-color 180ms ease,
    background 180ms ease;

  &:hover {
    color: #e9fff2;
    border-color: rgba(29, 191, 115, 0.5);
    background: rgba(29, 191, 115, 0.13);
  }

  &:focus-visible {
    outline: 2px solid #1dbf73;
    outline-offset: 3px;
  }
`;

const FiverrLogo = styled.img`
  width: 40px;
  height: 20px;
  display: block;
  flex: 0 0 auto;
  margin-top: -1px;
  margin-right: -4px;
  transform: scale(1.8);
  transform-origin: center;
`;

export const Footer = () => (
  <FooterBar id="contact">
    <FooterShell>
      <FooterCallout>
        <CalloutCopy>
          <Availability>
            <AvailabilityDot /> Available for new opportunities
          </Availability>
          <FooterTitle>Let’s build something people love using.</FooterTitle>
          <FooterIntro>
            Have a product to build, a problem to untangle, or a team that needs
            an extra pair of hands? I’d love to hear about it.
          </FooterIntro>
        </CalloutCopy>
        <ConversationButton
          href="https://www.linkedin.com/messaging/compose/?recipient=giacomoimpoco"
          target="_blank"
          rel="noreferrer"
        >
          Start a conversation <ArrowIcon />
        </ConversationButton>
      </FooterCallout>

      <ContactSection>
        <ContactHeader>
          <FooterHeading>Find me here</FooterHeading>
          <Location>
            <LocationIcon /> Barcelona, Spain · Remote and onsite
          </Location>
        </ContactHeader>

        <ContactList>
          <ContactRow href="tel:+34644115358">
            <ContactIcon>
              <PhoneIcon />
            </ContactIcon>
            <ContactCopy>
              <strong>Phone</strong>
              <small>+34 644 115 358</small>
            </ContactCopy>
          </ContactRow>

          <ContactRow href="mailto:impoco126@gmail.com">
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            <ContactCopy>
              <strong>Email</strong>
              <small>impoco126@gmail.com</small>
            </ContactCopy>
          </ContactRow>

          <ContactRow
            href="https://www.linkedin.com/in/giacomoimpoco/"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon>
              <LinkedInIcon />
            </ContactIcon>
            <ContactCopy>
              <strong>LinkedIn</strong>
              <small>/in/giacomoimpoco</small>
            </ContactCopy>
          </ContactRow>

          <ContactRow
            href="https://github.com/gimpoco1"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon>
              <GitHubIcon />
            </ContactIcon>
            <ContactCopy>
              <strong>GitHub</strong>
              <small>/gimpoco1</small>
            </ContactCopy>
          </ContactRow>
        </ContactList>
      </ContactSection>

      <Copyright>
        <span>© {new Date().getFullYear()} Giacomo Impoco</span>
        <FooterMeta>
          <FiverrLink
            href="https://www.fiverr.com/s/ljqezlR"
            target="_blank"
            rel="noreferrer"
            aria-label="View my services on Fiverr (opens in a new tab)"
          >
            <FiverrLogo
              src="https://cdn.simpleicons.org/fiverr/1DBF73"
              alt=""
              aria-hidden="true"
            />
          Services ↗
          </FiverrLink>
          <span>Designed and built with care in Barcelona</span>
        </FooterMeta>
      </Copyright>
    </FooterShell>
  </FooterBar>
);
