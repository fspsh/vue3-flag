import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_DJ_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_DJ_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_DJ_smb)"><path fill="#69f" fill-rule="evenodd" d="M0-1v7h16v-7z" clip-rule="evenodd"/></g><path fill="#fff" fill-rule="evenodd" d="M0 0v12l9-6z" clip-rule="evenodd"/><mask id="fp_DJ_smc" width="9" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12l9-6z" clip-rule="evenodd"/></mask><g mask="url(#fp_DJ_smc)"><path fill="#e31d1c" fill-rule="evenodd" d="M3.501 6.947 2.254 7.7l.285-1.47L1.5 5.132l1.406-.06.595-1.371.595 1.372H5.5L4.464 6.23 4.776 7.7z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_DJ_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_DJ_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_DJ_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_DJ_mdb)"><path fill="#69f" fill-rule="evenodd" d="M0-1.25V7.5h20v-8.75z" clip-rule="evenodd"/></g><path fill="#fff" fill-rule="evenodd" d="M0 0v15l11.25-7.5z" clip-rule="evenodd"/><mask id="fp_DJ_mdc" width="12" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15l11.25-7.5z" clip-rule="evenodd"/></mask><g mask="url(#fp_DJ_mdc)"><path fill="#e31d1c" fill-rule="evenodd" d="m4.376 8.794-1.17.706.268-1.377L2.5 7.092l1.318-.056.558-1.286.558 1.286H6.25l-.971 1.087L5.57 9.5z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_DJ_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_DJ_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_DJ_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_DJ_lgb)"><path fill="#69f" fill-rule="evenodd" d="M0-2v14h32V-2z" clip-rule="evenodd"/></g><path fill="#fff" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"/><mask id="fp_DJ_lgc" width="18" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"/></mask><g mask="url(#fp_DJ_lgc)"><path fill="#e31d1c" fill-rule="evenodd" d="m7.002 14.07-1.87 1.13.426-2.204L4 11.347l2.11-.09.892-2.057.892 2.058H10l-1.554 1.738.468 2.204z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_DJ_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagDJ',
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
