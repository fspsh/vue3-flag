import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_HN_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_HN_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill="#00bce4" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_HN_smb)"><path d="M0 0v4h16V0zM0 8v4h16V8zM8.41 6.566l-.589.309.113-.655-.476-.51h.657l.294-.644.294.643h.657l-.475.511.112.655zM5.41 5.566l-.589.309.113-.655-.476-.51h.657l.294-.644.294.643h.657l-.475.511.112.655zM5.41 7.566l-.589.309.113-.655-.476-.51h.657l.294-.644.294.643h.657l-.475.511.112.655zM11.41 5.566l-.589.309.113-.655-.476-.51h.657l.294-.644.294.643h.657l-.475.511.112.655zM11.41 7.566l-.589.309.113-.655-.476-.51h.657l.294-.644.294.643h.657l-.475.511.112.655z"/></g></g><defs><clipPath id="fp_HN_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_HN_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_HN_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill="#00bce4" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_HN_mdb)"><path d="M0 0v5h20V0zM0 10v5h20v-5zM10.511 8.207l-.734.387.14-.818-.595-.64h.822l.367-.804.368.804h.821l-.594.64.14.818zM6.761 6.957l-.734.387.14-.818-.595-.64h.822l.367-.804.368.804h.821l-.594.64.14.818zM6.761 9.457l-.734.387.14-.818-.595-.64h.822l.367-.804.368.804h.821l-.594.64.14.818zM14.261 6.957l-.734.387.14-.818-.594-.64h.82l.368-.804.368.804h.821l-.594.64.14.818zM14.261 9.457l-.734.387.14-.818-.594-.64h.82l.368-.804.368.804h.821l-.594.64.14.818z"/></g></g><defs><clipPath id="fp_HN_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_HN_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_HN_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill="#00bce4" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_HN_lgb)"><path d="M0 0v8h32V0zM0 16v8h32v-8zM16.402 12.67l-.866.448.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zM10.318 10.503l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zM10.318 14.703l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zM22.318 10.503l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zM22.318 14.703l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948z"/></g></g><defs><clipPath id="fp_HN_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagHN',
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
