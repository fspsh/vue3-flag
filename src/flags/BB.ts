import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BB_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M11 0h5v12h-5z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M5 0h6v12H5z" clip-rule="evenodd"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h5v12H0z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M9.217 7.637c.317-.655.681-1.85.681-1.85l.277-.822-1.097.398.26.15s-.453.906-.681 1.348-.25.15-.25.15l.038-3.085.252-.068-.628-1.206-.8 1.223.352.01s-.029 3.253-.078 3.126c-.027-.073-.1.151-.136.064-.222-.545-.526-1.601-.526-1.601l.178-.167-1.195-.245.357.734s.314 1.308.66 1.947c.077.202.453.288.453.288s.183-.186.229 0c.045.186 0 .938 0 .938h.843s-.059-.71 0-.938c.06-.228.244 0 .244 0s.49-.192.567-.394" clip-rule="evenodd"/></g><defs><clipPath id="fp_BB_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BB_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M14 0h6v15h-6z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M6 0h8v15H6z" clip-rule="evenodd"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h6v15H0z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M11.521 9.546c.396-.818.852-2.311.852-2.311l.346-1.028-1.372.497.325.188s-.566 1.131-.85 1.684c-.286.552-.314.187-.314.187l.049-3.855.315-.086-.785-1.507-1.001 1.528.44.012S9.49 8.923 9.43 8.763c-.034-.09-.125.19-.17.081-.278-.681-.658-2.002-.658-2.002l.222-.208-1.492-.307.445.918s.393 1.635.825 2.434c.097.252.566.36.566.36s.23-.233.286 0c.057.233 0 1.172 0 1.172h1.055s-.074-.886 0-1.172.304 0 .304 0 .612-.24.71-.493" clip-rule="evenodd"/></g><defs><clipPath id="fp_BB_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BB_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M22 0h10v24H22z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M10 0h12v24H10z" clip-rule="evenodd"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0h10v24H0z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M18.612 15.668c.188-1.29 1.52-4.093 1.52-4.093l.619-1.644-2.45.795.58.301-1.135 3.199-.856-.205V7.853l.677-.05-1.672-2.431-1.632 2.48h.787v6.17l-.965.16-.688-3.234.397-.333-2.665-.492.796 1.469s1.07 2.516 1.472 4.076l1.653-.128v2.398h1.84V15.54z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BB_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBB',
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
