import { BottomBar, Slide } from '@deckio/deck-engine'
import skillsScreenshot from './anwb-devday/composed/data/skills-plans-screenshot.png'
import styles from './SkillsAndPlans.module.css'

export default function SkillsAndPlans({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div>
              <p className={styles.eyebrow}>Skill #3</p>
              <h1>
                Skills, Tools &amp; <span className={styles.highlight}>Plans</span>
              </h1>
              <p className={styles.subtitle}>Give agents step-by-step workflows for complex tasks — and structured plans to execute them methodically.</p>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🔧</div>
                <div>
                  <h3>Skills</h3>
                  <p>Reusable workflows in <code>.github/skills/</code>. Agents invoke them by name for multi-step tasks.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🛠️</div>
                <div>
                  <h3>MCP Tools</h3>
                  <p>External capabilities — databases, APIs, search. Extend what agents can do beyond code.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📋</div>
                <div>
                  <h3>Plans &amp; Todos</h3>
                  <p>Agents break work into structured plans with dependencies before coding.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.screenshotWrapper}>
            <img src={skillsScreenshot} alt="Skills and Plans in VS Code" className={styles.screenshot} />
          </div>
        </div>
      </div>

      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
