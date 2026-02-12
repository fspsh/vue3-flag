import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CA_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M4 0h8.5v12H4z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M7.164 4.201 7.987 3 8 10h-.343l.21-1.732s-2.305.423-2.115.21c.191-.214.3-.606.3-.606L4 6.474s.324-.004.587-.164c.264-.16-.263-1.109-.263-1.109l1.036.154.392-.435.782.836h.352l-.352-1.914zM8 10V3l.836 1.201.63-.359-.352 1.914h.352l.782-.836.392.435 1.036-.154s-.527.949-.263 1.109c.263.16.587.164.587.164L9.947 7.872s.11.392.3.606c.191.213-2.115-.21-2.115-.21L8.342 10zM12 0h4v12h-4zM0 0h4v12H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CA_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CA_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M5 0h10v15H5z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M8.956 5.252 9.983 3.75 10 12.5h-.428l.263-2.165s-2.883.529-2.644.262.375-.757.375-.757L5 8.092s.405-.005.734-.205c.33-.2-.33-1.385-.33-1.385l1.296.192.49-.544.978 1.045h.44l-.44-2.392zM10 12.5V3.75l1.044 1.502.788-.45-.44 2.393h.44l.977-1.045.49.544 1.296-.192s-.658 1.185-.33 1.385c.33.2.735.205.735.205L12.434 9.84s.137.49.376.757c.238.267-2.645-.262-2.645-.262l.263 2.165zM15 0h5v15h-5zM0 0h5v15H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CA_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CA_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M8 0h16v24H8z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M15.976 7 16 19h-.6l.368-2.97q-4.035.726-3.701.36.333-.366.525-1.038L9 12.955q.567-.006 1.028-.281.46-.274-.461-1.9l1.813.264.687-.746 1.368 1.432h.615l-.615-3.28 1.103.615zm0 0 1.486 2.06 1.103-.617-.615 3.281h.615l1.368-1.432.686.746 1.814-.264q-.922 1.626-.46 1.9.461.275 1.027.281l-3.593 2.397q.193.672.526 1.038.334.366-3.701-.36l.367 2.97H16zM24 0h8v24h-8zM0 0h8v24H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CA_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCA',
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
