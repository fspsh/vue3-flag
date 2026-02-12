import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CD_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#3195f9" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_CD_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CD_smb)"><path fill="#e31d1c" stroke="#feca00" stroke-width="1.25" d="m-.91 12.72.346.52.52-.348L18.086.791l.52-.347-.347-.52-1.11-1.664-.347-.52-.52.348-18.13 12.101-.52.347.347.52z"/><path fill="#feca00" fill-rule="evenodd" d="M2.465 4.303.723 5.512l.556-2.07L0 2.119l1.732-.072L2.465 0l.733 2.047h1.73L3.65 3.442l.64 1.948z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_CD_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CD_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#3195f9" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_CD_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CD_mdb)"><path fill="#e31d1c" stroke="#feca00" stroke-width="1.563" d="m-1.139 15.9.434.65.65-.434L22.608.988l.65-.433-.434-.65-1.388-2.08-.433-.65-.65.434L-2.31 12.737l-.65.433.434.65z"/><path fill="#feca00" fill-rule="evenodd" d="M3.082 5.379.903 6.89 1.6 4.302 0 2.649l2.165-.09L3.082 0l.916 2.56H6.16L4.564 4.301l.8 2.435z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_CD_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CD_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#3195f9" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_CD_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CD_lgb)"><path fill="#e31d1c" stroke="#feca00" stroke-width="2.5" d="m-1.822 25.44.694 1.039 1.04-.694L36.172 1.58l1.04-.693-.693-1.04-2.221-3.327-.694-1.04-1.04.694-36.26 24.204-1.04.694.694 1.04z"/><path fill="#feca00" fill-rule="evenodd" d="m4.93 8.606-3.485 2.418 1.114-4.141L0 4.238l3.465-.143L4.93 0l1.466 4.095h3.458L7.303 6.883 8.58 10.78z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_CD_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCD',
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
