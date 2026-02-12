import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MM_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 8h16v4H0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 4h16v4H0z" clip-rule="evenodd"/><path fill="#ffd018" fill-rule="evenodd" d="M0 0h16v4H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M8.031 7.988 5.456 9.625l.863-2.866-1.837-1.873 2.533-.055L8.135 2l1.022 2.867 2.526.044-1.899 1.907.887 2.727z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MM_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MM_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 10h20v5H0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 5h20v5H0z" clip-rule="evenodd"/><path fill="#ffd018" fill-rule="evenodd" d="M0 0h20v5H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m10.039 9.985-3.22 2.047L7.9 8.448l-2.296-2.34 3.166-.07 1.4-3.537 1.277 3.584 3.158.055-2.373 2.384 1.108 3.409z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MM_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MM_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 16h32v8H0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 8h32v8H0z" clip-rule="evenodd"/><path fill="#ffd018" fill-rule="evenodd" d="M0 0h32v8H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m16.062 15.976-5.15 3.274 1.727-5.733-3.674-3.745 5.065-.11 2.241-5.66 2.042 5.734 5.053.088-3.797 3.814 1.773 5.454z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MM_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMM',
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
