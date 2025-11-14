import { defineComponent, h } from 'vue'
import type { PropType, Component } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import Select from 'primevue/select'

export default defineComponent(
  (props: { context: FormKitFrameworkContext & { optionLabel?: string; drops?: any[] } }) => {
    return () =>
      h(Select as Component, {
        id: props.context.id,
        name: props.context.node.name,
        optionLabel: props.context.optionLabel,
        options: props.context.drops,
        modelValue: props.context._value,
        'onUpdate:modelValue': (v: any) => props.context.node.input(v),
        onBlur: props.context.handlers.blur,
        disabled: props.context.disabled,
      })
  },
  {
    props: {
      context: {
        type: Object as PropType<FormKitFrameworkContext & { optionLabel?: string; drops?: any[] }>,
        required: true,
      },
    },
  },
)
