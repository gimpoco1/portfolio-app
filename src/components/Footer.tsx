import styled from "@emotion/styled";

const FooterBar = styled.footer`
  width: 100%;
  margin-top: 20px;
  padding: 24px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--muted);
  align-self: stretch;
  backdrop-filter: blur(12px);

`;

const FooterInner = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  align-items: start;
`;

const FooterHeading = styled.h4`
  margin: 0 0 8px;
  margin-bottom: 16px;
  color: var(--text);
  font-size: 16px;
`;

const ContactList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

const ContactRow = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--text);
  font-weight: 400;
  text-decoration: none;
  transition: transform 160ms ease, border-color 160ms ease,
    background 160ms ease;

  span {
    font-weight: 500;
    color: var(--muted);
  }

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.26);
  }
`;

const FooterText = styled.p`
  margin: 0;
  color: var(--muted);
  font-weight: 600;
  font-size: 14px;
`;

const Copyright = styled.div`
  width: min(1200px, 100%);
  margin: 18px auto 0;
  padding: 0 24px;
  font-size: 14px;
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Footer = () => (
  <FooterBar>
    <FooterInner>
      <div>
        <FooterHeading>Contact</FooterHeading>
        <ContactList>
          <ContactRow href="mailto:impoco126@gmail.com">
            <strong>Email</strong>
            <span>impoco126@gmail.com</span>
          </ContactRow>
          <ContactRow
            href="https://www.linkedin.com/in/giacomoimpoco/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>LinkedIn</strong>
            <span>/in/giacomoimpoco</span>
          </ContactRow>
          <ContactRow
            href="https://github.com/gimpoco1"
            target="_blank"
            rel="noreferrer"
          >
            <strong>GitHub</strong>
            <span>/gimpoco1</span>
          </ContactRow>
        </ContactList>
      </div>
      <div>
        <FooterHeading>Let's connect</FooterHeading>
        <FooterText>Open to remote and onsite collabs.</FooterText>
      </div>
      <div>
        <FooterHeading>Based in</FooterHeading>
        <FooterText>Barcelona, Spain</FooterText>
      </div>
    </FooterInner>
    <Copyright>
      <span>© {new Date().getFullYear()} Giacomo Impoco</span>
      <span>Crafted with React & a lot of coffee</span>
    </Copyright>
  </FooterBar>
);
