import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MA_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h16v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M11.241 9.813 8.083 1.35h-.137L4.898 9.813 8.063 7.91zM7.733 4.111l.339-1.32.351 1.358 1.01 2.828.592 1.37-1.28-.902-.682-.41-.673.405-1.25.906.578-1.397z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M6.331 6.737 8.08 7.899 9.71 6.737l3.098-2.619H3.193zm.037-1-1.19-.727h5.613l-1.021.646-1.698 1.288z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MA_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MA_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h20v13.75c0 .69-.56 1.25-1.25 1.25H1.25C.56 15 0 14.44 0 13.75z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M14.051 12.266 10.104 1.688h-.172l-3.81 10.578 3.957-2.378zM9.667 5.14l.423-1.65.439 1.697 1.262 3.535.74 1.712-1.599-1.127-.854-.511-.84.505-1.562 1.133.722-1.747z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M7.914 8.42 10.1 9.874l2.039-1.452 3.872-3.273H3.99zm.045-1.249-1.486-.91h7.015l-1.276.809-2.122 1.61z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MA_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MA_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 0h32v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="M22.482 19.626 16.166 2.701h-.274L9.795 19.626l6.332-3.805zM15.467 8.222l.677-2.638.702 2.714 2.019 5.656 1.185 2.739-2.559-1.803-1.366-.818-1.344.808-2.5 1.813 1.156-2.795z" clip-rule="evenodd"/><path fill="#579d20" fill-rule="evenodd" d="m12.663 13.473 3.496 2.324 3.262-2.324 6.195-5.237H6.386zm.072-1.999-2.377-1.455H21.58l-2.041 1.293-3.397 2.577z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MA_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMA',
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
