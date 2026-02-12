import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_FI_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_FI_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_FI_smb)"><path fill="#2e42a5" fill-rule="evenodd" d="M5 0h2v5h9v2H7v5H5V7H0V5h5z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_FI_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_FI_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_FI_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_FI_mdb)"><path fill="#2e42a5" stroke="#2e42a5" d="M7 .5h-.5v6h-7v2h7v7h2v-7h12v-2h-12v-6H7Z"/></g></g><defs><clipPath id="fp_FI_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_FI_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_FI_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_FI_lgb)"><path fill="#2e42a5" stroke="#2e42a5" stroke-width="2" d="M10.819 1h-1v9.323H-1v4H9.819V25h4V14.323H33v-4H13.819V1h-3Z"/></g></g><defs><clipPath id="fp_FI_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagFI',
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
