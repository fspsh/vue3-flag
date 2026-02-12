import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#78d843" fill-rule="evenodd" d="M6 6h10v6H6z" clip-rule="evenodd"/><path fill="#ea1a1a" fill-rule="evenodd" d="M6 0h10v6H6z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h6v12H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#78d843" fill-rule="evenodd" d="M7 7.5h13V15H7z" clip-rule="evenodd"/><path fill="#ea1a1a" fill-rule="evenodd" d="M7 0h13v7.5H7z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h8v15H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MG_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#78d843" fill-rule="evenodd" d="M12 12h20v12H12z" clip-rule="evenodd"/><path fill="#ea1a1a" fill-rule="evenodd" d="M12 0h20v12H12z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h12v24H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MG_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMG',
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
