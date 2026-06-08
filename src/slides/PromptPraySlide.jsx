import React, { useState, useEffect } from 'react'
import { BottomBar, Editable, Slide, useSlides } from '@deckio/deck-engine'
import styles from './PromptPraySlide.module.css'

const layers = [
  { id: 'spec', label: 'Specification First', color: 'green' },
  { id: 'plan', label: 'Plan & Task Breakdown', color: 'green' },
  { id: 'agents', label: 'AGENTS.md', color: 'yellow' },
  { id: 'subagents', label: 'Subagents · Skills · Hooks', color: 'yellow' },
  { id: 'context', label: 'Context Management', color: 'blue' },
  { id: 'trajectory', label: 'Token Optimization', color: 'blue' },
  { id: 'retrieval', label: 'Retrieval Stack', color: 'orange' },
  { id: 'knowledge', label: 'Central Context Hub', color: 'orange' },
  { id: 'guardrails', label: 'Guardrails', color: 'pink' },
  { id: 'cicd', label: 'Agentic CI/CD', color: 'pink' },
  { id: 'tdi', label: 'Test-Driven Implementation', color: 'cyan' },
  { id: 'verify', label: 'Verification Loops', color: 'cyan' },
  { id: 'exit', label: 'Exit Criteria & Gates', color: 'purple' },
  { id: 'sandbox', label: 'Sandboxing & Isolation', color: 'purple' },
]

// Step mapping:
// 1: Prompt box
// 2: Arrow + Pray
// 3: VS + right title
// 4: green   — Specification First, Plan & Task Breakdown
// 5: yellow  — AGENTS.md, Subagents · Skills · Hooks
// 6: blue    — Context Management, Retrieval Stack
// 7: orange  — Test-Driven Implementation, Verification Loops
// 8: pink    — Exit Criteria & Gates, Sandboxing & Isolation
// 9: cyan    — Token Optimization, Agentic CI/CD
// 10: purple — Guardrails, Central Context Hub
const TOTAL_STEPS = 10

function layerVisible(layerIndex, step) {
  if (step < 4) return false
  // Each color pair reveals together: 0-1 → step 4, 2-3 → step 5, etc.
  const group = Math.floor(layerIndex / 2)
  return step >= group + 4
}

const FORWARD_KEYS = new Set(['ArrowRight', ' ', 'PageDown', 'Enter'])
const BACKWARD_KEYS = new Set(['ArrowLeft', 'PageUp'])

export default function PromptPraySlide({ index }) {
  const { current } = useSlides()
  const isActive = current === index
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (!isActive) setStep(1)
  }, [isActive])

  useEffect(() => {
    if (!isActive) return

    const handler = (e) => {
      if (FORWARD_KEYS.has(e.key)) {
        if (step < TOTAL_STEPS) {
          e.preventDefault()
          e.stopPropagation()
          setStep((s) => s + 1)
        }
      } else if (BACKWARD_KEYS.has(e.key)) {
        if (step > 1) {
          e.preventDefault()
          e.stopPropagation()
          setStep((s) => s - 1)
        }
      }
    }

    window.addEventListener('keydown', handler, true)
    return () => window.removeEventListener('keydown', handler, true)
  }, [isActive, step])

  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          {/* LEFT — the naive view */}
          <div className={styles.column}>
            <Editable as="h2" id="slide.leftTitle" className={`${styles.columnTitle} ${styles.naiveTitle}`}>
              What vibe coders<br />think it is
            </Editable>
            <div className={styles.naiveFlow}>
              <div className={`${styles.naiveStep} ${styles.promptStep} ${step >= 1 ? styles.revealed : styles.unrevealed}`}>
                <span className={styles.blockLabel}>Prompt</span>
              </div>
              <div className={`${styles.flowArrow} ${step >= 2 ? styles.revealed : styles.unrevealed}`}>↓</div>
              <div className={`${styles.naiveStep} ${styles.prayStep} ${step >= 2 ? styles.revealed : styles.unrevealed}`}>
                <span className={styles.blockLabel}>Pray</span>
                <span className={styles.prayHint}>hope it works</span>
              </div>
            </div>
          </div>

          {/* CENTER divider */}
          <div className={`${styles.vs} ${step >= 3 ? styles.revealed : styles.unrevealed}`}>
            <span className={styles.vsText}>vs</span>
          </div>

          {/* RIGHT — the real stack */}
          <div className={`${styles.column} ${step >= 3 ? styles.revealed : styles.unrevealed}`}>
            <Editable as="h2" id="slide.rightTitle" className={`${styles.columnTitle} ${styles.realTitle}`}>
              {"What agentic coding really is"}
            </Editable>
            <div className={styles.stack}>
              {layers.map((layer, i) => (
                <div
                  key={layer.id}
                  className={`${styles.layer} ${styles[layer.color]} ${layerVisible(i, step) ? styles.revealed : styles.unrevealed}`}
                >
                  <span className={styles.layerLabel}>{layer.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="slide.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
