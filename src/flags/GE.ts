import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GE_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_GE_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill="#e31d1c" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_GE_smb)"><path d="M7 0h2v5h7v2H9v5H7V7H0V5h7z"/><path d="M5 8.611 6.1 8.5v1S5 9.431 5 9.451s.1 1.049.1 1.049h-1l.08-1H3.1v-1l1.08.111L4.1 7.5h1zM5 2.611 6.1 2.5v1S5 3.431 5 3.451 5.1 4.5 5.1 4.5h-1l.08-1H3.1v-1l1.08.111L4.1 1.5h1zM12 2.611l1.1-.111v1S12 3.431 12 3.451s.1 1.049.1 1.049h-1l.08-1H10.1v-1l1.08.111L11.1 1.5h1zM12 8.611l1.1-.111v1S12 9.431 12 9.451s.1 1.049.1 1.049h-1l.08-1H10.1v-1l1.08.111L11.1 7.5h1z"/></g></g><defs><clipPath id="fp_GE_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GE_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_GE_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill="#e31d1c" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_GE_mdb)"><path d="M8.75 0h2.5v6.25H20v2.5h-8.75V15h-2.5V8.75H0v-2.5h8.75z"/><path d="m6.25 10.764 1.375-.139v1.25s-1.376-.086-1.376-.061.126 1.311.126 1.311h-1.25l.1-1.25h-1.35v-1.25l1.35.139-.1-1.389h1.25zM6.25 3.264l1.375-.139v1.25s-1.376-.086-1.376-.061.126 1.311.126 1.311h-1.25l.1-1.25h-1.35v-1.25l1.35.139-.1-1.389h1.25zM15 3.264l1.375-.139v1.25s-1.376-.086-1.376-.061.126 1.311.126 1.311h-1.25l.1-1.25h-1.35v-1.25l1.35.139-.1-1.389h1.25zM15 10.764l1.375-.139v1.25s-1.376-.086-1.376-.061.126 1.311.126 1.311h-1.25l.1-1.25h-1.35v-1.25l1.35.139-.1-1.389h1.25z"/></g></g><defs><clipPath id="fp_GE_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GE_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_GE_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill="#e31d1c" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_GE_lgb)"><path d="M14 0h4v10h14v4H18v10h-4V14H0v-4h14z"/><path d="M9.999 17.222 12.2 17v2s-2.201-.138-2.201-.098S10.2 21 10.2 21h-2l.16-2H6.2v-2l2.16.222L8.2 15h2zM9.999 5.222 12.2 5v2s-2.201-.138-2.201-.098S10.2 9 10.2 9h-2l.16-2H6.2V5l2.16.222L8.2 3h2zM23.999 5.222 26.2 5v2s-2.201-.138-2.201-.098S24.2 9 24.2 9h-2l.16-2H20.2V5l2.16.222L22.2 3h2zM23.999 17.222 26.2 17v2s-2.201-.138-2.201-.098S24.2 21 24.2 21h-2l.16-2H20.2v-2l2.16.222L22.2 15h2z"/></g></g><defs><clipPath id="fp_GE_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGE',
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
