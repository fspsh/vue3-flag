import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SD_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="m0 0 8 6-8 6z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SD_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SD_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="m0 0 10 7.5L0 15z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SD_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SD_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="m0 0 16 12L0 24z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SD_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSD',
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
