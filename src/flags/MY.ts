import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MY_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M.014 2.5h16v1.45h-16zM.014 5.1h16v1.45h-16zM.056 7.6h16v1.25h-16zM.056 10.1h16v1.35h-16z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h16v1.25H0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h8v6H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M1.797 3.101c0 .688.324 1.339.983 1.339.99 0 1.182-.211 1.644-.502.109.245-.26 1.294-1.657 1.294C1.649 5.21.745 4.312.745 3.102c0-1.39 1.022-2.14 1.994-2.132.858 0 1.768.487 1.74 1.108-.404-.395-.843-.395-1.574-.395-.73 0-1.108.73-1.108 1.418" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m5.5 3.65-.464.677.023-.82-.773.275.5-.65L4 2.9l.787-.232-.5-.65.772.275-.023-.82.464.677.464-.677-.023.82.773-.275-.5.65L7 2.9l-.787.232.5.65-.772-.275.023.82z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MY_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MY_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M.017 3.125h20v1.813h-20zM.017 6.375h20v1.813h-20zM.07 9.5h20v1.563h-20zM.07 12.625h20v1.688h-20z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h20v1.563H0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h10v8.5H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M2.246 3.876c0 .86.405 1.674 1.23 1.674 1.236 0 1.477-.264 2.054-.627.136.306-.324 1.617-2.072 1.617C2.061 6.512.931 5.39.931 3.876c0-1.736 1.278-2.674 2.492-2.663 1.073 0 2.21.608 2.176 1.385-.506-.494-1.054-.494-1.968-.494s-1.385.912-1.385 1.772" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m6.875 4.563-.58.845.029-1.025-.966.344.625-.812L5 3.625l.983-.29-.625-.812.966.344-.028-1.025.579.845.58-.845-.029 1.025.966-.344-.625.812.983.29-.983.29.625.812-.966-.344.028 1.025z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MY_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MY_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#e31d1c" d="M.027 5h32v2.9h-32zM.027 10.2h32v2.9h-32zM.112 15.2h32v2.5h-32zM.112 20.2h32v2.7h-32z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h32v2.5H0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M3.594 6.202c0 1.376.648 2.678 1.966 2.678 1.98 0 2.364-.422 3.287-1.004.219.49-.518 2.588-3.314 2.588C3.297 10.42 1.49 8.623 1.49 6.202c0-2.778 2.044-4.279 3.987-4.262 1.716 0 3.536.974 3.48 2.216-.808-.79-1.686-.79-3.147-.79-1.462 0-2.216 1.46-2.216 2.836" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m11 7.3-.927 1.353.045-1.64-1.545.55 1-1.3L8 5.8l1.573-.464-1-1.3 1.545.55-.045-1.64L11 4.3l.927-1.353-.045 1.64 1.545-.55-1 1.3L14 5.8l-1.573.464 1 1.3-1.545-.55.045 1.64z" clip-rule="evenodd"/></g><defs><clipPath id="fp_MY_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMY',
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
