import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_AU_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><g clip-path="url(#fp_AU_smb)"><path fill="#2e42a5" d="M0 0h9v7H0z"/><path fill="#f7fcff" d="m-1.002 6.5 1.98.869L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865z"/><path fill="#f50100" d="m-.731 7.108 1.009.505 9.437-8.08H8.298z"/><path fill="#f7fcff" d="m10.002 6.5-1.98.869L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865z"/><path fill="#f50100" d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463z"/><path fill="#f50100" fill-rule="evenodd" d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M3.242-.75h2.5v3H9.75v2.5H5.742v3h-2.5v-3H-.75v-2.5h3.992zM3.992 3H0v1h3.992v3h1V4H9V3H4.992V0h-1z" clip-rule="evenodd"/></g><g fill="#f7fcff" clip-path="url(#fp_AU_smc)"><path d="m4.408 9.834-.59.546.058-.802-.795-.121.664-.455-.4-.697.768.236.295-.748.295.748.769-.236-.4.697.663.455-.795.121.058.802zM10.776 6.069l-.394.364.04-.535-.53-.08.442-.304-.267-.464.512.157.197-.499.197.499.512-.157-.267.464.442.303-.53.081.04.535zM11.715 2.377l-.394.363.04-.534-.53-.081.442-.303-.268-.465.513.157.197-.498.197.498.512-.157-.267.465.442.303-.53.08.04.535zM14.061 4.223l-.393.364.039-.535-.53-.08.442-.304-.267-.464.513.157.196-.499.197.499.513-.157-.267.464.442.303-.53.081.039.535zM12.184 9.53l-.394.364.04-.534-.53-.081.442-.303-.267-.465.512.157.197-.498.197.498.512-.157-.267.465.443.303-.53.08.039.535zM13.827 6.648l-.4.21.076-.445-.323-.316.447-.065.2-.405.2.405.447.065-.324.316.077.445z"/></g></g><defs><clipPath id="fp_AU_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath><clipPath id="fp_AU_smb"><path fill="#fff" d="M0 0h9v7H0z"/></clipPath><clipPath id="fp_AU_smc"><path fill="#fff" d="M3 1h12v10H3z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_AU_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><g clip-path="url(#fp_AU_mdb)"><path fill="#2e42a5" d="M0 0h11v9H0z"/><path fill="#f7fcff" d="M-1.253 8.125 1.223 9.21l10.083-8.03 1.306-1.614-2.647-.363-4.113 3.46-3.31 2.332z"/><path fill="#f50100" d="m-.914 8.886 1.261.63L12.143-.583h-1.77z"/><path fill="#f7fcff" d="M12.503 8.125 10.306 9.52-.056 1.18-1.362-.434l2.647-.363 4.113 3.46 3.31 2.332z"/><path fill="#f50100" d="m12.418 8.67-1.261.63-5.023-4.323-1.489-.483-6.133-4.921H.283l6.13 4.804 1.628.58z"/><path fill="#f50100" fill-rule="evenodd" d="M6 0H5v4H0v1h5v4h1V5h5V4H6z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M4.063 0h2.875v3.063L11 3v2.875l-4.062.063V9H4.063V5.938L0 5.875V3l4.063.063zM5 4H0v1h5v4h1V5h5V4H6V0H5z" clip-rule="evenodd"/></g><g fill="#f7fcff" clip-path="url(#fp_AU_mdc)"><path d="m5.92 12.278-.82.758.081-1.113-1.104-.17.922-.63-.557-.968 1.068.327.41-1.039.41 1.039 1.068-.327-.557.968.922.63-1.104.17.081 1.113zM13.24 8.297l-.547.505.054-.743-.735-.112.614-.42-.371-.646.712.218.273-.692.273.692.712-.218-.37.645.613.421-.735.112.054.743zM14.52 2.963l-.547.506.054-.743-.735-.112.614-.42-.371-.646.712.218.273-.693.273.693.712-.218-.37.645.613.42-.735.113.054.743zM17.72 5.63l-.547.505.054-.742-.735-.113.614-.42-.371-.646.712.218.273-.692.273.692.712-.218-.37.646.613.42-.735.113.054.742zM15.16 13.297l-.547.505.054-.742-.735-.113.614-.42-.371-.646.712.218.273-.692.273.692.712-.218-.37.646.613.42-.735.113.054.742zM17.4 9.14l-.555.291.106-.618-.45-.438.621-.09.278-.563.278.562.62.09-.449.439.107.618z"/></g></g><defs><clipPath id="fp_AU_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath><clipPath id="fp_AU_mdb"><path fill="#fff" d="M0 0h11v9H0z"/></clipPath><clipPath id="fp_AU_mdc"><path fill="#fff" d="M4 1h15v13H4z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_AU_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><g clip-path="url(#fp_AU_lgb)"><path fill="#2e42a5" d="M0 0h18v14H0z"/><path fill="#f7fcff" d="m-2.004 13 3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73z"/><path fill="#f50100" d="m-1.462 14.217 2.018 1.008L19.429-.933h-2.833z"/><path fill="#f7fcff" d="m20.004 13-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73z"/><path fill="#f50100" d="m19.87 13.873-2.019 1.009-8.036-6.918-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.927z"/><path fill="#f50100" fill-rule="evenodd" d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M6.485 0h5v4.5H18v5h-6.515L11.5 14h-5l-.015-4.5H0v-5h6.485zm1.5 6H0v2h7.985v6h2V8H18V6H9.985V0h-2z" clip-rule="evenodd"/></g><g fill="#f7fcff" clip-path="url(#fp_AU_lgc)"><path d="m9 20.5-1.302 1.203.13-1.768-1.753-.267 1.463-1.002-.883-1.537 1.694.52L9 16l.65 1.648 1.695-.518-.883 1.536 1.463 1.002-1.752.267.129 1.768zM22 13l-.868.802.086-1.178-1.168-.179.975-.668-.589-1.024 1.13.346L22 10l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zM24 5l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L24 2l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zM29 9l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L29 6l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zM25 22l-.868.802.086-1.178-1.168-.179.975-.668-.589-1.024 1.13.346L25 19l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zM28.5 14.25l-.882.463.169-.981-.714-.695.986-.144L28.5 12l.44.893.987.143-.714.696.169.982z"/></g></g><defs><clipPath id="fp_AU_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath><clipPath id="fp_AU_lgb"><path fill="#fff" d="M0 0h18v14H0z"/></clipPath><clipPath id="fp_AU_lgc"><path fill="#fff" d="M6 2h25v21H6z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagAU',
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
