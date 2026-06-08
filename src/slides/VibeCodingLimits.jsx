import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './VibeCodingLimits.module.css'

export default function VibeCodingLimits({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Reality Check</p>
        <h1>
          Vibes don't <span className={styles.highlight}>scale</span>
        </h1>
        <p className={styles.subtitle}>
          Vibe coding is magical for prototypes. But when the stakes are real, you need more than good vibes.
        </p>

        <div className={styles.spectrum}>
          <div className={styles.spectrumLeft}>
            <h3 className={styles.spectrumLabel}>😎 Pure Vibes</h3>
            <ul className={styles.traitList}>
              <li>No plan, just prompts</li>
              <li>Agent does whatever it wants</li>
              <li>No conventions, no memory</li>
              <li>Works great for weekend hacks</li>
            </ul>
          </div>

          <div className={styles.spectrumArrow}>
            <div className={styles.arrowLine} />
            <span className={styles.arrowLabel}>The gap</span>
            <div className={styles.arrowLine} />
          </div>

          <div className={styles.spectrumRight}>
            <h3 className={styles.spectrumLabel}>🏗️ Production Software</h3>
            <ul className={styles.traitList}>
              <li>Multiple contributors &amp; agents</li>
              <li>Consistent patterns &amp; conventions</li>
              <li>CI/CD, tests, code review</li>
              <li>Maintainable over months &amp; years</li>
            </ul>
          </div>
        </div>

        <div className={styles.bridge}>
          <span className={styles.bridgeIcon}>🔑</span>
          <p>
            <strong>Bridging the gap</strong> requires mastering a few key skills that give agents
            structure, context, and guardrails — turning vibe coding into <em>agentic engineering</em>.
          </p>
        </div>
      </div>

      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
