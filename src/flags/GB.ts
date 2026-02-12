import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GB_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_GB_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GB_smb)"><path fill="#fff" d="m-1.781 11.143 3.52 1.489L16.08 1.619l1.857-2.213-3.765-.497-5.85 4.745-4.707 3.198z"/><path fill="#f50100" d="m-1.3 12.186 1.794.864L17.27-.8h-2.518z"/><path fill="#fff" d="m17.782 11.143-3.521 1.489L-.08 1.619-1.938-.594l3.765-.497 5.85 4.745 4.707 3.198z"/><path fill="#f50100" d="m17.662 11.891-1.794.865-7.144-5.93-2.117-.663-8.723-6.75H.403l8.717 6.59 2.316.795z"/><mask id="fp_GB_smc" fill="#fff"><path fill-rule="evenodd" d="M9.889-1H6.11v5H-.986v4H6.11v5H9.89V8h7.125V4H9.889z" clip-rule="evenodd"/></mask><path fill="#f50100" fill-rule="evenodd" d="M9.889-1H6.11v5H-.986v4H6.11v5H9.89V8h7.125V4H9.889z" clip-rule="evenodd"/><path fill="#fff" d="M6.111-1v-1h-1v1zM9.89-1h1v-1h-1zM6.11 4v1h1V4zM-.986 4V3h-1v1zm0 4h-1v1h1zM6.11 8h1V7h-1zm0 5h-1v1h1zm3.778 0v1h1v-1zm0-5V7h-1v1zm7.125 0v1h1V8zm0-4h1V3h-1zM9.889 4h-1v1h1zM6.11 0H9.89v-2H6.11zm1 4v-5h-2v5zM-.986 5H6.11V3H-.986zm1 3V4h-2v4zM6.11 7H-.986v2H6.11zm1 6V8h-2v5zm2.778-1H6.11v2H9.89zm-1-4v5h2V8zm8.125-1H9.889v2h7.125zm-1-3v4h2V4zM9.889 5h7.125V3H9.889zm-1-6v5h2v-5z" mask="url(#fp_GB_smc)"/></g></g><defs><clipPath id="fp_GB_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GB_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_GB_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GB_mdb)"><path fill="#fff" d="m-2.227 13.928 4.401 1.862L20.1 2.024 22.42-.742l-4.706-.622-7.312 5.932L4.52 8.565z"/><path fill="#f50100" d="m-1.624 15.232 2.242 1.08L21.588-.998h-3.149z"/><path fill="#fff" d="m22.227 13.928-4.401 1.862L-.1 2.024-2.42-.742l4.706-.622 7.311 5.932 5.886 3.997z"/><path fill="#f50100" d="m22.077 14.864-2.242 1.08-8.93-7.412-2.647-.828L-2.645-.733H.504L11.4 7.504l2.895.993z"/><mask id="fp_GB_mdc" fill="#fff"><path fill-rule="evenodd" d="M12.361-1.25H7.64V5h-8.872v5H7.64v6.25h4.722V10h8.906V5h-8.906z" clip-rule="evenodd"/></mask><path fill="#f50100" fill-rule="evenodd" d="M12.361-1.25H7.64V5h-8.872v5H7.64v6.25h4.722V10h8.906V5h-8.906z" clip-rule="evenodd"/><path fill="#fff" d="M7.639-1.25V-2.5h-1.25v1.25zm4.722 0h1.25V-2.5h-1.25zM7.64 5v1.25h1.25V5zm-8.872 0V3.75h-1.25V5zm0 5h-1.25v1.25h1.25zm8.872 0h1.25V8.75h-1.25zm0 6.25h-1.25v1.25h1.25zm4.722 0v1.25h1.25v-1.25zm0-6.25V8.75h-1.25V10zm8.906 0v1.25h1.25V10zm0-5h1.25V3.75h-1.25zm-8.906 0h-1.25v1.25h1.25zM7.64 0h4.722v-2.5H7.64zm1.25 5v-6.25h-2.5V5zM-1.233 6.25H7.64v-2.5h-8.872zM.017 10V5h-2.5v5zM7.64 8.75h-8.872v2.5H7.64zm1.25 7.5V10h-2.5v6.25zM12.36 15H7.64v2.5h4.722zm-1.25-5v6.25h2.5V10zm10.156-1.25h-8.906v2.5h8.906zM20.017 5v5h2.5V5zm-7.656 1.25h8.906v-2.5h-8.906zm-1.25-7.5V5h2.5v-6.25z" mask="url(#fp_GB_mdc)"/></g></g><defs><clipPath id="fp_GB_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GB_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_GB_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GB_lgb)"><path fill="#fff" d="m-3.563 22.285 7.042 2.979 28.68-22.026 3.715-4.426-7.53-.995-11.698 9.491-9.416 6.396z"/><path fill="#f50100" d="M-2.6 24.372.989 26.1 34.54-1.599h-5.037z"/><path fill="#fff" d="m35.563 22.285-7.042 2.979L-.159 3.238l-3.715-4.426 7.53-.995 11.698 9.491 9.416 6.396z"/><path fill="#f50100" d="m35.323 23.783-3.588 1.728-14.286-11.86-4.236-1.324-17.445-13.5H.806l17.434 13.18 4.631 1.588z"/><mask id="fp_GB_lgc" fill="#fff"><path fill-rule="evenodd" d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z" clip-rule="evenodd"/></mask><path fill="#f50100" fill-rule="evenodd" d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25z" clip-rule="evenodd"/><path fill="#fff" d="M12.222-2v-2h-2v2zm7.556 0h2v-2h-2zM12.222 8v2h2V8zM-1.972 8V6h-2v2zm0 8h-2v2h2zm14.194 0h2v-2h-2zm0 10h-2v2h2zm7.556 0v2h2v-2zm0-10v-2h-2v2zm14.25 0v2h2v-2zm0-8h2V6h-2zm-14.25 0h-2v2h2zm-7.556-8h7.556v-4h-7.556zm2 8V-2h-4V8zm-16.194 2h14.194V6H-1.972zm2 6V8h-4v8zm12.194-2H-1.972v4h14.194zm2 12V16h-4v10zm5.556-2h-7.556v4h7.556zm-2-8v10h4V16zm16.25-2h-14.25v4h14.25zm-2-6v8h4V8zm-12.25 2h14.25V6h-14.25zm-2-12V8h4V-2z" mask="url(#fp_GB_lgc)"/></g></g><defs><clipPath id="fp_GB_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGB',
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
