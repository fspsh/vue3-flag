import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BD_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#38a17e" d="M0 0h16v12H0z"/><path fill="#f72e45" fill-rule="evenodd" d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/></g><defs><clipPath id="fp_BD_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BD_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#38a17e" d="M0 0h20v15H0z"/><path fill="#f72e45" fill-rule="evenodd" d="M7.5 11.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" clip-rule="evenodd"/></g><defs><clipPath id="fp_BD_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BD_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#38a17e" d="M0 0h32v24H0z"/><path fill="#f72e45" fill-rule="evenodd" d="M13 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14" clip-rule="evenodd"/></g><defs><clipPath id="fp_BD_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBD',
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
