import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MZ_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_MZ_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_MZ_smb)"><path fill="#feca00" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#093" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#272727" stroke="#fff" d="M0 3.5h-.5v5h17v-5H0Z"/></g><path fill="#f50100" fill-rule="evenodd" d="M0 0v12l9-6z" clip-rule="evenodd"/><mask id="fp_MZ_smc" width="9" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12l9-6z" clip-rule="evenodd"/></mask><g mask="url(#fp_MZ_smc)"><path fill="#feca00" fill-rule="evenodd" d="m4.034 7.177-1.89 1.525.868-2.038-1.49-1.435H3.28L4.002 3.5l.766 1.73h1.754L4.955 6.663l.784 2.038z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m3.078 5.992-.32 1.07s1.081-.01 1.211.099c.392-.244 1.198-.099 1.198-.099l-.429-1.145s-.543-.246-.769-.111c-.552-.125-.891.186-.891.186" clip-rule="evenodd"/><path fill="#000" d="M5.782 7.608a.25.25 0 0 1-.4.3l-2.09-2.775a.25.25 0 1 1 .4-.3z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="m3.487 4.92-.2-.24"/><path fill="#000" fill-rule="evenodd" d="m2.802 4.681-.604.968.302.523.691-1.027.125-.317-.125-.147zM2.02 7.554l.464.54 3.514-4.072-1.597.995z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_MZ_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MZ_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_MZ_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_MZ_mdb)"><path fill="#feca00" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#093" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#272727" stroke="#fff" stroke-width="1.25" d="M0 4.375h-.625v6.25h21.25v-6.25H0Z"/></g><path fill="#f50100" fill-rule="evenodd" d="M0 0v15l11.25-7.5z" clip-rule="evenodd"/><mask id="fp_MZ_mdc" width="12" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15l11.25-7.5z" clip-rule="evenodd"/></mask><g mask="url(#fp_MZ_mdc)"><path fill="#feca00" fill-rule="evenodd" d="m5.043 8.97-2.362 1.907L3.765 8.33 1.903 6.537H4.1l.902-2.162.957 2.162h2.194l-1.96 1.792.981 2.548z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m3.847 7.49-.4 1.338s1.352-.013 1.515.123c.489-.305 1.496-.123 1.496-.123l-.535-1.432s-.68-.308-.961-.139c-.69-.156-1.115.233-1.115.233" clip-rule="evenodd"/><path fill="#000" d="M7.227 9.51a.313.313 0 0 1-.499.376l-2.612-3.47a.312.312 0 1 1 .499-.375z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".625" d="m4.359 6.15-.25-.3"/><path fill="#000" fill-rule="evenodd" d="m3.503 5.852-.755 1.21.377.653.864-1.284.156-.397-.156-.182zM2.524 9.443l.365.513 2.81-3.324.116.13.648-.61 1.035-1.125-1.035.846-.335-.093-.313.492H5.5L3.206 8.826z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_MZ_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MZ_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_MZ_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_MZ_lgb)"><path fill="#feca00" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#093" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#272727" stroke="#fff" stroke-width="2" d="M0 7h-1v10h34V7H0Z"/></g><path fill="#f50100" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"/><mask id="fp_MZ_lgc" width="18" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"/></mask><g mask="url(#fp_MZ_lgc)"><path fill="#feca00" fill-rule="evenodd" d="m8.069 14.353-3.78 3.05 1.734-4.076-2.978-2.868H6.56L8.003 7l1.532 3.459h3.51l-3.136 2.868 1.57 4.077z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m6.156 11.984-.641 2.14s2.164-.02 2.424.198c.783-.488 2.395-.197 2.395-.197l-.858-2.291S8.39 11.34 7.94 11.61c-1.105-.249-1.783.373-1.783.373" clip-rule="evenodd"/><path fill="#000" d="M11.564 15.216a.5.5 0 0 1-.8.602l-4.18-5.551a.5.5 0 0 1 .8-.602z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m6.974 9.84-.4-.48"/><path fill="#000" fill-rule="evenodd" d="m5.605 9.363-1.209 1.935L5 12.345l1.383-2.055.248-.635-.248-.292zM4.039 15.109l.583.821 4.495-5.319.187.209 1.036-.975 1.656-1.802-1.656 1.354-.536-.149-.5.787H8.8L5.13 14.122z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_MZ_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMZ',
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
