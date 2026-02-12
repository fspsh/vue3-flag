import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BQ_SA_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#fff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#f00000" fill-rule="evenodd" d="M0 5.832V0h8zM16 5.832V0H8z" clip-rule="evenodd"/><path fill="#00268d" fill-rule="evenodd" d="M0 5.832V12h8zM16 5.832v6.336L8 12z" clip-rule="evenodd"/><path fill="#feda00" fill-rule="evenodd" d="M7.857 7.128 6.098 8.382l.646-2.071L5 5.044h2.172L7.857 3l.726 2.043h2.113L8.967 6.312l.657 2.07z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BQ_SA_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BQ_SA_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#fff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#f00000" fill-rule="evenodd" d="M0 7.29V0h10zM20 7.29V0H10z" clip-rule="evenodd"/><path fill="#00268d" fill-rule="evenodd" d="M0 7.29V15h10zM20 7.29v7.92L10 15z" clip-rule="evenodd"/><path fill="#feda00" fill-rule="evenodd" d="m9.821 8.91-2.198 1.567.807-2.588-2.18-1.585h2.715l.856-2.554.907 2.554h2.642L11.21 7.89l.82 2.588z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BQ_SA_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BQ_SA_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#fff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#f00000" fill-rule="evenodd" d="M0 11.664V0h16zM32 11.664V0H16z" clip-rule="evenodd"/><path fill="#00268d" fill-rule="evenodd" d="M0 11.664V24h16zM32 11.664v12.672L16 24z" clip-rule="evenodd"/><path fill="#feda00" fill-rule="evenodd" d="m15.714 14.256-3.517 2.507 1.29-4.141L10 10.087h4.345L15.714 6l1.452 4.087h4.226l-3.457 2.535 1.314 4.141z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BQ_SA_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBQ_SA',
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
