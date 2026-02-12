import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_IN_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_IN_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_IN_smb)"><path fill="#ff8c1a" d="M0 0v4h16V0z"/><path fill="#5eaa22" d="M0 8v4h16V8z"/><path fill="#3d58db" d="M6 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m3.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path fill="#3d58db" d="M7.997 6.43 7.58 7.967l.244-1.573-1.006 1.234.864-1.338-1.422.718 1.333-.871-1.59.078 1.572-.254-1.485-.575 1.54.407-1.123-1.13 1.24.999-.566-1.489.728 1.417L7.997 4l.089 1.59.727-1.417-.566 1.489 1.24-.998-1.122 1.13 1.54-.408-1.485.575 1.572.254-1.59-.078 1.332.871-1.421-.718.863 1.338L8.17 6.394l.244 1.573z"/></g></g><defs><clipPath id="fp_IN_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_IN_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_IN_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_IN_mdb)"><path fill="#ff8c1a" d="M0 0v5h20V0z"/><path fill="#5eaa22" d="M0 10v5h20v-5z"/><path fill="#3d58db" d="M7.5 7.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m4.375 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0"/><path fill="#3d58db" d="m9.997 8.038-.522 1.921.306-1.967-1.258 1.543 1.079-1.673-1.776.898 1.666-1.089-1.989.098 1.965-.318-1.856-.719 1.925.51-1.403-1.413 1.55 1.248-.707-1.86.91 1.77L9.996 5l.11 1.987.91-1.77-.708 1.86 1.55-1.248-1.402 1.412 1.924-.509-1.856.72 1.965.317-1.988-.098 1.666 1.09-1.777-.899 1.08 1.673-1.258-1.543.305 1.967z"/></g></g><defs><clipPath id="fp_IN_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_IN_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_IN_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_IN_lgb)"><path fill="#ff8c1a" d="M0 0v8h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#3d58db" d="M12 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m7 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill="#3d58db" d="m15.995 12.86-.571 3.121.331-3.155-1.427 2.834 1.207-2.934-2.167 2.316 1.984-2.474-2.732 1.612 2.602-1.816-3.076.777 3.007-1.009-3.17-.121 3.17-.12-3.007-1.01 3.076.777-2.602-1.815 2.732 1.612-1.984-2.475 2.167 2.316-1.207-2.934 1.427 2.834-.331-3.155.57 3.12.571-3.12-.331 3.155 1.427-2.834-1.207 2.934L18.62 8.98l-1.984 2.475 2.732-1.612-2.602 1.815 3.076-.777-3.008 1.01 3.17.12-3.17.121 3.008 1.01-3.076-.778 2.602 1.816-2.732-1.612 1.984 2.474-2.167-2.316 1.207 2.934-1.427-2.834.331 3.155z"/></g></g><defs><clipPath id="fp_IN_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagIN',
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
