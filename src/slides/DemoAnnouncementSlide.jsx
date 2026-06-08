import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import vscodeLogo from './anwb-devday/data/logos/vscode.svg'
import copilotLogo from './anwb-devday/data/logos/github-copilot-cli.png'
import styles from './DemoAnnouncementSlide.module.css'

export default function DemoAnnouncementSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.demoAnnouncement}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.demoBadge}>
          <span className={styles.liveIcon} />
          <Editable as="span" id="slide.badge">LIVE DEMO</Editable>
        </div>

        <Editable as="h1" id="slide.title" className={styles.title}>
          {"Let's see it in action"}
        </Editable>

        <Editable as="p" id="slide.subtitle" className={styles.subtitle}>
          From IDE to TUI — from VS Code to GitHub Copilot CLI
        </Editable>

        <div className={styles.transitions}>
          <div className={styles.transitionRow}>
            <div className={styles.fromTo}>
              <div className={styles.logoBlock}>
                <img src={vscodeLogo} alt="VS Code" className={styles.logo} />
                <span className={styles.logoLabel}>VS Code</span>
              </div>
              <div className={styles.arrowContainer}>
                <div className={styles.arrowLine} />
                <div className={styles.arrowHead}>▶</div>
              </div>
              <div className={styles.logoBlock}>
                <img src={copilotLogo} alt="GitHub Copilot CLI" className={styles.logo} />
                <span className={styles.logoLabel}>GitHub Copilot CLI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
