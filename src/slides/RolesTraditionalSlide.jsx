import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './RolesTraditionalSlide.module.css'

const roles = [
  { id: 'engineer', emoji: '⚙️', label: 'ENGINEER', focus: 'Function', desc: 'How it is built' },
  { id: 'pm', emoji: '🎯', label: 'PM', focus: 'Fit', desc: 'Why it matters' },
  { id: 'design', emoji: '🎨', label: 'DESIGN', focus: 'Form', desc: 'How it works' },
]

export default function RolesTraditionalSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.rolesTraditional}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="h2" id="rolesTraditional.title" className={styles.title}>
            The evolution of digital product creation
          </Editable>
          <Editable as="p" id="rolesTraditional.subtitle" className={styles.subtitle}>
            Traditionally, specific disciplines delivered an output for their area of expertise
          </Editable>
        </div>

        <div className={styles.content}>
          <EditableList
            id="rolesTraditional.roles"
            items={roles}
            keyOf={(r) => r.id}
            className={styles.cards}
            itemClassName={styles.cardItem}
          >
            {(role) => (
              <div className={styles.card}>
                <div className={styles.roleOrb}>{role.emoji}</div>
                <Editable as="span" id={`rolesTraditional.roles.${role.id}.label`} className={styles.roleLabel}>
                  {role.label}
                </Editable>
                <div className={styles.divider} />
                <Editable as="span" id={`rolesTraditional.roles.${role.id}.focus`} className={styles.roleFocus}>
                  {role.focus}
                </Editable>
                <Editable as="span" id={`rolesTraditional.roles.${role.id}.desc`} className={styles.roleDesc}>
                  {role.desc}
                </Editable>
              </div>
            )}
          </EditableList>

          <Editable as="p" id="rolesTraditional.aside" className={styles.aside}>
            Each discipline has some variability, but generally stays in their lane
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="rolesTraditional.footer">Flender DevDays</Editable>} />
    </Slide>
  )
}
