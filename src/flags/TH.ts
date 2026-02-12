import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TH_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f50101" fill-rule="evenodd" d="M0 8h16v4H0zM0 0h16v3H0z" clip-rule="evenodd"/><path fill="#3d58db" stroke="#fff" stroke-width="1.5" d="M0 3.25h-.75v5.5h17.5v-5.5H0Z"/></g><defs><clipPath id="fp_TH_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TH_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f50101" fill-rule="evenodd" d="M0 10h20v5H0zM0 0h20v3.75H0z" clip-rule="evenodd"/><path fill="#3d58db" stroke="#fff" stroke-width="1.875" d="M0 4.063h-.937v6.875h21.875V4.063H0Z"/></g><defs><clipPath id="fp_TH_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TH_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f50101" fill-rule="evenodd" d="M0 16h32v8H0zM0 0h32v6H0z" clip-rule="evenodd"/><path fill="#3d58db" stroke="#fff" stroke-width="3" d="M0 6.5h-1.5v11h35v-11H0Z"/></g><defs><clipPath id="fp_TH_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTH',
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
