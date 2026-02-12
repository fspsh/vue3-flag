import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_NA_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#093" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_NA_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_NA_smb)"><path fill="#3195f9" fill-rule="evenodd" d="M0 0v12L16 0z" clip-rule="evenodd"/><path fill="#e31d1c" stroke="#f7fcff" d="m-.506 13.547.265.48.454-.308L17.629 1.864l.35-.24-.178-.384-1.171-2.52-.246-.528-.485.323-17.678 11.778-.382.255.222.403z"/><path fill="#feca00" fill-rule="evenodd" d="m3.115 4.622-.647.808-.157-1.023-.964.376.376-.964L.7 3.662l.807-.647L.7 2.368l1.023-.157-.376-.964.964.376L2.468.6l.647.807L3.762.6l.157 1.023.964-.376-.376.964 1.023.157-.808.647.808.647-1.023.157.376.964-.964-.376-.157 1.023zm0-.357a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m1-1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_NA_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_NA_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#093" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_NA_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_NA_mdb)"><path fill="#3195f9" fill-rule="evenodd" d="M0 0v15L20 0z" clip-rule="evenodd"/><path fill="#e31d1c" stroke="#f7fcff" stroke-width="1.25" d="m-.633 16.934.332.6.567-.386L22.036 2.33l.439-.299-.224-.481-1.464-3.15-.307-.66-.606.404-22.097 14.722-.479.32.278.502z"/><path fill="#feca00" fill-rule="evenodd" d="m3.894 5.778-.81 1.009-.195-1.278-1.205.47.47-1.206-1.279-.196 1.01-.808-1.01-.81 1.278-.195-.47-1.205 1.206.47L3.085.75l.809 1.01.808-1.01.196 1.278 1.205-.47-.47 1.206 1.279.196-1.009.809 1.009.808-1.278.196.47 1.205-1.206-.47-.196 1.279zm0-.447a1.563 1.563 0 1 0 0-3.125 1.563 1.563 0 0 0 0 3.125m1.25-1.562a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_NA_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_NA_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#093" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_NA_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_NA_lgb)"><path fill="#3195f9" fill-rule="evenodd" d="M0 0v24L32 0z" clip-rule="evenodd"/><path fill="#e31d1c" stroke="#f7fcff" stroke-width="2" d="m-1.012 27.094.53.96.908-.617 34.832-23.71.702-.477-.358-.77-2.342-5.04-.491-1.057-.97.647-35.356 23.556-.766.51.445.805z"/><path fill="#feca00" fill-rule="evenodd" d="m6.23 9.245-1.294 1.614-.314-2.045-1.928.751.751-1.928L1.4 7.324 3.015 6.03 1.4 4.736l2.045-.314-.75-1.928 1.927.751.314-2.045L6.23 2.815 7.524 1.2l.313 2.045 1.928-.75-.751 1.927 2.045.314L9.445 6.03l1.614 1.294-2.045.313.751 1.928-1.928-.751-.313 2.045zm0-.715a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m2-2.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_NA_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagNA',
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
