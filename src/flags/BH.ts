import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BH_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><rect width="16" height="12" fill="#e31d1c" rx="1"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h3.4L6 1 3.4 2 6 3 3.4 4 6 5 3.4 6 6 7 3.4 8 6 9l-2.6 1L6 11l-2.6 1H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BH_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BH_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h4.25L7.5 1.25 4.25 2.5 7.5 3.75 4.25 5 7.5 6.25 4.25 7.5 7.5 8.75 4.25 10l3.25 1.25-3.25 1.25 3.25 1.25L4.25 15H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BH_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BH_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h6.8L12 2 6.8 4 12 6 6.8 8l5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BH_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBH',
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
