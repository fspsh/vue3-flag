import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TR_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_TR_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TR_smb)"><path fill="#f7fcff" fill-rule="evenodd" d="M8.013 8.057c-1.071-.264-1.91-1.16-1.9-2.474.01-1.23.754-2.269 1.93-2.55 1.178-.282 2.214.316 2.214.316-.325-.768-1.455-1.308-2.382-1.306-1.725.003-3.563 1.401-3.579 3.54-.016 2.218 1.969 3.48 3.715 3.478 1.4-.003 2.063-.96 2.2-1.368 0 0-1.128.628-2.198.364m2.439-2.894-1.067.392 1.204.425-.021 1.268.793-.951 1.31.095-1.038-.893.682-.951-1.11.373-.793-.882z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_TR_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TR_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_TR_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TR_mdb)"><path fill="#f7fcff" fill-rule="evenodd" d="M10.016 10.071c-1.338-.33-2.387-1.45-2.374-3.092.01-1.537.942-2.836 2.413-3.188s2.766.395 2.766.395c-.406-.96-1.819-1.634-2.977-1.633C7.688 2.557 5.39 4.305 5.37 6.98c-.02 2.772 2.461 4.35 4.644 4.347 1.75-.003 2.579-1.2 2.75-1.71 0 0-1.41.785-2.748.455m3.049-3.617-1.334.49 1.505.53-.026 1.587.991-1.19 1.638.119-1.298-1.116.852-1.19-1.387.467-.992-1.102z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_TR_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TR_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_TR_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_TR_lgb)"><path fill="#f7fcff" fill-rule="evenodd" d="M16.026 16.113c-2.142-.527-3.819-2.32-3.8-4.947.019-2.46 1.508-4.538 3.862-5.1 2.354-.563 4.426.631 4.426.631-.65-1.536-2.91-2.615-4.764-2.612-3.449.006-7.126 2.804-7.157 7.081-.033 4.435 3.937 6.961 7.429 6.955 2.799-.005 4.127-1.92 4.402-2.734 0 0-2.257 1.254-4.398.726m4.877-5.786-2.133.783 2.407.85-.041 2.537 1.586-1.904 2.62.19L23.266 11l1.363-1.904-2.22.747-1.586-1.764z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_TR_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTR',
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
