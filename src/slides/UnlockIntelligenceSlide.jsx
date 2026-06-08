import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './UnlockIntelligenceSlide.module.css'
import heroImage from './anwb-devday/data/attach-image-1780525198635.png'

export default function UnlockIntelligenceSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.unlockIntelligenceSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <img src={heroImage} alt="How do you unlock intelligence across the web and the enterprise?" className={styles.heroImage} />
      </div>
      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
