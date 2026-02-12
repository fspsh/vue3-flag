import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_LS_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#55ba07" fill-rule="evenodd" d="M0 8h16v4H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 4h16v4H0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h16v4H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M7.625 4.12c-.261.07-.4.25-.4.57 0 .366.18.708.4.885zm.625 1.445c.214-.179.386-.515.386-.874 0-.31-.136-.49-.386-.564zm-.021-1.699c.41.091.705.37.705.823 0 .329-.156.73-.4 1.004l1.218 1.193.3-.098.448.68S9.367 8 7.967 8 5.5 7.467 5.5 7.467l.382-.58.308.1 1.129-1.273c-.254-.275-.418-.688-.418-1.025 0-.47.317-.751.749-.832a.313.313 0 0 1 .579.01" clip-rule="evenodd"/></g><defs><clipPath id="fp_LS_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_LS_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#55ba07" fill-rule="evenodd" d="M0 10h20v5H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 5h20v5H0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h20v5H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M9.531 5.15c-.326.088-.499.314-.499.713 0 .457.224.885.5 1.106zm.781 1.807c.268-.224.483-.645.483-1.093 0-.388-.17-.612-.482-.706zm-.026-2.124c.512.113.882.462.882 1.028 0 .411-.196.912-.5 1.255l1.522 1.492.375-.124.56.85S11.709 10 9.958 10s-3.083-.666-3.083-.666l.477-.726.385.126 1.411-1.592c-.316-.344-.522-.86-.522-1.281 0-.586.396-.94.936-1.04a.39.39 0 0 1 .724.012M7.501 8.935l-.158.22h.308zm.18.307-.272.055.273.095zm.14-.317.139.325.346-.094-.069-.13zm.752.649-.508-.1-.058-.098.383-.084zm.03-.466.158.284.347-.105-.097-.128zm.284.522-.062-.117.384-.103.222.27zm.718-.195.495-.13-.06-.113h-.644zm.177.25-.078-.121.475-.156.253.278zm.602-.484.152.186.412-.143-.052-.097zm.894.387-.554.061-.081-.137.418-.138zm-.035-.477.155.19.372-.19-.104-.058zm.321.426-.067-.103.354-.213.18.213zm.351-.593.225.214.219-.214-.07-.088zm.357.287.183-.18.131.18-.314.102z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LS_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_LS_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#55ba07" fill-rule="evenodd" d="M0 16h32v8H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 8h32v8H0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h32v8H0z" clip-rule="evenodd"/><path fill="#1d1d1d" fill-rule="evenodd" d="M15.25 8.24c-.523.14-.799.502-.799 1.141 0 .73.359 1.416.799 1.77zm1.25 2.89c.428-.357.772-1.03.772-1.747 0-.62-.272-.98-.772-1.13zm-.042-3.398c.818.182 1.41.74 1.41 1.645 0 .659-.313 1.46-.798 2.009l2.433 2.387.6-.198.897 1.36S18.734 16 15.933 16C13.133 16 11 14.935 11 14.935l.763-1.162.617.202 2.257-2.548c-.507-.55-.836-1.375-.836-2.05 0-.938.635-1.502 1.498-1.663a.625.625 0 0 1 1.159.018m-4.456 6.564-.254.353h.494zm.289.492-.436.088.436.152zm.222-.508.223.52.553-.15-.11-.21zm1.204 1.038-.813-.16-.093-.157.613-.133zm.047-.745.253.455.555-.17-.154-.203zm.456.836-.1-.188.615-.165.354.433zm1.148-.312.792-.21-.098-.18h-1.028zm.284.4-.126-.195.76-.249.404.444zm.963-.776.243.298.659-.228-.083-.156zm1.43.62-.886.098-.13-.22.67-.22zm-.057-.764.249.305.594-.305-.165-.092zm.515.682-.108-.165.566-.34.288.34zm.562-.95.36.344.349-.343-.11-.14zm.57.461.292-.29.211.29-.504.162z" clip-rule="evenodd"/></g><defs><clipPath id="fp_LS_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagLS',
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
