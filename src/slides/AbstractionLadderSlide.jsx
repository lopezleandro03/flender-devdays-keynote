import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AbstractionLadderSlide.module.css'

export default function AbstractionLadderSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={styles.body}>
        
        <h2 className={styles.title}>
          Another leap on the<br />
          <span className={styles.highlight}>abstraction ladder</span>
        </h2>
      </div>
      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
