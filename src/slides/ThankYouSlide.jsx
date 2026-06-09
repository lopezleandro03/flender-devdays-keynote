import { Slide } from '@deckio/deck-engine'
import styles from './ThankYouSlide.module.css'
import thankyouBg from '../data/logos/thankyou-bg.png'

export default function ThankYouSlide({ index }) {
  return (
    <Slide index={index} className={styles.thankYou}>
      <img src={thankyouBg} alt="Thank You" className={styles.fullImage} />
    </Slide>
  )
}
