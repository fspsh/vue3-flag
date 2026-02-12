import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BQ_SE_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#00268d" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#00268d" stroke="#e31d1c" d="M.5.5h15v11H.5z"/><path fill="#e31d1c" d="M7.5 0h1v12h-1z"/><path fill="#e31d1c" d="M0 6.5v-1h16v1z"/><path fill="#059334" d="M4.823 7.8h8.927l-.944-.957s-1.887-1.893-2.009-1.98-.322-.124-.55.152-.36-.151-.55-.151-.27 0-.546.353L7.88 6.843h-1.46s-.246-.21-.386-.135-.93-.824-1.212-.891-.467.243-.467.49c0 .248-.133-.226-.402-.087-.27.14-.183.489-.183.489S4.643 7.8 4.823 7.8"/><path fill="#feda00" fill-rule="evenodd" d="M7.003 5.534 6.386 6l.226-.77L6 4.76h.763l.24-.76.255.76H8l-.607.47.23.77z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BQ_SE_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BQ_SE_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#00268d" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#00268d" stroke="#e31d1c" stroke-width="1.25" d="M.625.625h18.75v13.75H.625z"/><path fill="#e31d1c" d="M9.375 0h1.25v15h-1.25z"/><path fill="#e31d1c" d="M0 8.125v-1.25h20v1.25z"/><path fill="#059334" d="M7.256 10h8.369l-.885-.957s-1.77-1.893-1.883-1.98c-.114-.086-.302-.124-.516.152s-.337-.151-.516-.151c-.178 0-.253 0-.512.353l-1.19 1.626H8.755s-.231-.209-.363-.134-.872-.825-1.136-.892-.438.243-.438.49c0 .248-.124-.226-.377-.087-.253.14-.171.489-.171.489S7.087 10 7.256 10"/><path fill="#feda00" fill-rule="evenodd" d="m9.753 7.034-.617.466.226-.77-.612-.47h.763l.24-.76.255.76h.742l-.607.47.23.77z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BQ_SE_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BQ_SE_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#00268d" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#00268d" stroke="#e31d1c" stroke-width="2" d="M1 1h30v22H1z"/><path fill="#e31d1c" d="M15 0h2v24h-2z"/><path fill="#e31d1c" d="M0 13v-2h32v2z"/><path fill="#059334" d="M11.609 16H25l-1.416-1.276s-2.831-2.524-3.013-2.64c-.183-.115-.484-.165-.826.203-.343.367-.54-.202-.824-.202-.285 0-.406 0-.82.471l-1.904 2.168h-2.19s-.369-.279-.58-.18-1.396-1.099-1.818-1.188c-.423-.09-.7.325-.7.655s-.2-.303-.603-.117c-.405.185-.274.65-.274.65S11.34 16 11.609 16"/><path fill="#feda00" fill-rule="evenodd" d="m15.505 11.301-.927.699.34-1.154-.918-.707h1.144L15.504 9l.383 1.14H17l-.91.706.346 1.154z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BQ_SE_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBQ_SE',
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
