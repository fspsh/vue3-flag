import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_LY_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#55ba07" fill-rule="evenodd" d="M0 9h16v3H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M0 3h16v6H0z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h16v3H0z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M7.899 7.533c-.896-.185-1.124-.72-1.115-1.444 0-.765.399-1.473 1.106-1.558s1.285.18 1.589.547C9.225 4.08 8.384 3.97 7.739 3.97c-.972-.008-1.998.664-1.998 2.194 0 1.369.908 2.046 2.026 2.068 1.398 0 1.616-.965 1.657-1.294a3 3 0 0 0-.234.2c-.28.258-.585.541-1.291.395m2.209-1.926-.638.247.662.292-.024.775.502-.535.729.15-.442-.593.386-.571-.61.128-.43-.486z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LY_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_LY_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#55ba07" fill-rule="evenodd" d="M0 11h20v4H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M0 3.75h20v7.5H0z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h20v4H0z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M9.873 9.416c-1.12-.231-1.41-.817-1.398-1.721 0-.957.504-1.925 1.387-2.031.884-.106 1.607.224 1.986.684-.317-1.249-1.368-1.385-2.175-1.385-1.214-.011-2.46.912-2.46 2.649 0 1.513 1.098 2.65 2.495 2.678 1.748 0 2.021-1.206 2.072-1.617-.101.072-.195.159-.292.247-.351.324-.736.678-1.615.496m2.791-2.359-.827.26.927.363-.13.971.629-.668.91.187-.615-.72.545-.735-.76.16-.539-.607z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LY_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_LY_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#55ba07" fill-rule="evenodd" d="M0 18h32v6H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M0 6h32v12H0z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0h32v6H0z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M15.798 15.066c-1.793-.37-2.258-1.308-2.238-2.755 0-1.53.806-3.08 2.22-3.249 1.413-.169 2.57.358 3.178 1.094-.508-1.997-2.19-2.216-3.48-2.216-1.944-.017-3.938 1.46-3.938 4.239 0 2.42 1.757 4.24 3.994 4.285 2.795 0 3.233-1.93 3.313-2.588a5 5 0 0 0-.466.397c-.562.517-1.178 1.084-2.583.793m4.465-3.775-1.324.417 1.483.58-.207 1.554 1.005-1.07 1.458.3-.985-1.151.872-1.177-1.218.257-.86-.972z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LY_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagLY',
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
