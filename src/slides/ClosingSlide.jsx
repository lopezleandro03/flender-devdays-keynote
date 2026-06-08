import { BottomBar, Slide } from '@deckio/deck-engine'
import omarPhoto from './structured-vibe-coding/data/omar-photo.png'
import lobsterMascot from './structured-vibe-coding/data/closing-mascot.png'
import styles from './ClosingSlide.module.css'

export default function ClosingSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.quoteCard}>
              <blockquote className={styles.quote}>
                {"\"We're not building a big team of engineers. We're building a "}
                <span className={styles.highlight}>small, elite team</span>
                {" that knows how to "}
                <span className={styles.highlight}>harness agents</span>.
              </blockquote>
              <p className={styles.elaboration}>
                {"\"The skill isn't writing code anymore \u2014 it's orchestrating the ones who do. Defining scope, setting guardrails, reviewing output, and evolving the system.\""}
              </p>
              <div className={styles.author}>
                <img src={omarPhoto} alt="Omar Shahine" className={styles.authorPhoto} />
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>Omar Shahine</span>
                  <span className={styles.authorRole}>CVP Engineering, M365</span>
                </div>
              </div>
            </div>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>{"🎯"}</span>
                <h3>{"Define, don't code"}</h3>
                <p>Write AGENTS.md, instructions, and skills.</p>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>{"🏗️"}</span>
                <h3>{"Architect, don't build"}</h3>
                <p>Design the system of agents, scope their domains.</p>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>{"🔍"}</span>
                <h3>{"Review, don't write"}</h3>
                <p>{"Your job is quality gates. Agents ship \u2014 you approve."}</p>
              </div>
              <div className={styles.pillar}>
                <span className={styles.pillarIcon}>{"⚡"}</span>
                <h3>{"Multiply, don't add"}</h3>
                <p>One human + five agents beats five humans.</p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <img src={lobsterMascot} alt="Lobster mascot" className={styles.mascot} />
          </div>
        </div>
      </div>

      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
