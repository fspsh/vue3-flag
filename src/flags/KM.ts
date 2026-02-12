import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_KM_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5196ed" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_KM_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_KM_smb)"><path fill="#af0100" d="M0 6v3h16V6z"/><path fill="#f7fcff" d="M0 3v3h16V3z"/><path fill="#fbcd17" d="M0 0v3h16V0z"/><path fill="#5eaa22" d="m0 0 8 6-8 6z"/><path fill="#f7fcff" d="M3.152 8.728S1.361 8.06 1.424 5.972s1.888-2.497 1.888-2.497C2.672 2.97.387 3.56.314 5.972S2.47 8.92 3.152 8.728m.095-3.585.068-.393-.286-.278.395-.057.176-.358.176.358.395.057-.286.278.068.393-.353-.186zm.068.607-.068.393.353-.186.353.186-.068-.393.286-.278-.395-.057-.176-.358-.176.358-.395.057zm-.068 1.393.068-.393-.286-.278.395-.057.176-.358.176.358.395.057-.286.278.068.393-.353-.186zm0 1 .068-.393-.286-.278.395-.057.176-.358.176.358.395.057-.286.278.068.393-.353-.186z"/></g></g><defs><clipPath id="fp_KM_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_KM_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5196ed" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_KM_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_KM_mdb)"><path fill="#af0100" d="M0 7.5v3.75h20V7.5z"/><path fill="#f7fcff" d="M0 3.75V7.5h20V3.75z"/><path fill="#feca00" d="M0 0v3.75h20V0z"/><path fill="#5eaa22" d="m0 0 12.5 7.5L0 15z"/><path fill="#f7fcff" d="M4.94 10.683S2.7 9.904 2.78 7.468s2.36-2.914 2.36-2.914c-.799-.587-3.657.1-3.748 2.914s2.697 3.438 3.548 3.215m.068-4.26.07-.416-.297-.295.41-.06.184-.38.184.38.41.06-.297.295.07.417-.367-.197zm.07.857-.07.417.367-.197.367.197-.07-.417.297-.295-.41-.06-.184-.38-.184.38-.41.06zm-.07 1.69.07-.417-.297-.295.41-.06.184-.38.184.38.41.06-.297.295.07.416-.367-.196zm0 1.272.07-.416-.297-.295.41-.061.184-.38.184.38.41.06-.297.296.07.416-.367-.197z"/></g></g><defs><clipPath id="fp_KM_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_KM_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5196ed" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_KM_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_KM_lgb)"><path fill="#af0100" d="M0 12v6h32v-6z"/><path fill="#f7fcff" d="M0 6v6h32V6z"/><path fill="#feca00" d="M0 0v6h32V0z"/><path fill="#5eaa22" d="m0 0 19 12L0 24z"/><path fill="#f7fcff" d="M7.305 16.501S3.72 15.278 3.848 11.45 7.623 6.87 7.623 6.87c-1.277-.923-5.85.159-5.996 4.58-.146 4.42 4.315 5.402 5.678 5.051m.107-6.692.112-.654-.475-.464.657-.096L8 8l.294.595.657.096-.475.464.112.654L8 9.5zm.112 1.346-.112.654L8 11.5l.588.309-.112-.654.475-.464-.657-.096L8 10l-.294.595-.657.096zm-.112 2.654.112-.654-.475-.464.657-.096L8 12l.294.595.657.096-.475.463.112.655L8 13.5zm0 2 .112-.654-.475-.464.657-.096L8 14l.294.595.657.096-.475.463.112.655L8 15.5z"/></g></g><defs><clipPath id="fp_KM_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagKM',
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
