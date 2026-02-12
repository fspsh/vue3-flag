import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_JO_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_JO_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_JO_smb)"><path fill="#272727" d="M0 0v4h16V0z"/><path fill="#093" d="M0 8v4h16V8z"/></g><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v12l10-6z" clip-rule="evenodd"/><mask id="fp_JO_smc" width="10" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12l10-6z" clip-rule="evenodd"/></mask><g mask="url(#fp_JO_smc)"><path fill="#f7fcff" fill-rule="evenodd" d="m4.5 6.935-.934.565.213-1.102L3 5.573l1.055-.044L4.5 4.5l.446 1.029H6l-.777.87.234 1.101z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_JO_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_JO_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_JO_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_JO_mdb)"><path fill="#272727" d="M0 0v5h20V0z"/><path fill="#093" d="M0 10v5h20v-5z"/></g><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v15l12.5-7.5z" clip-rule="evenodd"/><mask id="fp_JO_mdc" width="13" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15l12.5-7.5z" clip-rule="evenodd"/></mask><g mask="url(#fp_JO_mdc)"><path fill="#f7fcff" fill-rule="evenodd" d="m5.626 8.67-1.17.705.268-1.377-.974-1.031 1.318-.056.558-1.286.558 1.286H7.5l-.971 1.087.292 1.377z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_JO_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_JO_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_JO_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_JO_lgb)"><path fill="#272727" d="M0 0v8h32V0z"/><path fill="#093" d="M0 16v8h32v-8z"/></g><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v24l20-12z" clip-rule="evenodd"/><mask id="fp_JO_lgc" width="20" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24l20-12z" clip-rule="evenodd"/></mask><g mask="url(#fp_JO_lgc)"><path fill="#f7fcff" fill-rule="evenodd" d="M9.002 13.87 7.132 15l.426-2.204L6 11.146l2.11-.088L9.001 9l.892 2.058H12l-1.554 1.738.468 2.204z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_JO_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagJO',
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
