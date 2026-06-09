import React from 'react'
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import vscodeLogo from './anwb-devday/data/logos/vscode.svg'
import copilotCliLogo from './anwb-devday/data/logos/github-copilot-cli.png'
import tuiVideo from '../../.github/attachments/attach-2026-05-29-13-34-19-edited-1780975820083.mp4'
import styles from './DevToolsIdeTuiSlide.module.css'

const eras = [
  {
    id: 'ide',
    icon: '🖥️',
    label: 'IDE',
    name: 'Integrated Dev Environment',
    desc: 'GUI-first. Extensions. Language servers. Deep integration. Still the powerhouse for complex projects.',
    era: '2000s–2020s',
    glow: 'var(--blue-glow)',
    exampleLogo: vscodeLogo,
    exampleAlt: 'VS Code',
    exampleLabel: 'VS Code',
  },
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
]

export default function DevToolsIdeTuiSlide({ index, project }) {
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
            From IDE to Terminal UI
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
              src={tuiVideo}
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
