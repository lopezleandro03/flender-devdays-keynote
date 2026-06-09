import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './BigPictureDivider.module.css'

export default function BigPictureDivider({ index, project }) {
  return (
    <Slide index={index} className={styles.bigPictureDivider}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <h1 className={styles.title}>
          <Editable as="span" id="slide.titleLine1">The Big</Editable>
          <br />
          <span className={styles.highlight}>
            <Editable as="span" id="slide.titleLine2">Picture</Editable>
          </span>
        </h1>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
