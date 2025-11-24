import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { experienceStartYear, gradientPresets } from "./content";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import LiquidEther from "./components/LiquidEther";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap");

  :root {
    color-scheme: dark;
    --bg: #06030d;
    --card: rgba(14, 10, 26, 0.8);
    --stroke: rgba(255, 255, 255, 0.08);
    --text: #f5f3ff;
    --muted: #c8c3d8;
    --accent: #e4d1ff;
    --pill: rgba(255, 255, 255, 0.06);
    --shadow: 0 20px 80px rgba(0, 0, 0, 0.45);
    --radius-lg: 28px;
    --radius: 14px;
    --radius-sm: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Space Grotesk", system-ui, -apple-system, sans-serif;
    background: var(--bg);
    color: var(--text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 120px;
  }

  .liquid-ether-container {
    position: fixed;
    inset: 0;
    z-index: -2;
    pointer-events: none;
  }
`;

const Page = styled.div`
  min-height: 100vh;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 32px;
  position: relative;
  overflow: visible;
`;

const Frame = styled.div`
  position: relative;
  width: min(1200px, 100%);
  padding: 28px 28px 36px;
  overflow: visible;
`;

const TopBar = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  position: sticky;
  top: 16px;
  z-index: 7;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const StackedSections = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const App = () => {
  const experienceYears = new Date().getFullYear() - experienceStartYear;

  return (
    <Page>
      <Global styles={globalStyles} />
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -2,
          pointerEvents: "none",
        }}
      >
        <LiquidEther
          style={{ width: "100%", height: "100%" }}
          colors={["#ff4e92", "#ffb600", "#0ebeff"]}
          mouseForce={40}
          className="color-bends-overlay"
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={500}
          autoRampDuration={0.6}
        />
      </div>
      <Frame>
        <TopBar>
          <NavBar />
        </TopBar>
        <Content>
          <Hero experienceYears={experienceYears} />
          <StackedSections>
            <About />
            <Skills />
          </StackedSections>
          <Projects />
        </Content>
      </Frame>
    </Page>
  );
};

export default App;
