import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#ef0000" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_TW_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TW_smb)"><path fill="#2e42a5" d="M0 0v7h9V0z"/><path fill="#feffff" d="m4.365 5.405-.741.925-.18-1.171-1.103.43.43-1.104-1.171-.18.924-.74-.924-.741 1.17-.18-.43-1.103 1.105.43L3.624.8l.74.924L5.107.8l.18 1.17 1.103-.43-.43 1.105 1.17.179-.924.74.925.742-1.171.18.43 1.103-1.104-.43-.18 1.17zm0-.409a1.431 1.431 0 1 0 0-2.862 1.431 1.431 0 0 0 0 2.862M5.51 3.565a1.145 1.145 0 1 1-2.29 0 1.145 1.145 0 0 1 2.29 0"/></g></g><defs><clipPath id="fp_TW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#ef0000" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_TW_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TW_mdb)"><path fill="#2e42a5" d="M0 0v8.75h11.25V0z"/><path fill="#feffff" d="M5.456 6.757 4.53 7.912l-.224-1.464-1.38.538.538-1.38L2 5.382l1.155-.926L2 3.53l1.464-.224-.538-1.38 1.38.538L4.53 1l.926 1.155L6.382 1l.224 1.464 1.38-.538-.538 1.38 1.464.224-1.155.926 1.155.926-1.464.224.538 1.38-1.38-.538-.224 1.464zm0-.512a1.789 1.789 0 1 0 0-3.578 1.789 1.789 0 0 0 0 3.578m1.431-1.789a1.431 1.431 0 1 1-2.862 0 1.431 1.431 0 0 1 2.862 0"/></g></g><defs><clipPath id="fp_TW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#ef0000" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_TW_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TW_lgb)"><path fill="#2e42a5" d="M0 0v14h18V0z"/><path fill="#feffff" d="m8.73 10.81-1.482 1.85-.359-2.342-2.207.86.86-2.208L3.2 8.611 5.048 7.13 3.2 5.648l2.342-.359-.86-2.207 2.207.86.359-2.342L8.73 3.448 10.21 1.6l.36 2.342 2.207-.86-.86 2.207 2.341.359-1.848 1.482 1.848 1.481-2.341.36.86 2.207-2.208-.86-.359 2.341zm0-.818a2.862 2.862 0 1 0 0-5.725 2.862 2.862 0 0 0 0 5.725m2.29-2.862a2.29 2.29 0 1 1-4.58 0 2.29 2.29 0 0 1 4.58 0"/></g></g><defs><clipPath id="fp_TW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTW',
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
