import styled from "@emotion/styled";
import { FeatureCard } from "./CommonStyles";

const usefulFor = [
  "Getting past the blank page",
  "Comparing unfamiliar approaches",
  "Repetitive code and documentation",
  "Finding test cases I may have missed",
];

const stillMyJob = [
  "Talking to people and understanding the problem",
  "Choosing the trade-offs",
  "Protecting user data",
  "Knowing when the answer is confidently wrong",
];

export const AIWorkflow = () => (
  <AISection id="ai-workflow">
    <EditorialLayout>
      <Story>
        <Kicker>
          <span aria-hidden="true" /> A note on AI
        </Kicker>
        <Title>Where AI helps - and where it doesn’t.</Title>
        <StoryCopy>
          <p>
            It helps me get from a blank page to a first draft quickly. I’ll use
            it to explore an unfamiliar API, compare options, clear repetitive
            work, or suggest tests I haven’t considered.
          </p>
          <p>
            Then I slow down. I read the source docs, trace the data, test the
            awkward cases, and rewrite anything I couldn’t defend in a code
            review. The product decisions-and their consequences-stay with me.
          </p>
        </StoryCopy>
      </Story>

      <WorkingNotes aria-label="How AI fits into my work">
        <NoteCard>
          <NoteHeading>
            <NoteIndex>01</NoteIndex>
            <strong>Useful for</strong>
          </NoteHeading>
          <NoteList>
            {usefulFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </NoteList>
        </NoteCard>

        <NoteCard className="responsibility">
          <NoteHeading>
            <NoteIndex className="warm">02</NoteIndex>
            <strong>Still my job</strong>
          </NoteHeading>
          <NoteList>
            {stillMyJob.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </NoteList>
        </NoteCard>
      </WorkingNotes>
    </EditorialLayout>

    <PersonalRule>
      <RuleLabel>My rule</RuleLabel>
      <blockquote>
        If I can’t explain it, test it, and maintain it, it doesn’t ship.
      </blockquote>
    </PersonalRule>
  </AISection>
);

const AISection = styled(FeatureCard)`
  padding: clamp(26px, 4vw, 44px);
  background:
    linear-gradient(125deg, rgba(255, 255, 255, 0.045), transparent 42%),
    rgba(8, 6, 15, 0.86);

  &::before {
    inset: auto -8% -38% 58%;
    height: 330px;
    background: radial-gradient(
      circle,
      rgba(255, 111, 72, 0.12),
      transparent 68%
    );
    filter: blur(20px);
  }
`;

const EditorialLayout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.16fr) minmax(310px, 0.84fr);
  gap: clamp(42px, 8vw, 110px);
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 38px;
    align-items: stretch;
  }
`;

const Story = styled.div`
  max-width: 690px;
`;

const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  color: #bdb7ca;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  span {
    width: 34px;
    height: 1px;
    background: #ff7a59;
  }
`;

const Title = styled.h2`
  max-width: 650px;
  margin: 0;
  color: var(--text);
  font-size: clamp(37px, 5.4vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.055em;
  text-wrap: balance;
`;

const StoryCopy = styled.div`
  max-width: 640px;
  margin-top: 28px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.72;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 16px;
  }
`;

const WorkingNotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 0;

  @media (max-width: 820px) and (min-width: 561px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const NoteCard = styled.div`
  width: calc(100% - 34px);
  padding: 20px 21px 22px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-left: 3px solid #67dff5;
  border-radius: 4px 16px 16px 4px;
  background: rgba(255, 255, 255, 0.045);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.2);
  transform: rotate(-0.7deg);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;

  &.responsibility {
    align-self: flex-end;
    border-left-color: #ff8a68;
    background: rgba(255, 138, 104, 0.045);
    transform: rotate(0.8deg);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.24);
    transform: rotate(0deg) translateY(-2px);
    background: rgba(255, 255, 255, 0.065);
  }

  @media (max-width: 820px) {
    width: 100%;
  }

  @media (max-width: 560px) {
    transform: none;

    &.responsibility {
      transform: none;
    }
  }
`;

const NoteHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 14px;

  strong {
    color: var(--text);
    font-size: 16px;
    letter-spacing: -0.02em;
  }
`;

const NoteIndex = styled.span`
  color: #8de9ff;
  font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.08em;

  &.warm {
    color: #ff9a7d;
  }
`;

const NoteList = styled.ul`
  display: grid;
  gap: 9px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 17px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.45;
  }

  li::before {
    content: "-";
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.48);
  }
`;

const PersonalRule = styled.div`
  position: relative;
  z-index: 1;
  width: min(87%, 880px);
  margin: clamp(38px, 6vw, 62px) 0 0 clamp(4px, 5vw, 70px);
  padding: 20px 0 2px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.13);
  border-left: 1px solid rgba(255, 255, 255, 0.13);

  blockquote {
    margin: 7px 0 0;
    color: #eeeaf3;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(21px, 2.7vw, 30px);
    font-style: italic;
    line-height: 1.35;
    letter-spacing: -0.02em;
  }

  @media (max-width: 620px) {
    width: 100%;
    margin-left: 0;
  }
`;

const RuleLabel = styled.span`
  color: #ff9a7d;
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;
