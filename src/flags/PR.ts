import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_PR_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#ef0000" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_PR_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PR_smb)"><path fill="#ef0000" stroke="#f7fcff" stroke-width="2" d="M0 4h-1v4h18V4H0Z"/></g><path fill="#3d58db" fill-rule="evenodd" d="M0 0v12l9-6z" clip-rule="evenodd"/><mask id="fp_PR_smc" width="9" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12l9-6z" clip-rule="evenodd"/></mask><g mask="url(#fp_PR_smc)"><path fill="#f7fcff" fill-rule="evenodd" d="m3.344 7.108-1.836.97.894-1.948-1.14-1.04 1.407-.052.675-1.76.515 1.76h1.404L4.327 6.13l.744 1.947z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PR_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_PR_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#ef0000" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_PR_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PR_mdb)"><path fill="#ef0000" stroke="#f7fcff" stroke-width="2.5" d="M0 5h-1.25v5h22.5V5H0Z"/></g><path fill="#3d58db" fill-rule="evenodd" d="M0 0v15l11.25-7.5z" clip-rule="evenodd"/><mask id="fp_PR_mdc" width="12" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15l11.25-7.5z" clip-rule="evenodd"/></mask><g mask="url(#fp_PR_mdc)"><path fill="#f7fcff" fill-rule="evenodd" d="m4.18 8.886-2.295 1.21 1.117-2.433-1.424-1.3 1.758-.065.844-2.2.644 2.2h1.754l-1.17 1.365.931 2.434z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PR_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_PR_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#ef0000" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_PR_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PR_lgb)"><path fill="#ef0000" stroke="#f7fcff" stroke-width="4" d="M0 8h-2v8h36V8H0Z"/></g><path fill="#3d58db" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"/><mask id="fp_PR_lgc" width="18" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"/></mask><g mask="url(#fp_PR_lgc)"><path fill="#f7fcff" fill-rule="evenodd" d="m6.688 14.217-3.672 1.938 1.787-3.894-2.277-2.08 2.812-.104 1.35-3.52 1.03 3.52h2.807l-1.87 2.184 1.488 3.894z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PR_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagPR',
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
