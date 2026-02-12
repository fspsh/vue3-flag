import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_IL_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_IL_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill="#3d58db" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_IL_smb)"><path d="M0 2v1.783h16V2zM0 8.174V10h16V8.174z"/><path d="M5.69 7.47h4.69L8.057 3.46zm3.735-.55H6.654l1.4-2.371z"/><path d="M5.546 4.463h4.794L8.068 8.485zm3.852.55H6.54L8.043 7.41z"/></g></g><defs><clipPath id="fp_IL_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_IL_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_IL_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill="#3d58db" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_IL_mdb)"><path d="M0 2.5v2.228h20V2.5zM0 10.218V12.5h20v-2.283z"/><path d="M7.113 9.337h5.86l-2.9-5.013zm4.669-.688H8.317l1.75-2.963z"/><path d="M6.932 5.578h5.993l-2.84 5.029zm4.816.688H8.175l1.88 2.998z"/></g></g><defs><clipPath id="fp_IL_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_IL_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_IL_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill="#3d58db" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_IL_lgb)"><path d="M0 3v3h32V3zM0 18v3h32v-3zM11.381 14.939h9.377L16.116 6.62zm7.772-1.01h-6.132l3.086-5.47z"/><path d="M11.264 9.076h9.417l-4.545 8.086zm7.781.974h-5.994l3.058 5.481z"/></g></g><defs><clipPath id="fp_IL_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagIL',
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
