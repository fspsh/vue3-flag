import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_LR_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M.014 2.75h16v1.5h-16z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h16v1.5H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M-.029 5.5h16V7h-16zM.056 8.2h16v1.5h-16zM.051 10.75h16v1.5h-16z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h8v7H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M4.066 4.607 2.606 5.62l.466-1.736L2 2.776l1.452-.06L4.066 1l.615 1.716H6.13L5.06 3.884l.536 1.633z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LR_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_LR_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M.017 3.438h20v1.875h-20z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h20v1.875H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M-.037 6.875h20V8.75h-20zM.07 10.25h20v1.875h-20zM.063 13.438h20v1.875h-20z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h10v8.75H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M5.083 5.758 3.257 7.025l.583-2.17L2.5 3.47l1.815-.075.768-2.145.768 2.145h1.811l-1.337 1.46.67 2.042z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LR_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_LR_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M.027 5.5h32v3h-32z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h32v3H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M-.059 11h32v3h-32zM.112 16.4h32v3h-32zM.102 21.5h32v3h-32z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h16v14H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m8.132 9.213-2.92 2.026.933-3.47L4 5.552l2.904-.12L8.132 2l1.23 3.432h2.898l-2.14 2.337 1.072 3.266z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LR_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagLR',
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
