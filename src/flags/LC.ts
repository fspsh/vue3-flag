import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_LC_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#7ccff5" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m8 2 4 8H4z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m8 4 3.5 6h-7z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m8 7 4 3H4z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LC_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_LC_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#7ccff5" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m10 2.5 5 10H5z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m10 5 4.375 7.5h-8.75z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m10 8.75 5 3.75H5z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LC_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_LC_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#7ccff5" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m16 4 8 16H8z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m16 8 7 12H9z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m16 14 8 6H8z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LC_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagLC',
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
