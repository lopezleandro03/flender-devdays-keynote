import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ContactDetailsSlide.module.css'
import closingBg from '../data/logos/closing-bg.png'
import flenderLogo from '../data/logos/flender.png'

export default function ContactDetailsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.contactDetails}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        {/* Header row */}
        <div className={styles.header}>
          <Editable as="h1" id="slide.title">Contact details</Editable>
          <img src={flenderLogo} alt="Flender" className={styles.flenderLogoTop} />
        </div>

        {/* Main content: two columns */}
        <div className={styles.columns}>
          {/* Left: branded card image */}
          <div className={styles.cardColumn}>
            <img src={closingBg} alt="Flender DevDays" className={styles.cardImage} />
          </div>

          {/* Right: contact info */}
          <div className={styles.infoColumn}>
            <Editable as="h2" id="slide.name">JOHN DOE</Editable>
            <Editable as="p" id="slide.position" className={styles.position}>Description of the position</Editable>
            <Editable as="p" id="slide.department" className={styles.department}>Group / region / department XY</Editable>

            <div className={styles.addressBlock}>
              <Editable as="p" id="slide.street">Street</Editable>
              <Editable as="p" id="slide.city">ZIP code / city</Editable>
              <Editable as="p" id="slide.country">Country</Editable>
            </div>

            <div className={styles.contactBlock}>
              <Editable as="p" id="slide.phone">P +49 2871 92 1234</Editable>
              <Editable as="p" id="slide.mobile">M +49 152 1234 5678</Editable>
              <Editable as="p" id="slide.email">john.doe@flender.com</Editable>
            </div>
          </div>
        </div>

        {/* Bottom row: website, LinkedIn, QR, Microsoft logo */}
        <div className={styles.bottomRow}>
          <Editable as="span" id="slide.website" className={styles.website}>flender.com</Editable>
          <div className={styles.bottomLogos}>
            {/* LinkedIn icon */}
            <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            {/* QR code placeholder — replace src with your own QR */}
            <div className={styles.qrPlaceholder}>
              <span className={styles.qrText}>QR</span>
            </div>
            {/* Microsoft logo placeholder — replace with your logo */}
            <div className={styles.microsoftPlaceholder}>
              <svg className={styles.microsoftLogo} viewBox="0 0 23 23">
                <rect x="1" y="1" width="10" height="10" fill="#f25022" />
                <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
                <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
                <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Internal / © Flender GmbH 2026. All rights reserved.</Editable>} />
    </Slide>
  )
}
