import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_EH_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="m0 0 8 6-8 6zM10.844 7.739S9.707 7.05 9.707 5.915s1.137-1.733 1.137-1.733c-.51-.323-2.274.138-2.274 1.77s1.748 1.934 2.274 1.787m.92-2.083-.662-.62.229.792-.64.303.786.256.342.858.15-.794.776.172-.588-.575.2-.612z" clip-rule="evenodd"/></g><defs><clipPath id="fp_EH_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_EH_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="m0 0 10 7.5L0 15zM13.555 9.673s-1.422-.859-1.422-2.279 1.422-2.167 1.422-2.167c-.636-.404-2.843.173-2.843 2.213s2.186 2.418 2.843 2.233m1.15-2.603-.827-.775.286.99-.801.38.983.32.428 1.07.186-.991.972.214-.735-.717.248-.766z" clip-rule="evenodd"/></g><defs><clipPath id="fp_EH_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_EH_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="m0 0 16 12L0 24zM21.688 15.477s-2.275-1.375-2.275-3.646 2.275-3.467 2.275-3.467c-1.018-.646-4.549.276-4.549 3.54s3.498 3.869 4.549 3.573m1.84-4.164-1.323-1.24.457 1.583-1.281.607 1.573.512.683 1.714.3-1.587 1.553.343-1.175-1.148.397-1.225z" clip-rule="evenodd"/></g><defs><clipPath id="fp_EH_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagEH',
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
