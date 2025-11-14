import { defaultConfig, createInput } from '@formkit/vue'
import Dropdown from '@/render-functions/dropdown'

export default defaultConfig({
  inputs: {
    dropdown: createInput(Dropdown, {
      props: ['optionLabel', 'drops'],
    }),
  },
})
