import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GR_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#4564f9" d="M.014 2.75h16v1.5h-16z"/><path fill="#4564f9" fill-rule="evenodd" d="M0 0h16v1.5H0z" clip-rule="evenodd"/><path fill="#4564f9" d="M-.029 5.5h16V7h-16zM.056 8.2h16v1.5h-16zM.051 10.75h16v1.5h-16z"/><path fill="#4564f9" fill-rule="evenodd" d="M0 0h8v7H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M3.236 0h1.582v2.75H8v1.893H4.818V7.5H3.236V4.643H0V2.75h3.236z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GR_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GR_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#4564f9" d="M.017 3.438h20v1.875h-20z"/><path fill="#4564f9" fill-rule="evenodd" d="M0 0h20v1.875H0z" clip-rule="evenodd"/><path fill="#4564f9" d="M-.037 6.875h20V8.75h-20zM.07 10.25h20v1.875h-20zM.063 13.438h20v1.875h-20z"/><path fill="#4564f9" fill-rule="evenodd" d="M0 0h10v8.75H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M4.044 0h1.978v3.438H10v2.366H6.022v3.571H4.044V5.804H0V3.437h4.044z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GR_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GR_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#4564f9" fill-rule="evenodd" d="M0 5.5h32v2.957H0zm0 5.315h32v2.957H0zm32 5.128H0V18.9h32zM0 0h32v3H0z" clip-rule="evenodd"/><path fill="#4564f9" d="M0 21h32v3H0z"/><path fill="#4564f9" fill-rule="evenodd" d="M0 0h15v13.8H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M6 0h3v5.504h6v2.935H9V14.5H6V8.439H0V5.504h6z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GR_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGR',
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
