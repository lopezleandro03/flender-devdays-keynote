import React, { useState, useEffect, useCallback } from 'react'
import { BottomBar, Editable, Slide, useSlides } from '@deckio/deck-engine'
import vscodeLogo from './anwb-devday/data/logos/vscode.svg'
import copilotCliLogo from './anwb-devday/data/logos/github-copilot-cli.png'
import copilotAppLogo from './anwb-devday/data/logos/github-copilot-app.png'
import styles from './DevToolsEvolutionSlide.module.css'

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

// Total substeps: 1 (first card) → 2 → 3 → 4 (punchline) → done (let navigation advance)
const TOTAL_STEPS = eras.length + 1 // 3 cards + punchline

const FORWARD_KEYS = new Set(['ArrowRight', ' ', 'PageDown', 'Enter'])
const BACKWARD_KEYS = new Set(['ArrowLeft', 'PageUp'])

export default function DevToolsEvolutionSlide({ index, project }) {
  const { current } = useSlides()
  const isActive = current === index
  const [visible, setVisible] = useState(1)

  // Reset when navigating away and back
  useEffect(() => {
    if (!isActive) setVisible(1)
  }, [isActive])

  // Intercept keyboard events in capture phase (before SlideContext handler)
  useEffect(() => {
    if (!isActive) return

    const handler = (e) => {
      if (FORWARD_KEYS.has(e.key)) {
        if (visible < TOTAL_STEPS) {
          // Still have substeps to reveal — consume the event
          e.preventDefault()
          e.stopPropagation()
          setVisible((v) => v + 1)
        }
        // else: all revealed, let event bubble to SlideContext for slide advance
      } else if (BACKWARD_KEYS.has(e.key)) {
        if (visible > 1) {
          // Step backward through substeps
          e.preventDefault()
          e.stopPropagation()
          setVisible((v) => v - 1)
        }
        // else: at initial state, let event bubble for slide back
      }
    }

    // Capture phase ensures we run before SlideContext's document-level handler
    window.addEventListener('keydown', handler, true)
    return () => window.removeEventListener('keydown', handler, true)
  }, [isActive, visible])

  return (
    <Slide index={index} className={styles.devToolsEvolution}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="h2" id="slide.title" className={styles.title}>
            Developer Tools Are Evolving
          </Editable>
          <Editable as="p" id="slide.subtitle" className={styles.subtitle}>
            An improving experience for humans and agents to collaborate
          </Editable>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          <div className={styles.synergyLine} />

          {eras.map((era, i) => (
            <React.Fragment key={era.id}>
              <div className={styles.eraColumn} style={{ '--era-glow': era.glow }}>
                <div
                  className={`${styles.eraCard} ${styles[`era${i}`]} ${i < visible ? styles.visible : styles.hidden}`}
                  style={{ '--era-glow': era.glow }}
                >
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
                <div className={`${styles.exampleBadge} ${i < visible ? styles.visible : styles.hidden}`}>
                  {era.exampleLogo ? (
                    <img src={era.exampleLogo} alt={era.exampleAlt} className={styles.exampleLogo} />
                  ) : (
                    <span className={styles.examplePlaceholder}>TBD</span>
                  )}
                  <span className={styles.exampleLabel}>{era.exampleLabel}</span>
                </div>
              </div>
              {i < eras.length - 1 && (
                <div className={`${styles.arrow} ${i + 1 < visible ? styles.arrowVisible : styles.arrowHidden}`}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className={`${styles.punchline} ${visible > eras.length ? styles.visible : styles.hidden}`}>
          <Editable as="p" id="slide.punchline" className={styles.punchlineText}>
            Evolution, not elimination — different tools for different moments.
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
