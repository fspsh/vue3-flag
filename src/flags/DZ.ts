import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_DZ_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M8 0h8v12H8z" clip-rule="evenodd"/><path fill="#36a400" fill-rule="evenodd" d="M0 0h8v12H0z" clip-rule="evenodd"/><path fill="red" fill-rule="evenodd" d="M9.313 2.816c.775 0 1.49.26 2.061.696a4.268 4.268 0 1 0-.276 5.595 3.398 3.398 0 1 1-1.785-6.291m1.432 1.252-1.07 1.213-1.537-.424.852 1.333-.852 1.419 1.612-.58.881 1.375V6.807l1.44-.617-1.44-.516z" clip-rule="evenodd"/></g><defs><clipPath id="fp_DZ_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_DZ_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M10 0h10v15H10z" clip-rule="evenodd"/><path fill="#36a400" fill-rule="evenodd" d="M0 0h10v15H0z" clip-rule="evenodd"/><path fill="red" fill-rule="evenodd" d="M11.638 3.908c.9 0 1.738.247 2.44.673a5.322 5.322 0 1 0-.302 7.222 4.7 4.7 0 0 1-2.139.505c-2.482 0-4.494-1.88-4.494-4.2s2.012-4.2 4.494-4.2m1.76 1.608-1.293 1.465-1.857-.511 1.03 1.61-1.03 1.713 1.948-.7 1.064 1.66V8.826L15 8.08l-1.74-.623z" clip-rule="evenodd"/></g><defs><clipPath id="fp_DZ_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_DZ_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M16 0h16v24H16z" clip-rule="evenodd"/><path fill="#36a400" fill-rule="evenodd" d="M0 0h16v24H0z" clip-rule="evenodd"/><path fill="red" fill-rule="evenodd" d="M17.791 6.795c1.522 0 2.913.562 3.976 1.49a7.353 7.353 0 1 0 0 9.123 6.051 6.051 0 1 1-3.976-10.612m2.82 2.749-1.703 1.929-2.445-.674 1.356 2.12-1.356 2.258 2.565-.924 1.402 2.189v-2.54l2.292-.982-2.292-.821z" clip-rule="evenodd"/></g><defs><clipPath id="fp_DZ_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagDZ',
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
