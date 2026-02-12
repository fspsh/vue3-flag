import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BI_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><rect width="16" height="12" fill="#5eaa22" rx="1"/><mask id="fp_BI_smb" width="24" height="16" x="-4" y="-2" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M-4-2h24v16H-4z"/><path fill-rule="evenodd" d="m8 6 8-6H0zm0 0-8 6h16z" clip-rule="evenodd"/></mask><path fill="#dd2c2b" fill-rule="evenodd" d="m8 6 8-6H0zm0 0-8 6h16z" clip-rule="evenodd"/><path fill="#fff" d="m16 0 .75 1 3-2.25H16zM0 0v-1.25h-3.75l3 2.25zm0 12-.75-1-3 2.25H0zm16 0v1.25h3.75l-3-2.25zm-.75-13-8 6 1.5 2 8-6zM0 1.25h16v-2.5H0zM8.75 5l-8-6-1.5 2 8 6zm-1.5 0-8 6 1.5 2 8-6zM0 13.25h16v-2.5H0zM16.75 11l-8-6-1.5 2 8 6z" mask="url(#fp_BI_smb)"/><path fill="#fff" fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/><path fill="#dd2c2b" fill-rule="evenodd" d="m8.084 5.214-.588.31.112-.655-.476-.464h.658l.294-.69.293.69h.658l-.476.464.112.654zM6.681 7.214l-.588.31.113-.655-.476-.464h.657l.294-.69.294.69h.657l-.475.464.112.654zM9.481 7.214l-.588.31.113-.655-.476-.464h.657l.294-.69.294.69h.657l-.475.464.112.654z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BI_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BI_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><rect width="20" height="15" fill="#5eaa22" rx="1.25"/><mask id="fp_BI_mdb" width="30" height="19" x="-5" y="-2" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M-5-2h30v19H-5z"/><path fill-rule="evenodd" d="M10 7.5 20 0H0zm0 0L0 15h20z" clip-rule="evenodd"/></mask><path fill="#dd2c2b" fill-rule="evenodd" d="M10 7.5 20 0H0zm0 0L0 15h20z" clip-rule="evenodd"/><path fill="#fff" d="m20 0 .938 1.25 3.75-2.812H20zM0 0v-1.562h-4.687l3.75 2.812zm0 15-.937-1.25-3.75 2.813H0zm20 0v1.563h4.688l-3.75-2.813zm-.937-16.25-10 7.5 1.874 2.5 10-7.5zM0 1.563h20v-3.125H0zM10.938 6.25l-10-7.5-1.875 2.5 10 7.5zm-1.876 0-10 7.5 1.876 2.5 10-7.5zM0 16.563h20v-3.125H0zm20.938-2.813-10-7.5-1.876 2.5 10 7.5z" mask="url(#fp_BI_mdb)"/><path fill="#fff" fill-rule="evenodd" d="M10 11.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" clip-rule="evenodd"/><path fill="#dd2c2b" fill-rule="evenodd" d="m10.104 6.518-.734.386.14-.818-.594-.58h.821l.367-.863.368.864h.821l-.594.58.14.817zM8.351 9.018l-.734.386.14-.818-.595-.58h.822l.367-.863.368.864h.821l-.594.58.14.817zM11.851 9.018l-.734.386.14-.818-.594-.58h.821l.367-.863.368.864h.821l-.594.58.14.817z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BI_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BI_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><rect width="32" height="24" fill="#5eaa22" rx="2"/><mask id="fp_BI_lgb" width="48" height="30" x="-8" y="-3" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M-8-3h48v30H-8z"/><path fill-rule="evenodd" d="M16 12 32 0H0zm0 0L0 24h32z" clip-rule="evenodd"/></mask><path fill="#dd2c2b" fill-rule="evenodd" d="M16 12 32 0H0zm0 0L0 24h32z" clip-rule="evenodd"/><path fill="#fff" d="m32 0 1.5 2 6-4.5H32zM0 0v-2.5h-7.5l6 4.5zm0 24-1.5-2-6 4.5H0zm32 0v2.5h7.5l-6-4.5zM30.5-2l-16 12 3 4 16-12zM0 2.5h32v-5H0zM17.5 10 1.5-2l-3 4 16 12zm-3 0-16 12 3 4 16-12zM0 26.5h32v-5H0zM33.5 22l-16-12-3 4 16 12z" mask="url(#fp_BI_lgb)"/><path fill="#fff" fill-rule="evenodd" d="M16 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/><path fill="#dd2c2b" fill-rule="evenodd" stroke="#5eaa22" stroke-width=".25" d="m15.43 10.387-1.162.013.592-1-.592-1 1.162.013L16 7.4l.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013L16 11.4zM12.93 14.487l-1.162.013.592-1-.592-1 1.162.013.57-1.013.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013-.57 1.013zM17.93 14.487l-1.162.013.592-1-.592-1 1.162.013.57-1.013.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013-.57 1.013z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BI_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBI',
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
