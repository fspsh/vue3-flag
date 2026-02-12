import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MN_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#4c67e8" fill-rule="evenodd" d="M5 0h6v12H5z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M11 0h5v12h-5zM0 0h6v12H0z" clip-rule="evenodd"/><path fill="#f8d000" fill-rule="evenodd" d="M3.007 3.442c-.507 0-.44-.494-.44-.494l.24-.518v.519c0 .066.091-.067.091-.228 0-.16.109-.401.109-.401l.007-.16a.5.5 0 0 0 .106.13l.03.03c.062.064.053.234.046.38-.007.134-.012.248.037.248.102 0 .095-.459.095-.459l.172.46s.014.493-.493.493m0-1.41c.013-.075.011.026.007.128a.2.2 0 0 1-.007-.128m.762 2.31a.74.74 0 0 1-.75.727.74.74 0 0 1-.75-.727c0-.401.336-.727.75-.727s.75.326.75.727m-1.884 1.36H1v4.286h.885zm3.115 0h-.885v4.286H5zm-2.885.037.863.534.972-.534zM2.978 10l-.863-.534H3.95zm-.863-3.553h1.808v.336H2.115zm1.808 2.497H2.115v.336h1.808zm-.885-.186c.51 0 .924-.4.924-.894s-.414-.895-.924-.895-.923.4-.923.895c0 .494.414.894.923.894m-1.036-4.15s.03.934.95.934c.921 0 1.07-.934 1.07-.934s-.356.572-1.01.572-1.01-.572-1.01-.572" clip-rule="evenodd"/></g><defs><clipPath id="fp_MN_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MN_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#4c67e8" fill-rule="evenodd" d="M6 0h8v15H6z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M13 0h7v15h-7zM0 0h8v15H0z" clip-rule="evenodd"/><path fill="#f8d000" fill-rule="evenodd" d="M3.759 4.303c-.634 0-.55-.617-.55-.617l.3-.649v.649c0 .083.114-.084.114-.285s.136-.501.136-.501l.009-.2a.6.6 0 0 0 .132.162l.036.038c.079.08.068.292.059.476-.008.167-.015.31.046.31.128 0 .119-.575.119-.575l.215.575s.017.617-.616.617m0-1.763c.016-.094.014.032.009.16a.27.27 0 0 1-.01-.16m.953 2.887c0 .502-.42.909-.938.909s-.937-.407-.937-.909c0-.501.42-.908.937-.908s.938.407.938.908m-2.356 1.7H1.25v5.358h1.106zm3.894 0H5.144v5.358H6.25zm-3.606.047 1.078.668 1.215-.668zM3.722 12.5l-1.078-.667h2.293zM2.644 8.06h2.26v.419h-2.26zm2.26 3.12h-2.26v.42h2.26zm-1.106-.232c.637 0 1.154-.501 1.154-1.119 0-.617-.517-1.118-1.154-1.118s-1.154.501-1.154 1.118.517 1.118 1.154 1.118M2.502 5.76s.039 1.167 1.19 1.167c1.15 0 1.335-1.167 1.335-1.167s-.445.715-1.262.715c-.818 0-1.263-.715-1.263-.715" clip-rule="evenodd"/></g><defs><clipPath id="fp_MN_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MN_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#4c67e8" fill-rule="evenodd" d="M10 0h12v24H10z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M22 0h10v24H22zM0 0h12v24H0z" clip-rule="evenodd"/><path fill="#f8d000" fill-rule="evenodd" d="M6.014 6.884c-1.013 0-.88-.987-.88-.987l.48-1.038v1.038c0 .133.182-.134.182-.455s.218-.802.218-.802.009-.161.015-.32c.034.082.104.152.21.26l.06.06c.124.128.108.468.093.762-.013.266-.025.495.073.495.206 0 .19-.919.19-.919l.346.919s.026.987-.987.987m0-2.82c.026-.15.022.051.015.256a.44.44 0 0 1-.015-.255m1.524 4.62c0 .802-.671 1.453-1.5 1.453-.828 0-1.5-.65-1.5-1.453s.672-1.454 1.5-1.454c.829 0 1.5.651 1.5 1.454m-3.769 2.72H2v8.572h1.77zm6.231 0H8.23v8.572H10zm-5.77.075 1.725 1.068L7.9 11.479zM5.956 20l-1.724-1.068h3.668zm-1.724-7.105h3.615v.67H4.231zm3.615 4.994H4.231v.67h3.615zm-1.77-.373c1.02 0 1.847-.8 1.847-1.789s-.826-1.789-1.846-1.789-1.846.801-1.846 1.79c0 .987.826 1.788 1.846 1.788m-2.073-8.3s.062 1.868 1.903 1.868 2.137-1.868 2.137-1.868-.712 1.144-2.02 1.144c-1.307 0-2.02-1.144-2.02-1.144" clip-rule="evenodd"/><path fill="#c51918" d="m6.359 13.972.082-.367c.412.451.6.704.511 1.118-.098.461-.617.975-1.219 1.399-.364.256-.587.949-.406 1.169l-.173.314c-.403-.49-.081-1.417.475-1.808.511-.36.868-.737.93-1.033.04-.194.117-.445-.2-.792"/><path fill="#c51918" fill-rule="evenodd" d="M6.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.376 15.65a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" clip-rule="evenodd"/></g><defs><clipPath id="fp_MN_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMN',
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
