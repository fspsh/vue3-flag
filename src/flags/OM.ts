import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_OM_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f50101" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_OM_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_OM_smb)"><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#f50101" d="M0 0h6v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M5.385 1.016C5.39.971 5.332.953 5.308.993a19 19 0 0 1-1.385 2v-.459c-.07-.077-.299-.286-.299-.286V1.79l.412-.373L3.471 1l-.597.417.451.373v.458c0 .22-.273.286-.273.286l-.05.404a19 19 0 0 1-1.315-1.924c-.023-.041-.083-.022-.076.025.055.368.221 1.186.68 2.06h-.123v-.017a.043.043 0 0 0-.044-.044H1.07a.043.043 0 0 0-.043.044v.663c0 .024.02.043.043.043h1.054c.024 0 .044-.019.044-.043v-.348H2.3a.3.3 0 0 0 .27.18q.126.196.275.388c-.229-.023-1.74-.151-1.74.398 0 .328.368.502.829.592L.83 5.952c-.033.03-.007.08.036.07a7.1 7.1 0 0 0 2.2-.977h.029c.253 0 .429-.11.55-.258.914.745 1.947 1.09 2.396 1.213.046.013.071-.047.032-.075A13.6 13.6 0 0 1 4.048 4.18l.022-.026q.256-.304.45-.619a.3.3 0 0 0 .124-.138h.133v.348c0 .024.02.043.043.043h1.054c.024 0 .044-.019.044-.043v-.663a.043.043 0 0 0-.044-.044H4.82a.04.04 0 0 0-.029.012 6.2 6.2 0 0 0 .594-2.034m-.608 2.082v-.02l-.01.02zM2.82 3.28c0 .134-.11.242-.244.242a.243.243 0 0 1-.245-.242c0-.133.11-.242.245-.242s.244.109.244.242m1.304 0c0 .134.11.242.245.242a.243.243 0 0 0 .245-.242.243.243 0 0 0-.245-.242.243.243 0 0 0-.245.242" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_OM_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_OM_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f50101" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_OM_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_OM_mdb)"><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#f50101" d="M0 0h7.5v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M6.731 1.27c.006-.056-.067-.078-.096-.029a24 24 0 0 1-1.73 2.5v-.573c-.09-.097-.375-.358-.375-.358v-.573l.515-.466-.707-.521-.745.521.563.466v.573c0 .274-.341.358-.341.358l-.063.505A23 23 0 0 1 2.11 1.267c-.03-.05-.104-.027-.095.031.069.461.276 1.483.85 2.575H2.71v-.02a.054.054 0 0 0-.054-.055H1.338a.054.054 0 0 0-.055.054v.83c0 .03.025.054.055.054h1.318c.03 0 .054-.025.054-.055v-.435h.166c.056.13.185.221.337.224q.158.245.344.486c-.286-.028-2.174-.189-2.174.498 0 .41.46.627 1.035.74-.58.525-1.127 1.019-1.38 1.246-.04.037-.008.1.045.087.45-.111 1.63-.455 2.752-1.22h.035a.85.85 0 0 0 .688-.323C5.7 6.915 6.991 7.346 7.552 7.5c.058.016.09-.06.04-.094A17 17 0 0 1 5.06 5.225l.028-.033q.32-.38.563-.773c.068-.04.122-.1.154-.173h.166v.435c0 .03.024.055.054.055h1.318c.03 0 .054-.025.054-.055v-.829a.054.054 0 0 0-.054-.054H6.025a.05.05 0 0 0-.036.014 7.7 7.7 0 0 0 .742-2.541m-.76 2.603v-.025l-.013.025zM3.525 4.1a.304.304 0 0 1-.306.302.304.304 0 0 1-.305-.302c0-.167.137-.303.305-.303.17 0 .306.136.306.303m1.63 0c0 .167.137.302.306.302a.304.304 0 0 0 .306-.302.304.304 0 0 0-.306-.303.304.304 0 0 0-.305.303" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_OM_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_OM_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f50101" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_OM_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_OM_lgb)"><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#f50101" d="M0 0h12v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M10.77 2.033c.01-.091-.107-.126-.153-.047-.363.616-1.273 2.082-2.77 4v-.918c-.143-.155-.598-.572-.598-.572v-.917l.824-.745L6.94 2l-1.192.834.901.745v.917c0 .44-.546.572-.546.572l-.1.809c-1.393-1.809-2.262-3.22-2.63-3.85-.047-.081-.166-.043-.152.05.11.738.443 2.373 1.36 4.12h-.246v-.033a.087.087 0 0 0-.087-.087H2.14a.087.087 0 0 0-.087.087V7.49c0 .048.04.087.087.087H4.25a.087.087 0 0 0 .087-.087v-.696H4.6c.09.208.297.354.54.358q.253.39.55.778c-.457-.046-3.478-.303-3.478.796 0 .657.735 1.004 1.656 1.183l-2.207 1.995c-.065.059-.014.161.072.14.72-.178 2.606-.729 4.402-1.954h.055c.506 0 .858-.22 1.102-.516 1.827 1.49 3.893 2.18 4.79 2.426.094.026.144-.095.065-.15a27 27 0 0 1-4.052-3.49l.044-.052c.343-.404.642-.82.902-1.238a.6.6 0 0 0 .246-.276h.265v.696c0 .048.04.087.087.087h2.109a.087.087 0 0 0 .087-.087V6.164a.087.087 0 0 0-.087-.087H9.64a.1.1 0 0 0-.058.022 12.4 12.4 0 0 0 1.188-4.066M9.553 6.196v-.039l-.02.04zm-3.913.365a.487.487 0 0 1-.489.484.487.487 0 0 1-.489-.484c0-.267.219-.484.49-.484.27 0 .488.217.488.484m2.609 0c0 .267.219.484.49.484.27 0 .488-.217.488-.484a.487.487 0 0 0-.489-.484c-.27 0-.49.217-.49.484" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_OM_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagOM',
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
