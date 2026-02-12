import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_CW_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_CW_smb)"><path fill="#f7fcff" d="m2.127 3.075-.994.524.48-.934L1 1.982l.762-.029L2.127 1l.28.953.89.029-.641.683.407.934zM5.676 5.538l-1.227.514.481-1.288L3.863 3.9h1.279l.534-1.394.408 1.394h1.28l-.91.864.452 1.288z"/><path fill="#f9e813" d="M0 7v2h16V7z"/></g></g><defs><clipPath id="fp_CW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_CW_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_CW_mdb)"><path fill="#f7fcff" d="M2.659 3.843 1.416 4.5l.6-1.167-.766-.855.952-.035.457-1.192.349 1.192 1.114.035-.802.855.509 1.167zM7.095 6.923l-1.534.642.602-1.61-1.334-1.08h1.598l.668-1.742.51 1.742h1.6l-1.137 1.08.565 1.61z"/><path fill="#f9e813" d="M0 8.75v2.5h20v-2.5z"/></g></g><defs><clipPath id="fp_CW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_CW_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_CW_lgb)"><path fill="#f7fcff" d="M4.254 6.15 2.266 7.198l.96-1.868L2 3.963l1.523-.056L4.254 2l.558 1.907 1.783.056-1.284 1.368.815 1.868zM11.352 11.077l-2.454 1.028.963-2.577L7.726 7.8h2.558l1.068-2.787.816 2.787h2.56l-1.82 1.73.905 2.576z"/><path fill="#f9e813" d="M0 14v4h32v-4z"/></g></g><defs><clipPath id="fp_CW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCW',
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
