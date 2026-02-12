import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BJ_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#dd2c2b" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v7h16V0z" clip-rule="evenodd"/><path fill="#5eaa22" d="M0 0h7v12H0z"/></g><defs><clipPath id="fp_BJ_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BJ_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#dd2c2b" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v7.5h20V0z" clip-rule="evenodd"/><path fill="#5eaa22" d="M0 0h9v15H0z"/></g><defs><clipPath id="fp_BJ_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BJ_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#dd2c2b" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v14h32V0z" clip-rule="evenodd"/><path fill="#5eaa22" d="M0 0h14v24H0z"/></g><defs><clipPath id="fp_BJ_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBJ',
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
