import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GM_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 8h16v4H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h16v4H0z" clip-rule="evenodd"/><path fill="#3d58db" stroke="#fff" stroke-width="1.5" d="M0 4.25h-.75v3.5h17.5v-3.5H0Z"/></g><defs><clipPath id="fp_GM_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GM_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 10h20v5H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h20v5H0z" clip-rule="evenodd"/><path fill="#3d58db" stroke="#fff" stroke-width="1.5" d="M0 5.25h-.75v4.5h21.5v-4.5H0Z"/></g><defs><clipPath id="fp_GM_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GM_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 16h32v8H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h32v8H0z" clip-rule="evenodd"/><path fill="#3d58db" stroke="#fff" stroke-width="3" d="M0 8.5h-1.5v7h35v-7H0Z"/></g><defs><clipPath id="fp_GM_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGM',
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
