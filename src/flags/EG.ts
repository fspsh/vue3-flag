import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_EG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_EG_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_EG_smb)"><path fill="#bf2714" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#c09302" d="m6.13 5.11.5.023-.126 2.735-.5-.023zM6.652 5.28l.5.028-.126 2.218-.5-.028z"/><path fill="#c09302" d="m7.174 5.446.499.04-.126 1.529-.498-.041zM9.87 5.11l-.5.023.126 2.735.5-.023zM9.348 5.28l-.5.028.126 2.218.5-.028z"/><path fill="#c09302" d="m8.826 5.446-.499.04.126 1.529.498-.041zM7.987 7.663l-.488-.111.207-.9.487.111z"/><path fill="#c09302" d="m8.36 7.663.487-.111-.206-.9-.488.111z"/><path fill="#c09302" d="M8.236 7.655h-.5v-.884h.5zM7.317 5.457l.5.012-.029 1.19-.5-.012zM8.187 5.457l.5.012-.03 1.19-.5-.012z"/><path fill="#c09302" d="m6.669 7.961.13-.482c.53.142.938.213 1.215.213q.419 0 1.216-.213l.13.482c-.57.153-1.016.23-1.346.23q-.493 0-1.345-.23M6.141 5.111c-.033-.33.16-.554.488-.525.107.01.228.041.39.096l.092.032c.222.08.282.1.295.102-.05-.011.095-.273.128-.317.004.028-.012.024-.052.016l-.451-.09.32-.33a.59.59 0 0 1 .433-.171c.018 0 .034-.001.088-.005l.085-.004c.312-.01.536.078.536.399 0 .115.015.3.038.44.009.047.024.09-.022.11.002-.017.111-.06.281-.13l.02-.01c.494-.206.552-.225.711-.128.106.065.207.18.32.353l-.418.274a.9.9 0 0 0-.159-.198c.063.044-.149.114-.26.161l-.02.008c-.385.161-.436.18-.546.18-.299 0-.406-.306-.436-.745-.092.304-.367.687-.594.687-.1 0-.052.016-.464-.13l-.086-.03a1.4 1.4 0 0 0-.272-.072l.02-.02z"/></g></g><defs><clipPath id="fp_EG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_EG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_EG_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_EG_mdb)"><path fill="#bf2714" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#c09302" d="m7.663 6.388.624.028-.157 3.419-.624-.029zM8.315 6.6l.624.035-.157 2.772-.624-.035z"/><path fill="#c09302" d="m8.968 6.807.623.052-.157 1.91-.623-.052zM12.337 6.388l-.624.028.157 3.419.624-.029zM11.685 6.6l-.624.035.157 2.772.624-.035z"/><path fill="#c09302" d="m11.032 6.807-.623.052.157 1.91.623-.052zM9.983 9.58l-.609-.14.258-1.126.61.14z"/><path fill="#c09302" d="m10.45 9.58.609-.14-.258-1.126-.61.14z"/><path fill="#c09302" d="M10.295 9.569H9.67V8.464h.625zM9.147 6.82l.625.016-.037 1.488-.625-.015zM10.234 6.82l.624.016-.036 1.488-.625-.015z"/><path fill="#c09302" d="m8.336 9.952.163-.604q.996.268 1.52.267.521 0 1.519-.267l.162.604q-1.065.287-1.682.288-.616 0-1.682-.288M7.676 6.39c-.041-.414.2-.693.61-.658.135.012.286.052.487.12l.116.04c.277.1.353.125.368.128-.061-.014.12-.34.16-.396.006.035-.015.03-.065.02l-.564-.113.402-.411a.73.73 0 0 1 .54-.216c.022 0 .043 0 .11-.005l.107-.005c.39-.013.67.098.67.499 0 .143.017.374.047.549.01.059.03.114-.027.138.002-.02.138-.075.35-.164l.026-.01c.618-.258.69-.282.889-.16.132.08.258.225.4.44l-.523.343a1.1 1.1 0 0 0-.198-.248c.078.055-.187.143-.327.201l-.025.011c-.48.2-.544.225-.681.225-.374 0-.508-.383-.545-.932-.115.38-.46.86-.743.86-.124 0-.065.019-.58-.164l-.107-.038a1.7 1.7 0 0 0-.34-.089l.025-.024z"/></g></g><defs><clipPath id="fp_EG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_EG_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_EG_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_EG_lgb)"><path fill="#bf2714" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#c09302" d="m12.26 10.22 1 .046-.252 5.47-.998-.046zM13.304 10.56l.998.056-.25 4.436-.999-.057z"/><path fill="#c09302" d="m14.348 10.892.997.082-.25 3.056-.997-.082zM19.74 10.22l-1 .046.251 5.47 1-.046zM18.696 10.56l-.998.056.25 4.436.999-.057z"/><path fill="#c09302" d="m17.652 10.892-.997.082.25 3.056.997-.082zM15.973 15.327l-.975-.224.413-1.8.975.223z"/><path fill="#c09302" d="m16.72 15.327.974-.224-.412-1.8-.975.223z"/><path fill="#c09302" d="M16.472 15.31h-1v-1.768h1zM14.635 10.913l1 .025-.059 2.38-1-.024zM16.374 10.913l1 .025-.059 2.38-1-.024z"/><path fill="#c09302" d="m13.338 15.923.26-.966c1.06.285 1.875.427 2.43.427s1.371-.142 2.432-.427l.26.966c-1.139.306-2.031.46-2.691.46s-1.553-.154-2.691-.46M12.282 10.223c-.066-.66.32-1.108.975-1.051.216.019.458.082.78.192l.186.065c.443.157.563.198.588.203-.098-.022.191-.545.258-.633.007.056-.026.048-.106.032l-.902-.18.642-.66a1.17 1.17 0 0 1 .865-.344c.035 0 .068-.002.176-.008l.17-.009c.625-.02 1.072.156 1.072.798 0 .23.03.599.077.879.016.094.047.182-.045.221.004-.033.223-.12.563-.262l.04-.017c.988-.412 1.103-.45 1.422-.257.212.13.414.36.64.707l-.837.547c-.146-.223-.262-.358-.317-.396.125.088-.298.228-.522.322l-.04.017c-.77.321-.87.36-1.09.36-.599 0-.813-.613-.872-1.49-.185.607-.735 1.374-1.19 1.374-.198 0-.102.031-.927-.262l-.172-.06a2.7 2.7 0 0 0-.544-.143l.04-.04z"/></g></g><defs><clipPath id="fp_EG_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagEG',
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
