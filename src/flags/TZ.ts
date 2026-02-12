import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TZ_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#3195f9" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_TZ_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TZ_smb)"><path fill="#73be4a" fill-rule="evenodd" d="M0 0v12L16 0z" clip-rule="evenodd"/><path fill="#272727" stroke="#ffd018" stroke-width="1.25" d="m-.91 12.72.346.52.52-.348L18.086.791l.52-.347-.347-.52-1.11-1.664-.347-.52-.52.348-18.13 12.101-.52.347.347.52z"/></g></g><defs><clipPath id="fp_TZ_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TZ_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#3195f9" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_TZ_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TZ_mdb)"><path fill="#73be4a" fill-rule="evenodd" d="M0 0v15L20 0z" clip-rule="evenodd"/><path fill="#272727" stroke="#ffd018" stroke-width="1.563" d="m-1.139 15.9.434.65.65-.434L22.608.988l.65-.433-.434-.65-1.388-2.08-.433-.65-.65.434L-2.31 12.737l-.65.433.434.65z"/></g></g><defs><clipPath id="fp_TZ_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TZ_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#3195f9" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_TZ_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TZ_lgb)"><path fill="#73be4a" fill-rule="evenodd" d="M0 0v24L32 0z" clip-rule="evenodd"/><path fill="#272727" stroke="#ffd018" stroke-width="2.5" d="m-1.822 25.44.694 1.039 1.04-.694L36.172 1.58l1.04-.693-.693-1.04-2.221-3.327-.694-1.04-1.04.694-36.26 24.204-1.04.694.694 1.04z"/></g></g><defs><clipPath id="fp_TZ_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTZ',
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
