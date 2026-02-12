import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GB_ENG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" d="M0 0h16v12H0z"/><path fill="#f50302" fill-rule="evenodd" d="M8.875 0H7.097v5H0v2h7.097v5h1.778V7H16V5H8.875z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GB_ENG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GB_ENG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" d="M0 0h20v15H0z"/><path fill="#f50302" fill-rule="evenodd" d="M11 0H8.5v6.25H0v2.5h8.5V15H11V8.75h9v-2.5h-9z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GB_ENG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GB_ENG_lga)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" d="M0 0h16v12H0z"/><path fill="#f50302" fill-rule="evenodd" d="M8.875 0H7.097v5H0v2h7.097v5h1.778V7H16V5H8.875z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GB_ENG_lga"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGB_ENG',
  props: {
    size: { 
      type: String as PropType<BaseFlagProps['size']>, 
      default: 'md' 
    },
    gradient: { 
      type: String as PropType<BaseFlagProps['gradient']>, 
      default: 'none' 
    },
    hasShadow: { type: Boolean, default: false },
    hasBorder: { type: Boolean, default: true },
    hasBorderRadius: { type: Boolean, default: true }
  },
  setup(props) {
    return () => 
      h(FlagFrame, props as any, {
        default: () => h('span', {
          class: 'flag-svg-root',
          innerHTML: svg[props.size as keyof typeof svg] || svg.md
        })
      })
  }
})
