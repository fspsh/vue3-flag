import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BE_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#feca00" fill-rule="evenodd" d="M5 0h5.5v12H5z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M10.5 0H16v12h-5.5z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M0 0h5.5v12H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BE_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BE_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#feca00" fill-rule="evenodd" d="M6 0h8v15H6z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M14 0h6v15h-6z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M0 0h6v15H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BE_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BE_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#feca00" fill-rule="evenodd" d="M10 0h11v24H10z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M21 0h11v24H21z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M0 0h11v24H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BE_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBE',
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
