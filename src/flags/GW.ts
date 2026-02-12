import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#fbcd17" fill-rule="evenodd" d="M8 0h8v6H8z" clip-rule="evenodd"/><path fill="#0b9e7a" fill-rule="evenodd" d="M8 6h8v6H8z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h8v12H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M4.465 7.303 2.723 8.512l.556-2.07L2 5.119l1.732-.072L4.465 3l.733 2.047h1.73L5.65 6.442l.64 1.948z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#fbcd17" fill-rule="evenodd" d="M10 0h10v7.5H10z" clip-rule="evenodd"/><path fill="#0b9e7a" fill-rule="evenodd" d="M10 7.5h10V15H10z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h10v15H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M5.582 9.129 3.403 10.64 4.1 8.052 2.5 6.399l2.165-.09.917-2.559.916 2.56H8.66L7.064 8.051l.8 2.435z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#fbcd17" fill-rule="evenodd" d="M16 0h16v12H16z" clip-rule="evenodd"/><path fill="#0b9e7a" fill-rule="evenodd" d="M16 12h16v12H16z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h16v24H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="m8.93 14.606-3.485 2.418 1.114-4.141L4 10.238l3.465-.143L8.93 6l1.466 4.095h3.458l-2.552 2.788 1.278 3.897z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGW',
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
