import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BF_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_BF_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_BF_smb)"><path fill="#c51918" d="M0 0v6h16V0z"/><path fill="#feca00" d="m8.018 7.885-2.352 1.78.753-2.899-2.206-1.764h2.629l1.175-2.573 1.176 2.573h2.629l-2.23 1.767.776 2.896z"/></g></g><defs><clipPath id="fp_BF_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BF_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_BF_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_BF_mdb)"><path fill="#c51918" d="M0 0v7.5h20V0z"/><path fill="#feca00" d="m10.022 9.857-2.94 2.224.941-3.623-2.757-2.206h3.286l1.47-3.216 1.47 3.216h3.285l-2.786 2.209.97 3.62z"/></g></g><defs><clipPath id="fp_BF_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BF_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_BF_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_BF_lgb)"><path fill="#c51918" d="M0 0v12h32V0z"/><path fill="#feca00" d="m16.035 15.77-4.703 3.56 1.505-5.797-4.41-3.53h5.257l2.35-5.145 2.352 5.146h5.257l-4.457 3.534 1.551 5.792z"/></g></g><defs><clipPath id="fp_BF_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBF',
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
