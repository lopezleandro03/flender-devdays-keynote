import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import tuiVideo from '../../.github/attachments/attach-2026-05-29-13-34-19-edited-1780975820083.mp4'
import styles from './SdlcInfographic.module.css'

export default function SdlcInfographic({ index, project }) {
  return (
    <Slide index={index} className={styles.sdlcInfographic}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="h2" id="slide.title" className={styles.title}>Terminal User Interfaces</Editable>
        <div className={styles.videoWrapper}>
          <video
            src={tuiVideo}
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
