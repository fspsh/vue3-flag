import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_LV_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 7h16v5H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 4h16v3H0z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h16v5H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LV_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_LV_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 9h20v6H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 5h20v3.75H0z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h20v6H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LV_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_LV_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 14h32v10H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 8h32v6H0z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h32v10H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LV_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagLV',
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
