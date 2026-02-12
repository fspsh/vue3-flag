import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_PS_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="m0 1 8 5-8 5z" clip-rule="evenodd"/></g><defs><clipPath id="fp_PS_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_PS_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 1.25 10 7.5 0 13.75z" clip-rule="evenodd"/></g><defs><clipPath id="fp_PS_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><mask id="fp_PS_lga" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#fff" d="M0 0h32v24H0z"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_PS_lga)"><path fill="#f7fcff" d="M0 0h32v24H0z"/><path fill="#272727" d="M0 0v8h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e31d1c" d="m0 2 16 10L0 22z"/></g></svg>`
} as const

export default defineComponent({
  name: 'FlagPS',
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
