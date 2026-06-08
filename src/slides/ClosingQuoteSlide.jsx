import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ClosingQuoteSlide.module.css'

export default function ClosingQuoteSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.closingQuote}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={styles.terminalGlow} aria-hidden="true" />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.terminalTitle}>~/agentic-engineering</span>
          </div>
          <div className={styles.terminalBody}>
            <p className={styles.prompt}>
              <span className={styles.promptSymbol}>❯</span>{" "}
              <span className={styles.cmd}>git commit -m</span>{" "}
              <span className={styles.string}>{'"goodbye-boilerplate"'}</span>
            </p>
            <p className={styles.output}>
              <Editable as="span" id="slide.line1">✓ 10,000 lines deleted</Editable>
            </p>
            <p className={styles.output}>
              <Editable as="span" id="slide.line2">✓ 0 lines written by hand</Editable>
            </p>
            <p className={styles.output}>
              <Editable as="span" id="slide.line3">✓ 1 agent orchestrated</Editable>
            </p>
            <p className={`${styles.prompt} ${styles.promptLast}`}>
              <span className={styles.promptSymbol}>❯</span>{" "}
              <span className={styles.cursor}>_</span>
            </p>
          </div>
        </div>

        <blockquote className={styles.quote}>
          <Editable as="span" id="slide.quote">
            {"Don't only write code."}
          </Editable>
          <br />
          <span className={styles.highlight}>
            <Editable as="span" id="slide.quoteLine2">
              Start harnessing agents.
            </Editable>
          </span>
        </blockquote>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
