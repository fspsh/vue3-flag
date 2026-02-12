import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_NP_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" stroke="#4857a1" d="m5.616 6.32 4.316 5.18H.5V.842L9.04 5.5H4.931z"/><mask id="fp_NP_smb" width="11" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" stroke="#fff" d="m5.616 6.32 4.316 5.18H.5V.842L9.04 5.5H4.931z"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_NP_smb)"><path fill="#f7fcff" d="m2.915 10.005-.613.795-.028-1.003-.963.283.567-.828-.946-.337.946-.337-.567-.828.963.283.028-1.004.613.796.612-.796.029 1.004.963-.283-.567.828.945.337-.945.337.567.828-.963-.283-.029 1.003zM2.9 4.07l-.32.415-.015-.524-.503.148.296-.433-.493-.176.493-.176-.296-.433.503.148.015-.524.32.416.32-.416.015.524.503-.148-.296.433.493.176-.493.176.296.433-.503-.148-.015.524z"/><path fill="#f9fafa" d="M2.833 3.947c1.113.004 1.707-.627 1.707-.627.117.72-.79 1.2-1.696 1.2-.907 0-1.456-.654-1.794-1.2 0 0 .67.623 1.783.627"/></g></g><defs><clipPath id="fp_NP_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_NP_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" stroke="#4857a1" d="m7.118 7.938 5.554 6.562H.5V.978l11.501 6.137H6.422z"/><mask id="fp_NP_mdb" width="14" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" stroke="#fff" d="m7.118 7.938 5.554 6.562H.5V.978l11.501 6.137H6.422z"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_NP_mdb)"><path fill="#f7fcff" d="m3.644 12.545-.766.978-.036-1.234-1.203.348.708-1.02-1.181-.414 1.181-.415-.708-1.02 1.203.35.036-1.236.766.979.765-.979.036 1.235 1.203-.348-.708 1.02 1.181.414-1.181.415.708 1.019-1.203-.348-.036 1.234zM3.625 5.24l-.4.51-.018-.645-.629.182.37-.532-.617-.217.617-.216-.37-.533.629.182.018-.644.4.51.4-.51.018.644.629-.182-.37.533.617.216-.617.217.37.532-.629-.182-.018.645z"/><path fill="#f9fafa" d="M3.54 5.09c1.37.005 2.101-.785 2.101-.785.145.901-.971 1.5-2.087 1.5s-1.792-.817-2.208-1.5c0 0 .825.779 2.195.784"/></g></g><defs><clipPath id="fp_NP_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_NP_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" stroke="#4857a1" d="m11.616 12.32 9.317 11.18H.5V.842L20.04 11.5h-9.108z"/><mask id="fp_NP_lgb" width="22" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" stroke="#fff" d="m11.616 12.32 9.317 11.18H.5V.842L20.04 11.5h-9.108z"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_NP_lgb)"><path fill="#f7fcff" d="M5.83 20.01 4.604 21.6l-.056-2.006-1.926.566 1.134-1.657-1.891-.673 1.89-.674-1.133-1.657 1.926.566.056-2.006 1.226 1.59 1.225-1.59.056 2.007 1.926-.567-1.134 1.657 1.891.674-1.89.674 1.133 1.656-1.926-.566-.056 2.006zM5.8 8.139l-.64.83-.03-1.048-1.005.296.592-.865L3.73 7l.987-.352-.592-.865 1.006.296.03-1.048.64.83.639-.83.03 1.048 1.005-.296-.592.865.988.352-.988.352.592.865-1.006-.296-.03 1.048z"/><path fill="#f9fafa" d="M5.666 7.894C7.892 7.903 9.08 6.64 9.08 6.64c.235 1.441-1.578 2.4-3.391 2.4-1.814 0-2.912-1.307-3.588-2.4 0 0 1.34 1.245 3.566 1.254"/></g></g><defs><clipPath id="fp_NP_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagNP',
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
