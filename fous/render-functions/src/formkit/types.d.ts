import '@formkit/inputs'
// https://formkit.com/essentials/custom-inputs#typescript-support
declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    dropdown: {
      type: 'dropdown'
      optionLabel?: string
      drops?: any[]
    }
  }
}

export {}
