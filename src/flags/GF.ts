import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GF_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><rect width="16" height="12" fill="#5eaa22" rx="1"/><path fill="#feca00" fill-rule="evenodd" d="m0 0 16 12H0z" clip-rule="evenodd"/><path fill="#e21835" fill-rule="evenodd" d="M7.965 7.203 6.223 8.412l.556-2.07L5.5 5.019l1.732-.072.733-2.047.733 2.047h1.73L9.15 6.342l.64 1.948z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GF_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GF_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5eaa22" d="M0 0h20v15H0z"/><path fill="#feca00" fill-rule="evenodd" d="m0 0 20 15H0z" clip-rule="evenodd"/><path fill="#e21835" fill-rule="evenodd" d="m9.957 9.004-2.179 1.511.696-2.588-1.599-1.653 2.165-.09.917-2.559.916 2.56h2.162l-1.596 1.742.8 2.435z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GF_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GF_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><rect width="32" height="24" fill="#5eaa22" rx="2"/><path fill="#feca00" fill-rule="evenodd" d="m0 0 32 24H0z" clip-rule="evenodd"/><path fill="#e21835" fill-rule="evenodd" d="m15.93 14.406-3.485 2.418 1.114-4.141L11 10.038l3.465-.143L15.93 5.8l1.466 4.095h3.458l-2.553 2.788 1.279 3.897z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GF_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGF',
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
