import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BA_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M5 0h10v12z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m3.554 1.397-.588.309.112-.655-.475-.463.657-.096.294-.595.294.595.657.096-.475.463.112.655zM5.297 3.537l-.587.309.112-.655-.476-.463.657-.096.294-.595.294.595.657.096-.475.463.112.655zM6.932 5.62l-.588.308.112-.654-.475-.464.657-.095.294-.596.294.596.657.095-.476.464.112.654zM8.533 7.615l-.588.309.112-.655-.475-.463.657-.096.294-.595.294.595.657.096-.476.463.112.655zM10.257 9.668l-.588.31.113-.655-.476-.464.657-.095.294-.596.294.596.657.095-.475.464.112.654zM12.164 11.656l-.588.308.112-.654-.476-.463.658-.096.294-.595.293.595.657.096-.475.463.112.654z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BA_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BA_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h20.25v15H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M6.25 0H19v15z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m4.443 1.746-.735.386.14-.818-.594-.58.821-.119.368-.744.367.744.821.12-.594.58.14.817zM6.622 4.421l-.735.386.14-.818-.594-.58.821-.118.368-.745.367.745.822.119-.595.58.14.817zM8.665 7.024l-.735.386.14-.818-.594-.58.821-.119.368-.744.367.744.821.12-.594.58.14.817zM10.666 9.518l-.735.387.14-.819-.594-.579.822-.12.367-.744.367.745.822.119-.595.58.14.818zM12.822 12.085l-.735.387.14-.818-.594-.58.821-.12.367-.744.368.745.821.12-.594.579.14.818zM15.204 14.57l-.735.386.14-.819-.594-.579.822-.12.367-.744.368.745.821.12-.594.579.14.818z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BA_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BA_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M9 0h20v24z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m6.108 2.794-1.176.618.225-1.31-.951-.926L5.52.985l.588-1.191.588 1.19 1.314.192-.95.927.224 1.309zM9.595 7.074l-1.176.618.225-1.31-.951-.926 1.314-.191.588-1.191.587 1.19 1.315.192-.951.927.224 1.309zM12.863 11.238l-1.175.618.224-1.309-.95-.927 1.314-.19.587-1.192.588 1.191 1.314.191-.95.927.224 1.31zM16.065 15.23l-1.175.617.224-1.309-.95-.927 1.313-.19.588-1.192.588 1.191 1.314.191-.95.927.224 1.31zM19.514 19.337l-1.175.618.224-1.31-.95-.926 1.314-.191.587-1.191.588 1.19 1.314.192-.95.927.224 1.309zM23.327 23.311l-1.176.618.225-1.309-.951-.927 1.314-.191.588-1.191.588 1.191 1.314.191-.951.927.225 1.31z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BA_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBA',
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
