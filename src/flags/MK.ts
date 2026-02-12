import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MK_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f50100" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_MK_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill="#ffd018" mask="url(#fp_MK_smb)"><path fill-rule="evenodd" d="M0-.021v2.042l7 2.976L1.628-.021zM8 6l1.5-6h-3zm0 0-1.5 6h3zM0 9.976v2.042h1.628L7 7zm16-7.943V-.009h-1.628L9 5.01zm0 9.997V9.988L9 7.012l5.372 5.018zm0-7.53L10 6l6 1.5zM6 6 0 4.5v3z" clip-rule="evenodd"/><path stroke="#f50100" d="M8 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></g></g><defs><clipPath id="fp_MK_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MK_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f50100" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_MK_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill="#ffd018" mask="url(#fp_MK_mdb)"><path fill-rule="evenodd" d="M0-.026v2.552l8.75 3.72L2.035-.026zM10 7.5 11.875 0h-3.75zm0 0L8.125 15h3.75zM0 12.47v2.552h2.035L8.75 8.75zM20 2.54V-.01h-2.035L11.25 6.261zm0 12.496v-2.552l-8.75-3.72 6.715 6.272zm0-9.412L12.5 7.5 20 9.375zM7.5 7.5 0 5.625v3.75z" clip-rule="evenodd"/><path stroke="#f50100" stroke-width="1.25" d="M10 10.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"/></g></g><defs><clipPath id="fp_MK_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MK_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f50100" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_MK_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill="#ffd018" mask="url(#fp_MK_lgb)"><path fill-rule="evenodd" d="M0-.042v4.084l14 5.951L3.255-.042zM16 12l3-12h-6zm0 0-3 12h6zM0 19.951v4.084h3.255L14 14zM32 4.066V-.018h-3.255L18 10.018zm0 19.994v-4.084l-14-5.952L28.745 24.06zM32 9l-12 3 12 3zm-20 3L0 9v6z" clip-rule="evenodd"/><path stroke="#f50100" stroke-width="2" d="M16 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></g></g><defs><clipPath id="fp_MK_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMK',
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
