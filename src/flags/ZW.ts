import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_ZW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_ZW_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_ZW_smb)"><path fill="#feca00" fill-rule="evenodd" d="M0 1v10h16V1z" clip-rule="evenodd"/><path fill="#272727" stroke="#e31d1c" stroke-width="1.75" d="M0 4.125h-.875v3.75h17.75v-3.75H0Z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 2V0h16v2zm0 10v-2h16v2z" clip-rule="evenodd"/></g><path fill="#f7fcff" stroke="#272727" d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406z"/><mask id="fp_ZW_smc" width="11" height="16" x="-1" y="-2" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" stroke="#fff" d="M.298-.401-.5-.995V12.98l.794-.575L8.459 6.48l.551-.4-.546-.406z"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_ZW_smc)"><path fill="#e31d1c" d="M3.74 7.14 1.85 8.663l.866-2.038-1.489-1.434h1.758l.721-1.73.766 1.73h1.755L4.66 6.626l.785 2.038z"/><path fill="#feca00" d="M2.509 4.21s-.028-.065.134-.124.212-.182.339-.091c.126.091.206-.092.242.17.037.264.137.678.137.678L5.005 6.08h-.309s-.48.706-.402 1.326c0 0-.331-.05-.781-.05s-.744.108-.744.108l-.26-.962s.094-.162.134-.292.208-.154.208-.258-.165-.19-.082-.459c.082-.268.082-1.07.082-1.07s-.26-.115-.208-.115.174-.096.087-.096z"/></g></g><defs><clipPath id="fp_ZW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_ZW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_ZW_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_ZW_mdb)"><path fill="#feca00" fill-rule="evenodd" d="M0 1.25v12.5h20V1.25z" clip-rule="evenodd"/><path fill="#272727" stroke="#e31d1c" stroke-width="2.188" d="M0 5.156h-1.094v4.688h22.188V5.156H0Z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 2.5V0h20v2.5zM0 15v-2.5h20V15z" clip-rule="evenodd"/></g><path fill="#f7fcff" stroke="#272727" stroke-width="1.25" d="m.373-.501-.998-.743v17.47l.992-.72L10.574 8.1l.689-.5-.683-.507z"/><mask id="fp_ZW_mdc" width="15" height="21" x="-2" y="-3" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" stroke="#fff" stroke-width="1.25" d="m.373-.501-.998-.743v17.47l.992-.72L10.574 8.1l.689-.5-.683-.507z"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_ZW_mdc)"><path fill="#e31d1c" d="M4.674 8.924 2.312 10.83l1.084-2.547L1.534 6.49h2.197l.902-2.162.958 2.162h2.193l-1.96 1.793.981 2.547z"/><path fill="#feca00" d="M3.136 5.263s-.034-.082.168-.155.264-.228.423-.114.258-.115.303.213c.046.329.171.847.171.847l2.055 1.544H5.87s-.601.884-.502 1.658c0 0-.415-.063-.977-.063s-.93.135-.93.135l-.325-1.202s.118-.202.168-.365.26-.193.26-.322c0-.13-.207-.238-.103-.574.103-.335.103-1.338.103-1.338s-.326-.143-.26-.143.218-.12.109-.12z"/></g></g><defs><clipPath id="fp_ZW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_ZW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_ZW_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_ZW_lgb)"><path fill="#feca00" fill-rule="evenodd" d="M0 2v20h32V2z" clip-rule="evenodd"/><path fill="#272727" stroke="#e31d1c" stroke-width="3.5" d="M0 8.25h-1.75v7.5h35.5v-7.5H0Z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 4V0h32v4zm0 20v-4h32v4z" clip-rule="evenodd"/></g><path fill="#f7fcff" stroke="#272727" stroke-width="2" d="M.597-.802-1-1.991V25.96l1.587-1.15L16.918 12.96l1.102-.799-1.092-.812z"/><mask id="fp_ZW_lgc" width="22" height="32" x="-2" y="-4" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" stroke="#fff" stroke-width="2" d="M.597-.802-1-1.991V25.96l1.587-1.15L16.918 12.96l1.102-.799-1.092-.812z"/></mask><g mask="url(#fp_ZW_lgc)"><path fill="#e31d1c" fill-rule="evenodd" d="M7.478 14.278 3.7 17.328l1.733-4.076-2.979-2.868H5.97l1.443-3.459 1.532 3.459h3.51l-3.136 2.868 1.57 4.077z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M5.018 8.422s-.055-.133.269-.25c.323-.117.422-.364.676-.182s.413-.184.485.342c.073.525.274 1.355.274 1.355l3.288 2.47h-.618s-.962 1.413-.803 2.653c0 0-.664-.1-1.563-.1-.9 0-1.489.215-1.489.215l-.52-1.924s.189-.323.27-.583c.08-.26.415-.309.415-.516s-.33-.38-.165-.917.165-2.14.165-2.14-.522-.23-.415-.23c.106 0 .348-.193.174-.193z" clip-rule="evenodd"/><path stroke="#0a0a0a" stroke-width=".25" d="m6.722 9.687-.121.029.01.044.036.027 2.988 2.245h-.309l-.037.055.103.07-.103-.07-.001.001-.003.004-.008.013-.032.049a6.29 6.29 0 0 0-.43.815c-.204.473-.4 1.093-.365 1.697a12.662 12.662 0 0 0-1.424-.082c-.46 0-.84.056-1.107.11a4 4 0 0 0-.295.073l-.472-1.749.006-.011q.03-.054.075-.143c.058-.116.13-.269.173-.41.027-.085.095-.14.194-.214l.003-.002c.044-.034.098-.074.14-.123a.32.32 0 0 0 .084-.213.46.46 0 0 0-.063-.214l-.036-.064a1 1 0 0 1-.056-.109c-.051-.111-.088-.257-.015-.493.045-.147.077-.358.1-.585.023-.23.04-.483.05-.718a23 23 0 0 0 .02-.804v-.07h-.125.125v-.083l-.074-.032-.002-.001-.004-.002-.016-.007-.057-.026-.135-.063a.5.5 0 0 0 .075-.079.2.2 0 0 0 .033-.101.15.15 0 0 0-.08-.131.2.2 0 0 0-.106-.023h-.149l.017-.007c.093-.034.168-.076.23-.115l.072-.046c.03-.02.054-.036.08-.05.04-.023.065-.03.083-.029.017 0 .047.006.096.041a.46.46 0 0 0 .387.066c.012.02.031.072.048.192.037.268.106.61.165.884a25 25 0 0 0 .102.446l.006.027.002.008v.002z"/></g></g><defs><clipPath id="fp_ZW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagZW',
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
