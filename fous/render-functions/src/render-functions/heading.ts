import { h, defineComponent } from 'vue'
import type { PropType, SetupContext } from 'vue'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export default defineComponent(
  (props: { as?: HeadingLevels }, { slots }: SetupContext) => {
    const Tag = props.as || 'h1'
    return () => h(Tag, {}, slots.default ? slots.default() : [])
  },
  { props: { as: { type: String as PropType<HeadingLevels>, default: 'h1' } } },
)
