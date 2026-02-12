import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MH_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_MH_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_MH_smb)"><path fill="#f7fcff" fill-rule="evenodd" d="m4 5.5-.409 1.472.004-1.528-.79 1.308.416-1.47-1.114 1.045.797-1.303-1.355.706 1.12-1.04-1.496.315 1.358-.7-1.524-.1 1.497-.307-1.441-.508 1.524.108-1.25-.878 1.438.515-.968-1.183 1.246.884-.612-1.4.961 1.188-.211-1.513.605 1.403L4 1l.204 1.514.605-1.403-.211 1.513.96-1.187-.611 1.4 1.246-.885-.968 1.183 1.439-.515-1.25.878 1.523-.108-1.44.508 1.496.307-1.524.1 1.358.7-1.495-.315L6.45 5.73l-1.355-.706.797 1.303L4.78 5.282l.416 1.47-.79-1.308.003 1.528z" clip-rule="evenodd"/><path fill="#fff" d="M-.391 12.373 16.629.607v3.836z"/><path fill="#e2ae57" d="m-.391 12.373 17.02-14.766v3.836z"/></g></g><defs><clipPath id="fp_MH_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MH_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_MH_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_MH_mdb)"><path fill="#f7fcff" fill-rule="evenodd" d="m5 6.875-.51 1.84.004-1.91-.988 1.635.52-1.838-1.393 1.307.997-1.63-1.694.884 1.4-1.3-1.87.393 1.698-.875-1.905-.125 1.87-.384-1.8-.635 1.904.135L1.67 3.275l1.798.644L2.26 2.44l1.558 1.106-.765-1.75L4.253 3.28l-.265-1.89.757 1.752L5 1.25l.255 1.892.757-1.753-.265 1.891 1.201-1.484-.765 1.75L7.741 2.44 6.53 3.92l1.799-.644-1.563 1.097 1.905-.135-1.801.635 1.87.384-1.905.125 1.697.875-1.868-.393 1.399 1.3L6.37 6.28l.997 1.629-1.393-1.307.52 1.838-.988-1.635.005 1.91z" clip-rule="evenodd"/><path fill="#fff" d="M-.489 15.466 20.786.759v4.795z"/><path fill="#e2ae57" d="M-.489 15.466 20.786-2.991v4.795z"/></g></g><defs><clipPath id="fp_MH_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MH_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_MH_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_MH_lgb)"><path fill="#f7fcff" fill-rule="evenodd" d="m8 11-.817 2.944.008-3.055-1.581 2.614.831-2.94-2.228 2.091 1.594-2.606-2.709 1.412 2.238-2.08-2.99.63 2.717-1.4-3.049-.2 2.993-.615L2.126 6.78l3.047.216-2.5-1.755 2.876 1.03-1.934-2.365 2.492 1.768-1.224-2.8 1.922 2.375-.424-3.025 1.21 2.805L8 2l.409 3.028 1.21-2.805-.424 3.025 1.922-2.375-1.224 2.8 2.492-1.768-1.934 2.365 2.876-1.03-2.5 1.755 3.047-.216-2.881 1.016 2.993.614-3.049.201 2.717 1.4-2.99-.63 2.238 2.08-2.71-1.412 1.595 2.606-2.228-2.09.831 2.94-1.58-2.615.007 3.055z" clip-rule="evenodd"/><path fill="#fff" d="m-.782 24.745 34.04-23.53v7.67z"/><path fill="#e2ae57" d="m-.782 24.745 34.04-29.53v7.67z"/></g></g><defs><clipPath id="fp_MH_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMH',
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
