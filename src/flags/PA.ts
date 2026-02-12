import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_PA_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_PA_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_PA_smb)"><path fill="#e31d1c" d="M8 0v6h8V0zM11.51 9.575l-1.15.712.446-1.196-.978-.905h1.187l.495-1.294.379 1.294h1.189l-.857.905.42 1.196z"/><path fill="#2e42a5" d="m4.51 4.182-1.15.713.446-1.196-.978-.905h1.187L4.51 1.5l.379 1.294h1.189l-.857.905.42 1.196zM0 6v6h8V6z"/></g></g><defs><clipPath id="fp_PA_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_PA_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_PA_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_PA_mdb)"><path fill="#e31d1c" d="M10 0v7.5h10V0zM14.388 11.969l-1.439.89.559-1.495-1.223-1.132h1.483l.62-1.616.473 1.617h1.486l-1.07 1.131.524 1.495z"/><path fill="#2e42a5" d="m5.638 5.228-1.439.89.559-1.494-1.223-1.132h1.483l.62-1.617.473 1.617h1.486l-1.07 1.132.523 1.494zM0 7.5V15h10V7.5z"/></g></g><defs><clipPath id="fp_PA_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_PA_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_PA_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_PA_lgb)"><path fill="#e31d1c" d="M16 0v12h16V0zM23.02 19.15l-2.302 1.424.894-2.391-1.957-1.811h2.374l.992-2.587.757 2.587h2.377l-1.713 1.81.839 2.392z"/><path fill="#2e42a5" d="M9.02 8.365 6.719 9.79l.894-2.392-1.957-1.81H8.03L9.021 3l.757 2.587h2.377l-1.713 1.81.839 2.393zM0 12v12h16V12z"/></g></g><defs><clipPath id="fp_PA_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagPA',
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
