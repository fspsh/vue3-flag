import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_VE_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_VE_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_VE_smb)"><path fill="#feca00" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#f7fcff" d="m4.107 7.62-.911-.41C4.064 5.282 5.695 4.302 8 4.302s3.932.981 4.788 2.91l-.914.406C11.184 6.063 9.924 5.302 8 5.302s-3.192.762-3.893 2.318"/></g></g><defs><clipPath id="fp_VE_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_VE_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_VE_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_VE_mdb)"><path fill="#feca00" d="M0 0v5h20V0z"/><path fill="#e31d1c" d="M0 10v5h20v-5z"/><path fill="#f7fcff" d="m7.96 7.412.615-.348.689.348-.248-.708.515-.52h-.655l-.302-.67-.258.67h-.768l.577.51h-.648l-.302-.67-.258.67H6.15l.588.521-.112.454h-.49l-.303-.67-.257.67h-.769l.588.52-.108.44H5.07l-.302-.67-.258.67h-.768l.588.52-.176.708.615-.348.689.348-.248-.708.515-.52h-.033l.14-.08.69.349-.248-.709.295-.298-.008.032.614-.348.69.348-.248-.708.511-.517.007.006zM12.014 7.385l-.614-.349-.689.349.248-.708-.515-.52h.655l.302-.67.258.67h.768l-.578.51h.652l.302-.67.257.67h.769l-.588.52.112.455h.49l.303-.67.257.67h.769l-.589.52.11.44h.214l.302-.67.258.67h.768l-.588.52.175.708-.614-.349-.689.349.248-.708-.515-.52h.033l-.14-.08-.69.348.248-.708-.295-.298.008.032-.614-.349-.69.349.248-.708-.513-.519-.008.008z"/><path fill="#f7fcff" d="m9.896 6.584-.615.349.176-.709-.589-.52h.769l.258-.67.302.67h.655l-.515.52.248.709z"/></g></g><defs><clipPath id="fp_VE_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_VE_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_VE_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_VE_lgb)"><path fill="#feca00" d="M0 0v8h32V0z"/><path fill="#e31d1c" d="M0 16v8h32v-8z"/><path fill="#f7fcff" d="m12.737 11.86.982-.558 1.103.557-.396-1.133.824-.832h-1.048l-.484-1.072-.412 1.072h-1.23l.925.817h-1.037L11.48 9.64l-.412 1.072h-1.23l.942.833-.18.726h-.785l-.483-1.072-.413 1.072H7.69l.942.833-.174.703h-.343l-.484-1.072-.412 1.072h-1.23l.941.833-.28 1.133.983-.558 1.102.557-.396-1.133.824-.832h-.053l.224-.127 1.103.557-.396-1.133.472-.477-.013.051.983-.557 1.102.557-.396-1.133.819-.827.01.01zM19.223 11.816l-.983-.558-1.102.558.396-1.133-.824-.833h1.048l.484-1.072.412 1.072h1.23l-.925.818h1.042l.483-1.073.413 1.073h1.23l-.942.832.18.727h.785l.483-1.073.412 1.073h1.23l-.941.832.174.703h.343l.484-1.072.412 1.072h1.23l-.942.833.28 1.133-.982-.558-1.102.558.396-1.133-.824-.833h.053l-.225-.127-1.102.557.396-1.133-.472-.477.013.051-.983-.557-1.103.557.396-1.133-.82-.83-.014.013z"/><path fill="#f7fcff" d="m15.833 10.535-.983.557.28-1.133-.94-.832h1.23l.412-1.073.483 1.073h1.048l-.823.832.396 1.133z"/></g></g><defs><clipPath id="fp_VE_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagVE',
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
