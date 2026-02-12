import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_ET_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_ET_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_ET_smb)"><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#2b77b8" fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="#feca00" stroke-width=".75" d="m8 7-1.381.463.43-1.154-.937-1.118h1.3L8 4l.588 1.191h1.328l-.965 1.118.343 1.154z" clip-rule="evenodd"/><path stroke="#2b77b8" stroke-width=".5" d="m7.848 6.017-1.042 2.18M7.684 5.74h-2M8.06 6.419l1.955.902M8.483 5.937l1.415-1.549"/></g></g><defs><clipPath id="fp_ET_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_ET_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_ET_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_ET_mdb)"><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#2b77b8" fill-rule="evenodd" d="M10 11.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" clip-rule="evenodd"/><path stroke="#feca00" stroke-width=".938" d="m10 8.75-1.726.58.537-1.444-1.17-1.397h1.624L10 5l.735 1.489h1.66L11.19 7.886l.428 1.443z" clip-rule="evenodd"/><path stroke="#2b77b8" stroke-width=".625" d="m9.81 7.522-1.303 2.725M9.605 7.175h-2.5M10.076 8.024l2.443 1.127M10.604 7.421l1.769-1.936"/></g></g><defs><clipPath id="fp_ET_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_ET_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_ET_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_ET_lgb)"><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#2b77b8" fill-rule="evenodd" d="M16 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/><path stroke="#feca00" stroke-width="1.5" d="m16 14-2.762.927.86-2.309-1.874-2.236h2.6L16 8l1.176 2.382h2.657l-1.93 2.236.684 2.309z" clip-rule="evenodd"/><path stroke="#2b77b8" d="m15.696 12.035-2.085 4.36M15.368 11.48h-4M16.122 12.838l3.909 1.804M16.967 11.874l2.83-3.098"/></g></g><defs><clipPath id="fp_ET_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagET',
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
