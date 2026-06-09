import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import copilotCliLogo from './anwb-devday/data/logos/github-copilot-cli.png'
import copilotAppLogo from './anwb-devday/data/logos/github-copilot-app.png'
import adeVideo from '../../.github/attachments/attach-603551591-50f215b5-f708-444e-83f7-3303bfa97963-1780976370575.mp4'
import styles from './DevToolsTuiAdeSlide.module.css'

const eras = [
  {
    id: 'tui',
    icon: '⌨️',
    label: 'TUI',
    name: 'Terminal UI Renaissance',
    desc: 'CLI-native agents. Headless workflows. Lightweight, fast, perfect for agent-driven iteration.',
    era: '2025–2026',
    glow: 'var(--purple)',
    exampleLogo: copilotCliLogo,
    exampleAlt: 'GitHub Copilot CLI',
    exampleLabel: 'Copilot CLI',
  },
  {
    id: 'ade',
    icon: '🤖',
    label: 'ADE',
    name: 'Agent Development Environment',
    desc: 'Agents orchestrate. Humans steer. Purpose-built for autonomous, multi-step engineering.',
    era: '2026 →',
    glow: 'var(--green)',
    exampleLogo: copilotAppLogo,
    exampleAlt: 'GitHub Copilot App',
    exampleLabel: 'Copilot App',
  },
]

export default function DevToolsTuiAdeSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="h2" id="slide.title" className={styles.title}>
            Developer Tools Are Evolving
          </Editable>
          <Editable as="p" id="slide.subtitle" className={styles.subtitle}>
            From Terminal UI to Agent Development Environment
          </Editable>
        </div>

        <div className={styles.splitLayout}>
          <div className={styles.cardsPanel}>
            {eras.map((era, i) => (
              <React.Fragment key={era.id}>
                {i > 0 && <div className={styles.arrow}>→</div>}
                <div className={styles.eraGroup}>
                  <div className={styles.eraCard} style={{ '--era-glow': era.glow }}>
                    <div className={styles.eraIcon}>{era.icon}</div>
                    <div className={styles.eraLabel}>{era.label}</div>
                    <div className={styles.eraName}>
                      <Editable as="span" id={`slide.eras.${era.id}.name`}>
                        {era.name}
                      </Editable>
                    </div>
                    <div className={styles.eraDesc}>
                      <Editable as="span" id={`slide.eras.${era.id}.desc`}>
                        {era.desc}
                      </Editable>
                    </div>
                    <div className={styles.eraDate}>{era.era}</div>
                  </div>
                  <div className={styles.exampleBadge}>
                    <img src={era.exampleLogo} alt={era.exampleAlt} className={styles.exampleLogo} />
                    <span className={styles.exampleLabel}>{era.exampleLabel}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className={styles.videoPanel}>
            <video
              src={adeVideo}
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            />
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
