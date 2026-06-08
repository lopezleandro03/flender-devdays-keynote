import { BottomBar, Slide } from '@deckio/deck-engine'
import instructionsScreenshot from './anwb-devday/composed/data/custom-instructions-screenshot.png'
import styles from './CustomInstructions.module.css'

export default function CustomInstructions({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div>
              <p className={styles.eyebrow}>Skill #2</p>
              <h1>
                Custom <span className={styles.highlight}>Instructions</span>
              </h1>
              <p className={styles.subtitle}>File-scoped rules that travel with your repo. Agents read them automatically — no prompting needed.</p>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📁</div>
                <div>
                  <h3>File-pattern scoped</h3>
                  <p>Rules apply only to matching files — <code>**/*.jsx</code>, <code>**/api/**</code>. Precise, not noisy.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🤖</div>
                <div>
                  <h3>Auto-loaded by agents</h3>
                  <p>Copilot reads matching instructions before every edit. No prompting needed.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🔄</div>
                <div>
                  <h3>Version-controlled</h3>
                  <p>Instructions live in your repo and apply to every contributor — human or AI.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🧱</div>
                <div>
                  <h3>Composable</h3>
                  <p>Stack conventions, security rules, and style guides across multiple files.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.screenshotWrapper}>
            <img src={instructionsScreenshot} alt="Custom Instructions in VS Code" className={styles.screenshot} />
          </div>
        </div>
      </div>

      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
