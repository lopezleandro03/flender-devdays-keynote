import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './RolesConvergenceSlide.module.css'

export default function RolesConvergenceSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.rolesConvergence}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="h2" id="rolesConvergence.title" className={styles.title}>
            The evolution of digital product creation
          </Editable>
          <Editable as="p" id="rolesConvergence.subtitle" className={styles.subtitle}>
            AI accelerates learning loops
          </Editable>
        </div>

        <div className={styles.content}>
          {/* Venn / convergence diagram */}
          <div className={styles.diagram}>
            <div className={styles.aiRing}>
              <span className={styles.aiLabel}>AI</span>
              {/* Rotating arrows */}
              <span className={styles.arrow} style={{ top: '-8px', left: '50%', transform: 'translateX(-50%) rotate(0deg)' }}>▸</span>
              <span className={styles.arrow} style={{ bottom: '-8px', left: '50%', transform: 'translateX(-50%) rotate(180deg)' }}>▸</span>
              <span className={styles.arrow} style={{ top: '50%', right: '-8px', transform: 'translateY(-50%) rotate(90deg)' }}>▸</span>
              <span className={styles.arrow} style={{ top: '50%', left: '-8px', transform: 'translateY(-50%) rotate(270deg)' }}>▸</span>
            </div>

            {/* Three overlapping role circles */}
            <div className={`${styles.roleCircle} ${styles.engineerCircle}`}>
              <span className={styles.circleLabel}>ENGINEER</span>
              <span className={styles.circleFocus}>Function</span>
            </div>
            <div className={`${styles.roleCircle} ${styles.designCircle}`}>
              <span className={styles.circleLabel}>DESIGN</span>
              <span className={styles.circleFocus}>Form</span>
            </div>
            <div className={`${styles.roleCircle} ${styles.pmCircle}`}>
              <span className={styles.circleLabel}>PM</span>
              <span className={styles.circleFocus}>Fit</span>
            </div>

            {/* Shared artifact labels between roles */}
            <span className={`${styles.artifactLabel} ${styles.artifactCode}`}>Code</span>
            <span className={`${styles.artifactLabel} ${styles.artifactJourneys}`}>Journeys</span>
            <span className={`${styles.artifactLabel} ${styles.artifactRequirements}`}>Requirements</span>

            {/* Center sphere */}
            <div className={styles.centerSphere} />
          </div>

          {/* Side callout */}
          <div className={styles.callout}>
            <Editable as="p" id="rolesConvergence.callout" className={styles.calloutLead}>
              AI joins the team as partner and facilitator, helping the team move through build → learn cycles faster
            </Editable>
            <ul className={styles.bullets}>
              <li>
                <Editable as="span" id="rolesConvergence.bullet1">
                  Specialized roles become more ambidextrous
                </Editable>
              </li>
              <li>
                <Editable as="span" id="rolesConvergence.bullet2">
                  Sunk cost in existing artifacts are easier to rev
                </Editable>
              </li>
              <li>
                <Editable as="span" id="rolesConvergence.bullet3">
                  Team communicates more naturally and effectively
                </Editable>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="rolesConvergence.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
