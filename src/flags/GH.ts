import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GH_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 8h16v4H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M0 4h16v4H0z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h16v4H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M8.038 7.245 6.295 8.454l.557-2.07-1.28-1.323 1.733-.072.733-2.047.733 2.047h1.73L9.223 6.384l.639 1.948z" clip-rule="evenodd" opacity=".9"/></g><defs><clipPath id="fp_GH_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GH_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 10h20v5H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M0 5h20v5H0z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h20v5H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="m10.047 9.057-2.178 1.51.696-2.588-1.6-1.653 2.166-.09.916-2.558.916 2.559h2.162L11.53 7.979l.799 2.436z" clip-rule="evenodd" opacity=".9"/></g><defs><clipPath id="fp_GH_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GH_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 16h32v8H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M0 8h32v8H0z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h32v8H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="m16.075 14.49-3.485 2.418 1.114-4.14-2.944-2.646 3.85-.143 1.465-4.095 1.466 4.095h3.827l-2.92 2.788 1.278 3.897z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GH_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGH',
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
