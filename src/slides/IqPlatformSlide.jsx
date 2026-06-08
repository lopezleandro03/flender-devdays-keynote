import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './IqPlatformSlide.module.css'
import iqImage from './anwb-devday/data/attach-image-1780525026418.png'

export default function IqPlatformSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.iqPlatformSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <img src={iqImage} alt="IQ Platform — Web IQ, Work IQ, Fabric IQ, Foundry IQ powering Agents" className={styles.heroImage} />
      </div>
      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
