import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TT_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_TT_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TT_smb)"><path fill="#272727" stroke="#f7fcff" stroke-width=".732" d="m14.774 14.74-.265.218-.234-.25-15.172-16.2-.267-.285.303-.248L.687-3.291l.265-.217.234.25 15.172 16.2.267.285-.303.248z"/></g></g><defs><clipPath id="fp_TT_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TT_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_TT_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TT_mdb)"><path fill="#272727" stroke="#f7fcff" stroke-width=".915" d="m18.468 18.426-.332.271-.292-.312-18.965-20.25-.335-.357.38-.31L.857-4.113l.332-.27.292.311 18.965 20.25.335.357-.38.31z"/></g></g><defs><clipPath id="fp_TT_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TT_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_TT_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TT_lgb)"><path fill="#272727" stroke="#f7fcff" stroke-width="1.5" d="m29.56 29.496-.543.444-.48-.512L-1.807-2.971l-.548-.585.62-.508 3.097-2.532.543-.444.48.512L32.727 25.87l.549.586-.621.508z"/></g></g><defs><clipPath id="fp_TT_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTT',
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
