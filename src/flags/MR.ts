import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MR_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#1c7b4d" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_MR_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_MR_smb)"><path fill="#e31d1c" d="M0 0v3h16V0zM0 9v3h16V9z"/><path fill="#feca00" d="M8.121 7.19c2.593.014 3.323-2.157 3.323-2.157C11.297 6.89 10.27 8.15 8.12 8.15S5.183 6.518 4.798 4.89c0 0 .73 2.285 3.323 2.3"/><path fill="#feca00" d="m8.819 4.907.168.982-.882-.464-.881.464.168-.982-.713-.767h.985l.441-.965.441.965h.986z"/></g></g><defs><clipPath id="fp_MR_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MR_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#1c7b4d" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_MR_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_MR_mdb)"><path fill="#e31d1c" d="M0 0v3.75h20V0zM0 11.25V15h20v-3.75z"/><path fill="#feca00" d="M10.151 8.987a4.28 4.28 0 0 0 4.154-2.696c-.184 2.321-1.468 3.896-4.154 3.896S6.48 8.147 5.998 6.113c0 0 .912 2.856 4.153 2.874"/><path fill="#feca00" d="m11.023 6.134.21 1.227-1.101-.58-1.103.58.211-1.227-.892-.96h1.233l.55-1.205.552 1.206h1.232z"/></g></g><defs><clipPath id="fp_MR_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MR_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#1c7b4d" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_MR_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_MR_lgb)"><path fill="#e31d1c" d="M0 0v6h32V0zM0 18v6h32v-6z"/><path fill="#feca00" d="M16.242 14.379c5.185.028 6.646-4.314 6.646-4.314-.294 3.715-2.349 6.234-6.646 6.234s-5.875-3.263-6.646-6.518c0 0 1.46 4.569 6.646 4.598"/><path fill="#feca00" d="m17.637 9.814.337 1.963-1.764-.927-1.763.927.337-1.963-1.427-1.534h1.972l.881-1.93.882 1.93h1.972z"/></g></g><defs><clipPath id="fp_MR_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMR',
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
