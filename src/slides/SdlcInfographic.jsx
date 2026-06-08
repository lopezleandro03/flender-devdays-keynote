import { BottomBar, Slide } from '@deckio/deck-engine'
import sdlcImage from './anwb-devday/composed/data/sdlc-hourglass.png'
import styles from './SdlcInfographic.module.css'

export default function SdlcInfographic({ index, project }) {
  return (
    <Slide index={index} className={styles.sdlcInfographic}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <h2 className={styles.title}>SDLC in the Agentic Engineering Era</h2>
        <div className={styles.imageWrapper}>
          <img
            src={sdlcImage}
            alt="SDLC powered by AI is now an hourglass — comparing the old linear SDLC with the new agentic hourglass model"
            className={styles.infographic}
          />
        </div>
      </div>

      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
