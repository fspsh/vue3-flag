import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TN_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_TN_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TN_smb)"><path fill="#f7fcff" d="M8 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path fill="#e31d1c" d="M8.701 8.825S6.593 8.25 6.593 5.987s2.108-2.888 2.108-2.888c-.871-.338-3.423.18-3.423 2.888s2.623 3.195 3.423 2.838m-.116-3.33-1.046.381 1.125.393.037 1.053.685-.818 1.128.08-.813-.663.49-.957-.957.321-.662-.828z"/></g></g><defs><clipPath id="fp_TN_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TN_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_TN_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TN_mdb)"><path fill="#f7fcff" d="M10 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill="#e31d1c" d="M10.877 11.032s-2.636-.72-2.636-3.549 2.636-3.61 2.636-3.61c-1.09-.421-4.279.226-4.279 3.61s3.278 3.994 4.279 3.549m-.145-4.164-1.308.477 1.405.492.048 1.315.855-1.022 1.41.1-1.016-.829.612-1.197-1.195.403-.828-1.035z"/></g></g><defs><clipPath id="fp_TN_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TN_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_TN_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TN_lgb)"><path fill="#f7fcff" d="M16 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"/><path fill="#e31d1c" d="M17.403 17.65s-4.217-1.15-4.217-5.676c0-4.527 4.217-5.776 4.217-5.776-1.744-.675-6.846.36-6.846 5.775 0 5.416 5.245 6.391 6.846 5.678m-.232-6.662-2.092.765 2.248.786.076 2.105 1.368-1.636 2.256.16-1.625-1.326.979-1.915-1.913.644-1.325-1.656z"/></g></g><defs><clipPath id="fp_TN_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTN',
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
