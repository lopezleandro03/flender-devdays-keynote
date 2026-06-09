import CoverSlide from './src/slides/CoverSlide.jsx'
import anwbdevdayAgenticEvolutionSlide from './src/slides/AgenticEvolutionSlide.jsx'
import anwbdevdayVibeCodingSlide from './src/slides/VibeCodingSlide.jsx'
import anwbdevdayAbstractionLadderSlide from './src/slides/AbstractionLadderSlide.jsx'
import anwbdevdayAbstractionLadderDiagramSlide from './src/slides/AbstractionLadderDiagramSlide.jsx'
import anwbdevdayVibeCodingLimits from './src/slides/VibeCodingLimits.jsx'
import anwbdevdayAgenticDivider from './src/slides/AgenticDivider.jsx'
import anwbdevdayPromptPraySlide from './src/slides/PromptPraySlide.jsx'
import anwbdevdayUseCaseVideo from './src/slides/UseCaseVideo.jsx'
import anwbdevdayAgentsMdSlide from './src/slides/AgentsMdSlide.jsx'
import anwbdevdayCustomInstructions from './src/slides/CustomInstructions.jsx'
import anwbdevdaySkillsAndPlans from './src/slides/SkillsAndPlans.jsx'
import anwbdevdaySdlcInfographic from './src/slides/SdlcInfographic.jsx'
import anwbdevdayDevToolsIdeTuiSlide from './src/slides/DevToolsIdeTuiSlide.jsx'
import anwbdevdayDevToolsTuiAdeSlide from './src/slides/DevToolsTuiAdeSlide.jsx'
import anwbdevdayDevToolsEvolutionSlide from './src/slides/DevToolsEvolutionSlide.jsx'
import structuredvibecodingClosingSlide from './src/slides/ClosingSlide.jsx'
import anwbdevdayIqPlatformSlide from './src/slides/IqPlatformSlide.jsx'
import anwbdevdayUnlockIntelligenceSlide from './src/slides/UnlockIntelligenceSlide.jsx'
import anwbdevdayCopilotCliScreenSlide from './src/slides/CopilotCliScreenSlide.jsx'
import anwbdevdayDemoAnnouncementSlide from './src/slides/DemoAnnouncementSlide.jsx'
import anwbdevdayClosingQuoteSlide from './src/slides/ClosingQuoteSlide.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'
import CustomThankYouSlide from './src/slides/ThankYouSlide.jsx'

export default {
  id: 'flender-devdays-keynote',
  title: 'Flender DevDays keynote',
  subtitle: 'A composed presentation',
  icon: '🔀',
  accent: '#3fb950',
  slides: [
    CoverSlide,
    anwbdevdayAgenticEvolutionSlide,
    anwbdevdayVibeCodingSlide,
    anwbdevdayAbstractionLadderSlide,
    anwbdevdayAbstractionLadderDiagramSlide,
    anwbdevdayVibeCodingLimits,
    anwbdevdayAgenticDivider,
    anwbdevdayPromptPraySlide,
    anwbdevdayCopilotCliScreenSlide,
    anwbdevdayDevToolsIdeTuiSlide,
    anwbdevdayDevToolsTuiAdeSlide,
    anwbdevdayDevToolsEvolutionSlide,
    anwbdevdayClosingQuoteSlide,
    structuredvibecodingClosingSlide,
    CustomThankYouSlide,
  ],
}
