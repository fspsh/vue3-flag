import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CL_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h7v7H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M7-1h9v8H7z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 7h16v5H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M3.507 4.892 1.605 6.027l.939-1.932L.882 2.84 2.8 2.82l.723-1.714.467 1.713 1.816.009-1.382 1.227.718 1.972z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CL_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CL_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h9v9H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M8.75-1.25H20v10H8.75z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 8h20v7H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m4.384 5.615-2.377 1.42L3.18 4.618l-2.078-1.57 2.399-.025.905-2.142.582 2.142 2.27.01L5.532 4.57l.896 2.465z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CL_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CL_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h14v14H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M14-2h18v16H14z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 14h32v10H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m7.014 9.783-3.803 2.272L5.088 8.19 1.764 5.68 5.6 5.639 7.05 2.21l.932 3.428 3.632.017L8.851 8.11l1.434 3.944z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CL_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCL',
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
