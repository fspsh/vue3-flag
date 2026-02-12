import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SO_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#56c6f5" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M7.99 7.359 6.106 8.555l.632-2.094-1.343-1.369 1.85-.04.82-2.068.746 2.095 1.846.032-1.387 1.394.647 1.992z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SO_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SO_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#56c6f5" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m10.112 9.198-2.353 1.496.79-2.618L6.87 6.365l2.314-.05 1.023-2.585.933 2.619 2.308.04-1.735 1.742.81 2.49z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SO_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SO_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#56c6f5" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m16.179 14.717-3.764 2.393 1.262-4.189-2.684-2.737 3.701-.08 1.637-4.137 1.493 4.19 3.692.065-2.775 2.788 1.296 3.985z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SO_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSO',
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
