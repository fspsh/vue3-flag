import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_FM_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#63b3e1" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_FM_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill="#f7fcff" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_FM_smb)"><path d="m8 3.65-.882.464.169-.982-.714-.696.986-.143L8 1.4l.44.893.987.143-.714.696.169.982zM8 9.65l-.882.463.169-.981-.714-.696.986-.143L8 7.4l.442.893.986.143-.714.696.169.982zM4.9 6.75l-.882.464.169-.982-.714-.696.986-.143L4.9 4.5l.44.893.987.143-.714.696.169.982zM11 6.75l-.882.464.169-.982-.714-.696.986-.143L11 4.5l.44.893.987.143-.714.696.169.982z"/></g></g><defs><clipPath id="fp_FM_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_FM_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#63b3e1" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_FM_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill="#f7fcff" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_FM_mdb)"><path d="m10 4.563-1.102.579.21-1.227-.891-.87 1.232-.178L10 1.75l.551 1.117 1.232.179-.891.869.21 1.227zM10 12.063l-1.102.579.21-1.227-.891-.87 1.232-.178L10 9.25l.551 1.117 1.232.179-.891.869.21 1.227zM6.125 8.438l-1.102.579.21-1.227-.891-.87 1.232-.178.551-1.117.551 1.117 1.232.179-.891.869.21 1.227zM13.75 8.438l-1.102.579.21-1.227-.891-.87 1.232-.178.551-1.117.551 1.117 1.232.179-.891.869.21 1.227z"/></g></g><defs><clipPath id="fp_FM_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_FM_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#63b3e1" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_FM_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill="#f7fcff" fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_FM_lgb)"><path d="m16 7.3-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 2.8l.882 1.786 1.971.287-1.426 1.39.336 1.964zM16 19.3l-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 14.8l.882 1.787 1.971.286-1.426 1.39.336 1.964zM9.8 13.5l-1.763.927.336-1.963-1.426-1.391 1.971-.287L9.8 9l.882 1.787 1.971.286-1.426 1.39.336 1.964zM22 13.5l-1.763.927.336-1.963-1.426-1.391 1.971-.287L22 9l.882 1.787 1.971.286-1.426 1.39.336 1.964z"/></g></g><defs><clipPath id="fp_FM_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagFM',
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
