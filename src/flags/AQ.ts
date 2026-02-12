import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_AQ_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5196ed" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_AQ_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" filter="url(#fp_AQ_smc)" mask="url(#fp_AQ_smb)"><path fill="#fff" d="M4.359 3.947s1.032.566 1.175.723c.144.156.374.732.732.406.36-.325.718-.072.718-.59s.535-1.72 1.312-1.419 1.416.113 1.596.233c.179.12.61.719.944.719.335 0 .502.35.526.855.024.506-.107.555.203.615.311.06.43.29.276.59-.156.302-.144.17-.12.482.024.314-.31 2.161-1.34 2.342-1.028.18-2.002.084-1.74-.265.264-.35.628-.752.09-.836s-.877-.156-1.415-.012c-.538.145-1.1.374-1.435-.06s-.263-.747-.538-.952-.61-.168-.335-.566.502-.25.275-.562C5.056 5.336 4.2 5.2 4.2 4.887c0-.314-.546-1 .16-.94"/><path fill="#f5f8fb" d="M4.359 3.947s1.032.566 1.175.723c.144.156.374.732.732.406.36-.325.718-.072.718-.59s.535-1.72 1.312-1.419 1.416.113 1.596.233c.179.12.61.719.944.719.335 0 .502.35.526.855.024.506-.107.555.203.615.311.06.43.29.276.59-.156.302-.144.17-.12.482.024.314-.31 2.161-1.34 2.342-1.028.18-2.002.084-1.74-.265.264-.35.628-.752.09-.836s-.877-.156-1.415-.012c-.538.145-1.1.374-1.435-.06s-.263-.747-.538-.952-.61-.168-.335-.566.502-.25.275-.562C5.056 5.336 4.2 5.2 4.2 4.887c0-.314-.546-1 .16-.94"/></g></g><defs><clipPath id="fp_AQ_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath><filter id="fp_AQ_smc" width="8.511" height="6.573" x="3.698" y="2.719" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation=".15"/><feColorMatrix values="0 0 0 0 0.0941176 0 0 0 0 0.32549 0 0 0 0 0.639216 0 0 0 0.43 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_270_54950"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_270_54950" result="shape"/></filter></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_AQ_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5196ed" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_AQ_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" filter="url(#fp_AQ_mdc)" mask="url(#fp_AQ_mdb)"><path fill="#fff" d="M5.448 4.934s1.29.707 1.47.903.467.915.915.508c.448-.406.897-.09.897-.738 0-.647.67-2.15 1.64-1.773.972.376 1.77.14 1.995.291.224.151.762.899 1.18.899.419 0 .628.436.658 1.069s-.135.693.254.768c.388.076.538.362.344.738-.195.377-.18.211-.15.603.03.391-.388 2.7-1.674 2.927-1.285.225-2.504.105-2.175-.332s.784-.94.112-1.045c-.673-.105-1.097-.195-1.77-.014-.672.18-1.374.467-1.793-.075-.418-.543-.328-.934-.672-1.19s-.763-.211-.419-.708.628-.311.344-.703-1.356-.562-1.356-.954-.681-1.25.2-1.174"/><path fill="#f5f8fb" d="M5.448 4.934s1.29.707 1.47.903.467.915.915.508c.448-.406.897-.09.897-.738 0-.647.67-2.15 1.64-1.773.972.376 1.77.14 1.995.291.224.151.762.899 1.18.899.419 0 .628.436.658 1.069s-.135.693.254.768c.388.076.538.362.344.738-.195.377-.18.211-.15.603.03.391-.388 2.7-1.674 2.927-1.285.225-2.504.105-2.175-.332s.784-.94.112-1.045c-.673-.105-1.097-.195-1.77-.014-.672.18-1.374.467-1.793-.075-.418-.543-.328-.934-.672-1.19s-.763-.211-.419-.708.628-.311.344-.703-1.356-.562-1.356-.954-.681-1.25.2-1.174"/></g></g><defs><clipPath id="fp_AQ_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath><filter id="fp_AQ_mdc" width="11.889" height="9.466" x="3.997" y="2.774" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation=".5"/><feColorMatrix values="0 0 0 0 0.0941176 0 0 0 0 0.32549 0 0 0 0 0.639216 0 0 0 0.43 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_270_61032"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_270_61032" result="shape"/></filter></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_AQ_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5196ed" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_AQ_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_AQ_lgb)"><path fill="#f5f8fb" fill-rule="evenodd" d="M8.717 7.894s2.064 1.132 2.352 1.445c.286.314.746 1.464 1.464.814.717-.65 1.435-.145 1.435-1.181s1.07-3.44 2.625-2.838c1.554.603 2.832.226 3.19.467.359.24 1.22 1.437 1.89 1.437s1.003.699 1.051 1.71c.048 1.013-.215 1.11.407 1.23s.86.579.55 1.18c-.31.603-.287.338-.24.965.049.626-.62 4.321-2.678 4.683-2.056.361-4.005.168-3.48-.53.527-.7 1.255-1.503.18-1.672-1.077-.169-1.755-.312-2.831-.023s-2.2.746-2.87-.12c-.67-.868-.526-1.495-1.076-1.905s-1.22-.337-.67-1.132 1.005-.498.55-1.125c-.454-.626-2.169-.9-2.169-1.525 0-.627-1.09-2 .32-1.88" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_AQ_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagAQ',
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
