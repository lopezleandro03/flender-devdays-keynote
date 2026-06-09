import { Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'
import coverBg from '../data/logos/cover-bg.png'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <img src={coverBg} alt="Flender DevDays" className={styles.fullImage} />
    </Slide>
  )
}
