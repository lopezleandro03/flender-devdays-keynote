import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AgenticDivider.module.css'

const skills = [
  { id: 'prompting', label: 'Prompt Engineering' },
  { id: 'context', label: 'Context Architecture' },
  { id: 'guardrails', label: 'Guardrails & Safety' },
  { id: 'memory', label: 'Agent Memory' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'evaluation', label: 'Eval & Feedback' },
]

export default function AgenticDivider({ index, project }) {
  return (
    <Slide index={index} className={styles.agenticDivider}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <h1 className={styles.title}>
          <Editable as="span" id="slide.titleLine1">Agentic</Editable>
          <br />
          <span className={styles.highlight}>
            <Editable as="span" id="slide.titleLine2">Engineering</Editable>
          </span>
        </h1>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
