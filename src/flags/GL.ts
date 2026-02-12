import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GL_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 6h16v6H0z" clip-rule="evenodd"/><mask id="fp_GL_smb" width="16" height="6" x="0" y="6" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 6h16v6H0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GL_smb)"><path fill="#f7fcff" fill-rule="evenodd" d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clip-rule="evenodd"/></g><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v6H0z" clip-rule="evenodd"/><mask id="fp_GL_smc" width="16" height="6" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0h16v6H0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GL_smc)"><path fill="#c51918" fill-rule="evenodd" d="M6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_GL_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GL_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 7.5h20V15H0z" clip-rule="evenodd"/><mask id="fp_GL_mdb" width="20" height="8" x="0" y="7" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 7.5h20V15H0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GL_mdb)"><path fill="#f7fcff" fill-rule="evenodd" d="M7.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10" clip-rule="evenodd"/></g><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v7.5H0z" clip-rule="evenodd"/><mask id="fp_GL_mdc" width="20" height="8" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0h20v7.5H0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GL_mdc)"><path fill="#c51918" fill-rule="evenodd" d="M7.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_GL_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GL_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 12h32v12H0z" clip-rule="evenodd"/><mask id="fp_GL_lgb" width="32" height="12" x="0" y="12" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 12h32v12H0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GL_lgb)"><path fill="#f7fcff" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16" clip-rule="evenodd"/></g><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v12H0z" clip-rule="evenodd"/><mask id="fp_GL_lgc" width="32" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0h32v12H0z" clip-rule="evenodd"/></mask><g mask="url(#fp_GL_lgc)"><path fill="#c51918" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_GL_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGL',
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
