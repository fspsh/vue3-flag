import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_AW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5ba3da" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_AW_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_AW_smb)"><path fill="#ef2929" d="M2.78 4.29.242 3.536l2.595-.74.633-2.36.731 2.433 2.4.641-2.407.724-.718 2.324z"/><path fill="red" d="M2.78 4.29.242 3.536l2.595-.74.633-2.36.731 2.433 2.4.641-2.407.724-.718 2.324z"/><path fill="#fad615" d="M16 7H0v1h16zm0 2H0v1h16z"/></g></g><defs><clipPath id="fp_AW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_AW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5ba3da" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_AW_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_AW_mdb)"><g filter="url(#fp_AW_mdc)"><path fill="#ef2929" d="M3.546 4.975.808 4.397l2.772-.549L4.38.98l.633 2.845 2.474.575-2.445.575-.706 2.34z"/><path fill="red" d="M3.546 4.975.808 4.397l2.772-.549L4.38.98l.633 2.845 2.474.575-2.445.575-.706 2.34z"/></g><path fill="#fad615" d="M20 9H0v1h20zm0 2H0v1h20z"/></g></g><defs><clipPath id="fp_AW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath><filter id="fp_AW_mdc" width="8.681" height="8.335" x="-.192" y="-.02" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation=".5"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_270_60934"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_270_60934" result="shape"/></filter></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_AW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5ba3da" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_AW_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_AW_lgb)"><path fill="red" stroke="#f7fcff" stroke-width=".35" d="m5.773 7.96-4.38-.925 4.434-.878 1.283-4.59L8.122 6.12l3.96.92-3.914.92-1.129 3.743z"/><path fill="#fad615" d="M32 14H0v2h32zm0 4H0v2h32z"/></g></g><defs><clipPath id="fp_AW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagAW',
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
