import { Slide } from '@deckio/deck-engine'
import styles from './ClosingImageSlide.module.css'
import closingBg from '../data/logos/closing-bg.png'

export default function ClosingImageSlide({ index }) {
  return (
    <Slide index={index} className={styles.closingImage}>
      <img src={closingBg} alt="Flender DevDays Closing" className={styles.fullImage} />
    </Slide>
  )
}
