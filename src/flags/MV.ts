import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MV_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h16v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M3 3h10v6H3z" clip-rule="evenodd"/><path stroke="#b6eb9a" stroke-opacity=".238" d="M3.5 3.5h9v5h-9z"/><mask id="fp_MV_smb" width="10" height="6" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M3 3h10v6H3z" clip-rule="evenodd"/><path stroke="#fff" d="M3.5 3.5h9v5h-9z"/></mask><g mask="url(#fp_MV_smb)"><path fill="#f9fafa" fill-rule="evenodd" d="M8.016 6.231c-.008 1.533 1.199 2.35 1.199 2.35-1.377.162-2.293-1.086-2.293-2.335s1.248-2.28 2.293-2.745c0 0-1.19 1.197-1.199 2.73" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_MV_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MV_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h20v13.75c0 .69-.56 1.25-1.25 1.25H1.25C.56 15 0 14.44 0 13.75z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M3 3h14v9H3z" clip-rule="evenodd"/><path stroke="#b6eb9a" stroke-opacity=".238" stroke-width="1.25" d="M3.625 3.625h12.75v7.75H3.625z"/><mask id="fp_MV_mdb" width="14" height="9" x="3" y="3" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M3 3h14v9H3z" clip-rule="evenodd"/><path stroke="#fff" stroke-width="1.25" d="M3.625 3.625h12.75v7.75H3.625z"/></mask><g mask="url(#fp_MV_mdb)"><path fill="#f9fafa" fill-rule="evenodd" d="M10.02 7.789c-.01 1.916 1.498 2.938 1.498 2.938-1.72.202-2.866-1.359-2.866-2.92s1.561-2.85 2.866-3.431c0 0-1.487 1.497-1.497 3.413" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_MV_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MV_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h32v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M6 6h20v12H6z" clip-rule="evenodd"/><path stroke="#b6eb9a" stroke-opacity=".238" stroke-width="2" d="M7 7h18v10H7z"/><mask id="fp_MV_lgb" width="20" height="12" x="6" y="6" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M6 6h20v12H6z" clip-rule="evenodd"/><path stroke="#fff" stroke-width="2" d="M7 7h18v10H7z"/></mask><g mask="url(#fp_MV_lgb)"><path fill="#f9fafa" fill-rule="evenodd" d="M16.033 12.463c-.017 3.065 2.396 4.7 2.396 4.7-2.753.323-4.586-2.174-4.586-4.67 0-2.498 2.498-4.56 4.586-5.492 0 0-2.379 2.396-2.396 5.462" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_MV_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMV',
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
