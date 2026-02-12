import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CH_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_CH_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CH_smb)"><path fill="#f1f9ff" fill-rule="evenodd" d="M9 3H7v2H5v2h2v2h2V7h2V5H9z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_CH_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CH_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_CH_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CH_mdb)"><path fill="#f1f9ff" fill-rule="evenodd" d="M11.25 3.75h-2.5v2.5h-2.5v2.5h2.5v2.5h2.5v-2.5h2.5v-2.5h-2.5z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_CH_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CH_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_CH_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CH_lgb)"><path fill="#f1f9ff" fill-rule="evenodd" d="M18 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_CH_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCH',
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
