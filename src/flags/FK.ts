import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_FK_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><g clip-path="url(#fp_FK_smb)"><path fill="#2e42a5" d="M0 0h9v7H0z"/><path fill="#f7fcff" d="m-1.002 6.5 1.98.869L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865z"/><path fill="#f50100" d="m-.731 7.108 1.009.505 9.437-8.08H8.298z"/><path fill="#f7fcff" d="m10.002 6.5-1.98.869L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865z"/><path fill="#f50100" d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463z"/><path fill="#f50100" fill-rule="evenodd" d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M3.242-.75h2.5v3H9.75v2.5H5.742v3h-2.5v-3H-.75v-2.5h3.992zM3.992 3H0v1h3.992v3h1V4H9V3H4.992V0h-1z" clip-rule="evenodd"/></g><path stroke="#b85f3c" stroke-width=".5" d="M11.482 9.197s.492.471.195.79c-.298.32-.57.134-.57.134M14.525 9.197s-.492.471-.195.79.57.134.57.134"/><path stroke="#cb8b73" stroke-width=".5" d="M11.16 9.577s.848.81 1.89.81 1.88-.62 1.88-.62"/></g><defs><clipPath id="fp_FK_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath><clipPath id="fp_FK_smb"><path fill="#fff" d="M0 0h9v7H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_FK_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><g clip-path="url(#fp_FK_mdb)"><path fill="#2e42a5" d="M0 0h11v9H0z"/><path fill="#f7fcff" d="M-1.253 8.125 1.223 9.21l10.083-8.03 1.306-1.614-2.647-.363-4.113 3.46-3.31 2.332z"/><path fill="#f50100" d="m-.914 8.886 1.261.63L12.143-.583h-1.77z"/><path fill="#f7fcff" d="M12.503 8.125 10.306 9.52-.056 1.18-1.362-.434l2.647-.363 4.113 3.46 3.31 2.332z"/><path fill="#f50100" d="m12.418 8.67-1.261.63-5.023-4.323-1.489-.483-6.133-4.921H.283l6.13 4.804 1.628.58z"/><path fill="#f50100" fill-rule="evenodd" d="M6 0H5v4H0v1h5v4h1V5h5V4H6z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M4.063 0h2.875v3.063L11 3v2.875l-4.062.063V9H4.063V5.938L0 5.875V3l4.063.063zM5 4H0v1h5v4h1V5h5V4H6V0H5z" clip-rule="evenodd"/></g><path stroke="#b85f3c" stroke-width=".625" d="M14.352 11.496s.615.59.244.988c-.372.4-.712.168-.712.168M18.156 11.496s-.615.59-.243.988c.37.4.711.168.711.168"/><path stroke="#cb8b73" stroke-width=".625" d="M13.95 11.97s1.06 1.013 2.362 1.013 2.351-.773 2.351-.773"/></g><defs><clipPath id="fp_FK_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath><clipPath id="fp_FK_mdb"><path fill="#fff" d="M0 0h11v9H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_FK_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_FK_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g clip-path="url(#fp_FK_lgc)"><path fill="#2e42a5" d="M0 0h18v14H0z"/><path fill="#f7fcff" d="m-2.004 13 3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73z"/><path fill="#f50100" d="m-1.462 14.217 2.018 1.008L19.429-.933h-2.833z"/><path fill="#f7fcff" d="m20.004 13-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73z"/><path fill="#f50100" d="m19.87 13.873-2.019 1.009-8.036-6.918-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.927z"/><path fill="#f50100" fill-rule="evenodd" d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M6.485 0h5v4.5H18v5h-6.515L11.5 14h-5l-.015-4.5H0v-5h6.485zm1.5 6H0v2h7.985v6h2V8H18V6H9.985V0h-2z" clip-rule="evenodd"/></g><path stroke="#b85f3c" d="M22.963 18.394s.984.942.39 1.58c-.594.64-1.139.268-1.139.268M29.05 18.394s-.984.942-.39 1.58c.594.64 1.139.268 1.139.268"/><path stroke="#cb8b73" d="M22.32 19.153s1.696 1.62 3.78 1.62 3.76-1.238 3.76-1.238"/></g><defs><clipPath id="fp_FK_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath><clipPath id="fp_FK_lgc"><path fill="#fff" d="M0 0h18v14H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagFK',
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
