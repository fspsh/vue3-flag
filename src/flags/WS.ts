import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_WS_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_WS_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_WS_smb)"><path fill="#2e42a5" d="M0 0v7h8V0z"/><path fill="#feffff" d="m1.783 3.886-.53.32.12-.624-.44-.468.597-.025.253-.583.253.583h.596l-.44.493.133.624zM5.783 3.886l-.53.32.12-.624-.44-.468.597-.025.253-.583.253.583h.596l-.44.493.133.624zM3.733 2.069l-.499.301.114-.588-.416-.44.563-.023.238-.549.238.549h.561l-.414.463.125.588zM4.273 4.213l-.312.188.071-.367-.26-.275.352-.015.15-.343.148.343h.35l-.258.29.078.367zM3.704 6.414l-.748.452.17-.882-.622-.66.843-.035.357-.823.357.823h.843l-.622.695.187.882z"/></g></g><defs><clipPath id="fp_WS_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_WS_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_WS_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_WS_mdb)"><path fill="#2e42a5" d="M0 0v8.75h10V0z"/><path fill="#feffff" d="m2.229 4.857-.663.4.151-.78-.552-.584.747-.032.317-.729.316.73h.745l-.55.615.166.78zM7.229 4.857l-.663.4.151-.78-.552-.584.747-.032.317-.729.316.73h.745l-.55.615.166.78zM4.666 2.586l-.624.377.143-.735-.52-.55.704-.03.297-.685.297.686h.702l-.518.58.156.734zM5.341 5.266l-.39.235.09-.46-.325-.343.44-.018.185-.429.186.429h.439l-.324.362.098.459zM4.63 8.018l-.935.564.213-1.102-.778-.824 1.054-.045.446-1.029.447 1.03H6.13l-.778.868.234 1.102z"/></g></g><defs><clipPath id="fp_WS_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_WS_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_WS_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_WS_lgb)"><path fill="#2e42a5" d="M0 0v14h16V0z"/><path fill="#feffff" d="m3.566 7.772-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249zM11.566 7.772l-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249zM7.466 4.138l-.998.602.227-1.175-.83-.88 1.125-.047.476-1.098.476 1.098h1.123l-.83.927.25 1.175zM8.546 8.425l-.623.377.142-.735-.52-.55.704-.03.297-.685.298.686h.702l-.518.58.156.734zM7.409 12.828l-1.497.904.342-1.763-1.247-1.32 1.688-.071.714-1.646.714 1.646h1.684l-1.243 1.39.374 1.764z"/></g></g><defs><clipPath id="fp_WS_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagWS',
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
