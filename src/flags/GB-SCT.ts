import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GB_SCT_sma)"><path fill="#265aad" d="M0 0h16v12H0z"/><path fill="#fff" fill-rule="evenodd" d="M8 7.25.6 12.8l-1.2-1.6L6.333 6-.6.8.6-.8 8 4.75 15.4-.8 16.6.8 9.667 6l6.933 5.2-1.2 1.6z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GB_SCT_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GB_SCT_mda)"><path fill="#265aad" d="M0 0h20v15H0z"/><path fill="#fff" fill-rule="evenodd" d="M7.917 7.5-.75 1l1.5-2L10 5.938 19.25-1l1.5 2-8.667 6.5L20.75 14l-1.5 2L10 9.063.75 16l-1.5-2z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GB_SCT_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GB_SCT_lga)"><path fill="#265aad" d="M0 0h32v24H0z"/><path fill="#fff" fill-rule="evenodd" d="M16 14.5 1.2 25.6l-2.4-3.2L12.667 12-1.2 1.6l2.4-3.2L16 9.5 30.8-1.6l2.4 3.2L19.333 12 33.2 22.4l-2.4 3.2z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GB_SCT_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGB_SCT',
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
