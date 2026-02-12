import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_KP_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_KP_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_KP_smb)"><path fill="#c51918" stroke="#f7fcff" d="M0 2.5h-.5v7h17v-7H0Z"/><path fill="#f7fcff" fill-rule="evenodd" d="M5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="m4.998 6.935-1.359.945.48-1.584-1.319-1 1.654-.033.544-1.563.543 1.563 1.654.034-1.318 1 .479 1.583z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_KP_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_KP_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_KP_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_KP_mdb)"><path fill="#c51918" stroke="#f7fcff" stroke-width="1.25" d="M0 3.125h-.625v8.75h21.25v-8.75H0Z"/><path fill="#f7fcff" fill-rule="evenodd" d="M6.25 10.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M6.247 8.669 4.549 9.85l.6-1.98L3.5 6.62l2.068-.041.679-1.954.679 1.954 2.068.042-1.648 1.25.599 1.979z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_KP_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_KP_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_KP_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_KP_lgb)"><path fill="#c51918" stroke="#f7fcff" stroke-width="2" d="M0 5h-1v14h34V5H0Z"/><path fill="#f7fcff" fill-rule="evenodd" d="M10 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M9.995 13.87 7.28 15.76l.958-3.168L5.6 10.593l3.309-.067L9.995 7.4l1.087 3.126 3.308.067-2.637 2 .958 3.167z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_KP_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagKP',
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
