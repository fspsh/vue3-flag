import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_KN_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v12L16 0z" clip-rule="evenodd"/><path fill="#272727" stroke="#ffd018" stroke-width="1.25" d="m.318 13.976.362.403.45-.3L19.26 1.977l.6-.4-.48-.537-2.661-2.968-.362-.403-.45.3-18.131 12.102-.6.4.482.537z"/><path fill="#f7fcff" fill-rule="evenodd" d="m6.044 8.46-.544.946-.348-1.067-1.08-.343.9-.55-.108-1.117.889.684.92-.51-.258 1.136.74.85zM11.044 5.183l-.544.947-.348-1.067-1.08-.344.9-.55-.108-1.116.889.683.92-.51-.258 1.137.74.85z" clip-rule="evenodd"/></g><defs><clipPath id="fp_KN_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_KN_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v15L20 0z" clip-rule="evenodd"/><path fill="#272727" stroke="#ffd018" stroke-width="1.563" d="m.397 17.47.453.504.563-.376L24.076 2.471l.75-.5-.602-.671-3.326-3.71-.452-.504-.563.376L-2.78 12.589l-.75.5.602.671z"/><path fill="#f7fcff" fill-rule="evenodd" d="m7.555 10.574-.68 1.184-.434-1.334-1.352-.43 1.126-.687L6.08 7.91l1.11.855 1.152-.638-.323 1.421.924 1.063zM13.805 6.478l-.68 1.184-.434-1.334-1.352-.43 1.126-.687-.135-1.395 1.11.854 1.152-.638-.323 1.421.924 1.063z" clip-rule="evenodd"/></g><defs><clipPath id="fp_KN_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_KN_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0v24L32 0z" clip-rule="evenodd"/><path fill="#272727" stroke="#ffd018" stroke-width="2.5" d="m.636 27.952.723.807.902-.602L38.52 3.954l1.2-.8-.963-1.074-5.32-5.936-.724-.807-.901.602-36.261 24.203-1.2.8.963 1.074z"/><path fill="#f7fcff" fill-rule="evenodd" d="M12.089 16.918 11 18.813l-.695-2.134-2.162-.688 1.801-1.1-.217-2.233 1.778 1.367 1.842-1.02-.516 2.273 1.477 1.701zM22.089 10.365 21 12.26l-.695-2.134-2.162-.688 1.801-1.1-.217-2.233 1.778 1.367 1.842-1.02-.516 2.273 1.477 1.701z" clip-rule="evenodd"/></g><defs><clipPath id="fp_KN_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagKN',
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
