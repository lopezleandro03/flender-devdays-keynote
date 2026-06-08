/**
 * SAMPLE CONTENT ONLY
 * This slide contains scaffolded placeholder copy.
 * Agents must not use it as factual project context until the user replaces it.
 */
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'
import flenderLogo from '../data/logos/flender.png'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="cover.eyebrow" className={styles.eyebrow}>Flender DevDays</Editable>
          <h1>
            <Editable as="span" id="cover.titleBefore">Beyond Vibe Coding:</Editable> <Editable as="span" id="cover.titleHighlight" className={styles.highlight}>Engineering in the Age of Agents</Editable>
          </h1>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Speaker</span>
              <span className={styles.metaValue}>Leandro Lopez</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Solution Engineering Lead @ Microsoft</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomRightLogos} aria-hidden="true">
          <img src={flenderLogo} alt="" className={styles.partnerLogoImg} />
          <span className={styles.partnerDivider} />
          {/* Microsoft logo */}
          <svg className={styles.partnerLogo} viewBox="0 0 23 23" fill="none">
            <rect width="11" height="11" fill="#f25022" />
            <rect x="12" width="11" height="11" fill="#7fba00" />
            <rect y="12" width="11" height="11" fill="#00a4ef" />
            <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
          </svg>
          <span className={styles.partnerDivider} />
          {/* GitHub logo */}
          <svg className={styles.partnerLogo} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
