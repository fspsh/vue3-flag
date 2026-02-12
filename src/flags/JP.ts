import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_JP_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_JP_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_JP_smb)"><path fill="#e31d1c" fill-rule="evenodd" d="M8 9.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_JP_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_JP_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_JP_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_JP_mdb)"><path fill="#e31d1c" fill-rule="evenodd" d="M10 12.188a4.688 4.688 0 1 0 0-9.376 4.688 4.688 0 0 0 0 9.376" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_JP_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_JP_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_JP_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_JP_lgb)"><path fill="#e31d1c" fill-rule="evenodd" d="M16 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_JP_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagJP',
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
