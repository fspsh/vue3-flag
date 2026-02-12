import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SC_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_SC_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SC_smb)"><path fill="#ffd018" fill-rule="evenodd" d="M0 11.998 8.076-1h8.075z" clip-rule="evenodd"/><path fill="#e31d1c" d="M0 11.998 17.232 5.5v-8.05z"/><path fill="#f7fcff" d="M0 11.998 17.232 9.5V5.45z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 11.998h17.232v-3.55z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_SC_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SC_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_SC_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SC_mdb)"><path fill="#ffd018" fill-rule="evenodd" d="M0 14.998 10.094-1.25H20.19z" clip-rule="evenodd"/><path fill="#e31d1c" d="m0 14.998 21.54-8.124V-3.19z"/><path fill="#f7fcff" d="m0 14.998 21.54-3.124V6.81z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 14.998h21.54V10.56z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_SC_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SC_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_SC_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SC_lgb)"><path fill="#ffd018" fill-rule="evenodd" d="M0 23.997 16.151-2h16.151z" clip-rule="evenodd"/><path fill="#e31d1c" d="m0 23.997 34.463-12.999V-5.103z"/><path fill="#f7fcff" d="m0 23.997 34.463-4.999v-8.101z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 23.997h34.463v-7.1z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_SC_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSC',
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
