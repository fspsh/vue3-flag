import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#fa1111" fill-rule="evenodd" d="M16 0v12H0z" clip-rule="evenodd"/><path fill="#07a907" fill-rule="evenodd" d="M0 12V0h16z" clip-rule="evenodd"/><path fill="#fbcd17" fill-rule="evenodd" d="M14.746-2.9-.5 11.788l3.026 1.506L17.32-.106z" clip-rule="evenodd"/><mask id="fp_CG_smb" width="19" height="17" x="-1" y="-3" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M14.746-2.9-.5 11.788l3.026 1.506L17.32-.106z" clip-rule="evenodd"/></mask></g><defs><clipPath id="fp_CG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#fa1111" fill-rule="evenodd" d="M20 0v15H0z" clip-rule="evenodd"/><path fill="#07a907" fill-rule="evenodd" d="M0 15V0h20z" clip-rule="evenodd"/><path fill="#fbcd17" fill-rule="evenodd" d="M18.432-3.625-.625 14.735l3.782 1.883L21.65-.133z" clip-rule="evenodd"/><mask id="fp_CG_mdb" width="23" height="21" x="-1" y="-4" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M18.432-3.625-.625 14.735l3.782 1.883L21.65-.133z" clip-rule="evenodd"/></mask></g><defs><clipPath id="fp_CG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CG_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#fa1111" fill-rule="evenodd" d="M32 0v24H0z" clip-rule="evenodd"/><path fill="#07a907" fill-rule="evenodd" d="M0 24V0h32z" clip-rule="evenodd"/><path fill="#fbcd17" fill-rule="evenodd" d="M29.492-5.8-1 23.576l6.052 3.012L34.64-.212z" clip-rule="evenodd"/><mask id="fp_CG_lgb" width="36" height="33" x="-1" y="-6" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M29.492-5.8-1 23.576l6.052 3.012L34.64-.212z" clip-rule="evenodd"/></mask></g><defs><clipPath id="fp_CG_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCG',
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
