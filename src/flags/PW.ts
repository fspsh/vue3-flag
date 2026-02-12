import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_PW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#61c6f0" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_PW_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PW_smb)"><path fill="#fbcd17" fill-rule="evenodd" d="M5.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_PW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#61c6f0" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_PW_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PW_mdb)"><path fill="#fbcd17" fill-rule="evenodd" d="M7.188 11.25a4.062 4.062 0 1 0 0-8.125 4.062 4.062 0 0 0 0 8.125" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_PW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#61c6f0" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_PW_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PW_lgb)"><path fill="#fbcd17" fill-rule="evenodd" d="M11.5 18a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagPW',
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
