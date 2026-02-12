import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_AZ_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#af0100" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_AZ_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_AZ_smb)"><path fill="#3ca5d9" d="M0 0v4h16V0z"/><path fill="#73be4a" d="M0 8v4h16V8z"/><path fill="#f7fcff" d="M8.58 7.453c-.673-.155-1.2-.684-1.193-1.461a1.53 1.53 0 0 1 1.217-1.51c.74-.167 1.392.185 1.392.185-.204-.454-.915-.772-1.498-.77-1.085.002-2.243.83-2.254 2.096C6.232 7.304 7.481 8.05 8.58 8.047c.88-.002 1.299-.57 1.386-.81 0 0-.71.372-1.384.216m.429-.743.588-.409.588.41-.208-.686.57-.433-.715-.014-.235-.677-.235.677-.716.014.57.433z"/></g></g><defs><clipPath id="fp_AZ_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_AZ_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#af0100" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_AZ_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_AZ_mdb)"><path fill="#3ca5d9" d="M0 0v5h20V0z"/><path fill="#73be4a" d="M0 10v5h20v-5z"/><path fill="#f7fcff" d="M10.726 9.317c-.842-.194-1.5-.856-1.492-1.828.008-.909.595-1.678 1.52-1.887.927-.209 1.741.232 1.741.232-.255-.567-1.143-.965-1.872-.963-1.357.003-2.804 1.039-2.818 2.62-.015 1.64 1.546 2.571 2.919 2.568 1.1-.003 1.624-.712 1.732-1.013 0 0-.888.465-1.73.27m.535-.93.735-.51.735.51-.26-.856.714-.54-.895-.019-.294-.845-.294.845-.895.018.713.541z"/></g></g><defs><clipPath id="fp_AZ_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_AZ_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#af0100" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_AZ_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_AZ_lgb)"><path fill="#3ca5d9" d="M0 0v8h32V0z"/><path fill="#73be4a" d="M0 16v8h32v-8z"/><path fill="#f7fcff" d="M17.14 15.024c-1.347-.31-2.53-1.47-2.516-3.024.013-1.455.87-2.632 2.35-2.967 1.482-.334 3.018.301 3.018.301-.408-.907-1.83-1.544-2.995-1.541-2.17.006-4.486 1.663-4.509 4.193-.023 2.623 2.473 4.114 4.67 4.108 1.761-.005 2.598-1.138 2.772-1.62 0 0-1.443.86-2.79.55m.878-1.603 1.175-.818 1.176.818-.415-1.371 1.142-.865-1.432-.03-.47-1.352-.47 1.352-1.433.03 1.142.865z"/></g></g><defs><clipPath id="fp_AZ_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagAZ',
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
