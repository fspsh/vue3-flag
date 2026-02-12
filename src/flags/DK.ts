import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_DK_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_DK_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_DK_smb)"><path fill="#f7fcff" fill-rule="evenodd" d="M5 0h2v5h9v2H7v5H5V7H0V5h5z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_DK_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_DK_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_DK_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_DK_mdb)"><path fill="#f7fcff" fill-rule="evenodd" d="M6 0h3v6h11v3H9v6H6V9H0V6h6z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_DK_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_DK_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_DK_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_DK_lgb)"><path fill="#f7fcff" fill-rule="evenodd" d="M10 0h4v10h18v4H14v10h-4V14H0v-4h10z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_DK_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagDK',
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
