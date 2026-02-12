import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CK_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><g clip-path="url(#fp_CK_smb)"><path fill="#2e42a5" d="M0 0h9v7H0z"/><path fill="#f7fcff" d="m-1.002 6.5 1.98.869L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865z"/><path fill="#f50100" d="m-.731 7.108 1.009.505 9.436-8.08H8.298z"/><path fill="#f7fcff" d="m10.002 6.5-1.98.869L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865z"/><path fill="#f50100" d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463z"/><path fill="#f50100" fill-rule="evenodd" d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M3.242-.75h2.5v3H9.75v2.5H5.742v3h-2.5v-3H-.75v-2.5h3.992zM3.992 3H0v1h3.992v3h1V4H9V3H4.992V0h-1z" clip-rule="evenodd"/></g><path stroke="#fff" d="M12.2 10.4a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CK_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath><clipPath id="fp_CK_smb"><path fill="#fff" d="M0 0h9v7H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CK_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><g clip-path="url(#fp_CK_mdb)"><path fill="#2e42a5" d="M0 0h11v9H0z"/><path fill="#f7fcff" d="M-1.253 8.125 1.223 9.21l10.083-8.03 1.306-1.614-2.647-.363-4.113 3.46-3.31 2.332z"/><path fill="#f50100" d="m-.914 8.886 1.261.63L12.143-.583h-1.77z"/><path fill="#f7fcff" d="M12.503 8.125 10.306 9.52-.056 1.18-1.362-.434l2.647-.363 4.113 3.46 3.31 2.332z"/><path fill="#f50100" d="m12.418 8.67-1.261.63-5.023-4.323-1.489-.483-6.133-4.921H.283l6.13 4.804 1.628.58z"/><path fill="#f50100" fill-rule="evenodd" d="M6 0H5v4H0v1h5v4h1V5h5V4H6z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M4.063 0h2.875v3.063L11 3v2.875l-4.062.063V9H4.063V5.938L0 5.875V3l4.063.063zM5 4H0v1h5v4h1V5h5V4H6V0H5z" clip-rule="evenodd"/></g><path fill="#fff" fill-rule="evenodd" d="m14.907 9.284.662-.461.641.461-.2-.82.516-.521h-.655l-.303-.67-.258.67h-.768l.588.52zm1.758.787.662-.462.391.282-.125.326h-.768l.588.52-.11.401-.075-.169-.258.67h-.768l.588.52-.224.822.663-.462.64.462-.199-.821.515-.52h-.655l-.11-.242.432-.3.64.461-.199-.821.515-.52h-.655l-.302-.67-.006.015-.076-.313.515-.52h-.655l-.303-.67-.258.67H16.3l.588.52zm-1.029 3.227-.662.462.223-.822-.535-.473.131.54-.64-.461-.663.461.224-.82-.589-.521h.769l.052-.135-.585-.421-.663.461.224-.82-.588-.521h.768l.258-.67.036.078.097-.357-.588-.52h.768l.258-.67.302.67h.655l-.515.52.2.82-.641-.46-.408.283.138.306h.655l-.514.52.171.707.178-.461.302.67h.655l-.515.52.057.234h.726l.258-.67.302.67h.655l-.514.52.199.822z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CK_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath><clipPath id="fp_CK_mdb"><path fill="#fff" d="M0 0h11v9H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CK_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><g clip-path="url(#fp_CK_lgb)"><path fill="#2e42a5" d="M0 0h18v14H0z"/><path fill="#f7fcff" d="m-2.004 13 3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73z"/><path fill="#f50100" d="m-1.462 14.217 2.018 1.008L19.429-.933h-2.833z"/><path fill="#f7fcff" d="m20.004 13-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73z"/><path fill="#f50100" d="m19.87 13.873-2.019 1.009-8.036-6.918-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.927z"/><path fill="#f50100" fill-rule="evenodd" d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M6.485 0h5v4.5H18v5h-6.515L11.5 14h-5l-.015-4.5H0v-5h6.485zm1.5 6H0v2h7.985v6h2V8H18V6H9.985V0h-2z" clip-rule="evenodd"/></g><path fill="#fff" fill-rule="evenodd" d="m23.667 13.855.726-.509.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.843l.645.574zm2.813 1.258.726-.508.702.508-.218-.905.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574zm1.565 1.872-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.905zm-1.723 2.784.726-.509.702.51-.218-.906.564-.574h-.718l-.331-.74-.282.74h-.843l.645.574zm-1.822.737-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.905zm-3.1-.697.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.282.74H21l.645.573zm-.54-2.807-.726.509.245-.906-.645-.574h.842l.283-.739.33.74h.719l-.564.573.218.906zm.187-1.842.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.739-.283.74h-.842l.645.573z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CK_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath><clipPath id="fp_CK_lgb"><path fill="#fff" d="M0 0h18v14H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCK',
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
