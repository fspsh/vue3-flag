import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GY_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#feca00" stroke="#f7fcff" d="M.5 11.293V.707L15.498 6z"/><path fill="#e11c1b" stroke="#272727" d="M-.5 11.978V.022L7.186 6z"/></g><defs><clipPath id="fp_GY_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GY_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#feca00" stroke="#f7fcff" stroke-width="1.25" d="M.625 14.117V.883L19.372 7.5z"/><path fill="#e11c1b" stroke="#272727" stroke-width="1.25" d="M-.625 14.972V.028L8.982 7.5z"/></g><defs><clipPath id="fp_GY_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GY_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#feca00" stroke="#f7fcff" stroke-width="2" d="M1 22.587V1.413L30.995 12z"/><path fill="#e11c1b" stroke="#272727" stroke-width="2" d="M-1 23.955V.045L14.371 12z"/></g><defs><clipPath id="fp_GY_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGY',
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
