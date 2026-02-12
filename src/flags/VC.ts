import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_VC_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#ffdc17" fill-rule="evenodd" d="M4 0h8v12H4z" clip-rule="evenodd"/><path fill="#5fbf2b" fill-rule="evenodd" d="M12 0h4v12h-4z" clip-rule="evenodd"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h4v12H0z" clip-rule="evenodd"/><path fill="#5fbf2b" fill-rule="evenodd" d="m9.863 2.5-1.52 2.231 1.52 2.153 1.52-2.153zm-3.724.04L4.5 4.73l1.52 2.114L7.54 4.73zm.283 4.654L8.06 5.002l1.402 2.192L8.06 9.451z" clip-rule="evenodd"/></g><defs><clipPath id="fp_VC_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_VC_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#ffdc17" fill-rule="evenodd" d="M5 0h10v15H5z" clip-rule="evenodd"/><path fill="#5fbf2b" fill-rule="evenodd" d="M15 0h5v15h-5z" clip-rule="evenodd"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h5v15H0z" clip-rule="evenodd"/><path fill="#5fbf2b" fill-rule="evenodd" d="m12.329 3.125-1.9 2.79 1.9 2.69 1.9-2.69zm-4.656.05-2.048 2.74 1.9 2.64 1.9-2.64zm.354 5.818 2.048-2.74 1.752 2.74-1.752 2.82z" clip-rule="evenodd"/></g><defs><clipPath id="fp_VC_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_VC_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#ffdc17" fill-rule="evenodd" d="M8 0h16v24H8z" clip-rule="evenodd"/><path fill="#5fbf2b" fill-rule="evenodd" d="M24 0h8v24h-8z" clip-rule="evenodd"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h8v24H0z" clip-rule="evenodd"/><path fill="#5fbf2b" fill-rule="evenodd" d="m19.726 5.6-3.04 4.463 3.04 4.305 3.04-4.305zm-7.449.079L9 10.063l3.04 4.226 3.04-4.226zm.566 9.31 3.277-4.384 2.803 4.384L16.12 19.5z" clip-rule="evenodd"/></g><defs><clipPath id="fp_VC_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagVC',
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
