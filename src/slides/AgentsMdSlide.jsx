import { BottomBar, Slide } from '@deckio/deck-engine'
import agentsMdScreenshot from './anwb-devday/composed/data/agents-md-screenshot.png'
import styles from './AgentsMdSlide.module.css'

export default function AgentsMdSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div>
              <p className={styles.eyebrow}>Skill #1</p>
              <h1>
                <span className={styles.highlight}>AGENTS.md</span>
              </h1>
              <p className={styles.subtitle}>The repo constitution — a single file that tells every agent who it is, what it owns, and how it should behave.</p>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🎯</div>
                <div>
                  <h3>Role &amp; scope</h3>
                  <p>Define what the agent is responsible for — and what it must never touch.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📐</div>
                <div>
                  <h3>Conventions</h3>
                  <p>Coding patterns, naming rules, architecture decisions — no re-prompting.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🚧</div>
                <div>
                  <h3>Guardrails</h3>
                  <p>Files and directories that are off-limits — protected from accidental changes.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>✅</div>
                <div>
                  <h3>Verification</h3>
                  <p>Tests, linters, builds — quality gates baked into the workflow.</p>
                </div>
              </div>
            </div>

            <div className={styles.callout}>
              <span className={styles.calloutIcon}>💡</span>
              <p>
                Think of AGENTS.md as your team's onboarding doc — but for AI.
              </p>
            </div>
          </div>

          <div className={styles.screenshotWrapper}>
            <img src={agentsMdScreenshot} alt="AGENTS.md in VS Code" className={styles.screenshot} />
          </div>
        </div>
      </div>

      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
