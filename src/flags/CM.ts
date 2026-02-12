import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CM_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e11c1b" fill-rule="evenodd" d="M5 0h6v12H5z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m8.038 7.245-1.743 1.21.557-2.071-1.28-1.323 1.733-.072.733-2.047.733 2.047h1.73L9.223 6.384l.639 1.948z" clip-rule="evenodd"/><path fill="#fbcd17" fill-rule="evenodd" d="M11 0h5v12h-5z" clip-rule="evenodd"/><path fill="#0b9e7a" fill-rule="evenodd" d="M0 0h5v12H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CM_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CM_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e11c1b" fill-rule="evenodd" d="M6 0h8v15H6z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M10.047 9.056 7.87 10.568l.696-2.589-1.6-1.653 2.166-.09.916-2.558.916 2.559h2.162L11.53 7.979l.799 2.436z" clip-rule="evenodd"/><path fill="#fbcd17" fill-rule="evenodd" d="M14 0h6v15h-6z" clip-rule="evenodd"/><path fill="#0b9e7a" fill-rule="evenodd" d="M0 0h6v15H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CM_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CM_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e11c1b" fill-rule="evenodd" d="M10 0h12v24H10z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m16.075 14.49-3.485 2.418 1.114-4.14-2.56-2.646 3.466-.143 1.465-4.095 1.466 4.095h3.46l-2.554 2.788 1.279 3.897z" clip-rule="evenodd"/><path fill="#fbcd17" fill-rule="evenodd" d="M22 0h10v24H22z" clip-rule="evenodd"/><path fill="#0b9e7a" fill-rule="evenodd" d="M0 0h10v24H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CM_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCM',
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
