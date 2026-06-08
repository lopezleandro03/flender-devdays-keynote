import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './UseCaseVideo.module.css'
import videoSrc from './anwb-devday/.github/attachments/attach-deckio-intro-1775550503524.mp4'
import deckioIcon from './anwb-devday/composed/data/deckio.png'

export default function UseCaseVideo({ index, project }) {
  return (
    <Slide index={index} className={styles.useCaseVideo}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <h2 className={styles.title}>
          Meet <img src={deckioIcon} alt="" className={styles.deckioIcon} /><span className={styles.highlight}>DECKIO</span> — our playground
        </h2>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={videoSrc}
            controls
            playsInline
          />
        </div>
      </div>
      <BottomBar text="Flender DevDays" />
    </Slide>
  )
}
