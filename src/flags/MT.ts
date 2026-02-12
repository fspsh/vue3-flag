import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><path fill="#fff" d="M0 0h16v12H0z"/><mask id="fp_MT_sma" fill="#fff"><path fill-rule="evenodd" d="M5 3H3v1.496a.5.5 0 0 0-.384.487V5H1v2h1.665A.5.5 0 0 0 3 7.27V9h2V7.276A.5.5 0 0 0 5.366 7H7V5H5.416v-.017A.5.5 0 0 0 5 4.49z" clip-rule="evenodd"/></mask><path fill="#a0a0a0" fill-rule="evenodd" d="M5 3H3v1.496a.5.5 0 0 0-.384.487V5H1v2h1.665A.5.5 0 0 0 3 7.27V9h2V7.276A.5.5 0 0 0 5.366 7H7V5H5.416v-.017A.5.5 0 0 0 5 4.49z" clip-rule="evenodd"/><path fill="#feca00" d="M3 3v-.5h-.5V3zm2 0h.5v-.5H5zM3 4.496l.115.487.385-.091v-.396zm-.384.487h-.5v.008zm0 .017v.5h.509l-.009-.508zM1 5v-.5H.5V5zm0 2H.5v.5H1zm1.665 0 .45-.218L2.98 6.5h-.314zM3 7.27h.5v-.396l-.385-.091zM3 9h-.5v.5H3zm2 0v.5h.5V9zm0-1.724-.084-.493-.416.07v.423zM5.366 7v-.5h-.313l-.137.282zM7 7v.5h.5V7zm0-2h.5v-.5H7zM5.416 5l-.5-.008-.009.508h.509zm0-.017.5.008v-.008zM5 4.49h-.5v.422l.416.07zM3 3.5h2v-1H3zm.5.996V3h-1v1.496zm-.384.487-.231-.973a1 1 0 0 0-.77.973zm0 .009v-.018l-1 .017v.017zM1 5.5h1.616v-1H1zM1.5 7V5h-1v2zm1.165-.5H1v1h1.665zm.45.283-.9.434c.129.267.373.468.67.539zM3.5 9V7.27h-1V9zM5 8.5H3v1h2zm-.5-1.224V9h1V7.276zm.584.493a1 1 0 0 0 .733-.551l-.9-.436zM7 6.5H5.366v1H7zM6.5 5v2h1V5zm-1.084.5H7v-1H5.416zm-.5-.526v.018l1 .016v-.017zm0 .009h1a1 1 0 0 0-.832-.986zM4.5 3v1.49h1V3z" mask="url(#fp_MT_sma)"/><path fill="#e31d1c" fill-rule="evenodd" d="M8 0h8v12H8z" clip-rule="evenodd"/><mask id="fp_MT_smb" width="8" height="12" x="8" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M8 0h8v12H8z" clip-rule="evenodd"/></mask></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><path fill="#fff" d="M0 0h20v15H0z"/><mask id="fp_MT_mda" fill="#fff"><path fill-rule="evenodd" d="M6.25 3.8h-2.5v1.87a.625.625 0 0 0-.48.63H1.25v2.5h2.082c.08.167.233.293.418.337V11.3h2.5V9.145a.63.63 0 0 0 .458-.345H8.75V6.3H6.77v-.022a.625.625 0 0 0-.52-.616z" clip-rule="evenodd"/></mask><path fill="#a0a0a0" fill-rule="evenodd" d="M6.25 3.8h-2.5v1.87a.625.625 0 0 0-.48.63H1.25v2.5h2.082c.08.167.233.293.418.337V11.3h2.5V9.145a.63.63 0 0 0 .458-.345H8.75V6.3H6.77v-.022a.625.625 0 0 0-.52-.616z" clip-rule="evenodd"/><path fill="#feca00" d="M3.75 3.8v-.625h-.625V3.8zm2.5 0h.625v-.625H6.25zm-2.5 1.87.144.608.481-.114V5.67zm-.48.63v.625h.647l-.022-.646zm-2.02 0v-.625H.625V6.3zm0 2.5H.625v.625h.625zm2.082 0 .562-.272-.17-.353h-.392zm.418.337h.625v-.494l-.48-.115zm0 2.163h-.625v.625h.625zm2.5 0v.625h.625V11.3zm0-2.155-.104-.617-.521.089v.528zm.458-.345v-.625h-.392l-.17.353zm2.042 0v.625h.625V8.8zm0-2.5h.625v-.625H8.75zm-1.98 0-.625-.021-.022.646h.646zm-.52-.638h-.625v.528l.52.089zm-2.5-1.237h2.5v-1.25h-2.5zm.625 1.245V3.8h-1.25v1.87zm-.48.608-.29-1.216c-.55.13-.96.625-.96 1.216zm0 0h-1.25v.043zm-2.645.647h2.02v-1.25H1.25zM1.875 8.8V6.3H.625v2.5zm1.457-.625H1.25v1.25h2.082zm.562.353-1.125.544c.161.333.466.585.837.673zm.481 2.772V9.137h-1.25V11.3zm1.875-.625h-2.5v1.25h2.5zm-.625-1.53V11.3h1.25V9.145zm.73.616a1.25 1.25 0 0 0 .916-.69l-1.126-.543zM8.75 8.175H6.708v1.25H8.75zM8.125 6.3v2.5h1.25V6.3zm-1.356.625H8.75v-1.25H6.77zm-.624-.647 1.25.043v-.043zm0 0h1.25c0-.619-.45-1.132-1.04-1.232zM5.626 3.8v1.862h1.25V3.8z" mask="url(#fp_MT_mda)"/><path fill="#e31d1c" fill-rule="evenodd" d="M10 0h10v15H10z" clip-rule="evenodd"/><mask id="fp_MT_mdb" width="10" height="15" x="10" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M10 0h10v15H10z" clip-rule="evenodd"/></mask></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><path fill="#fff" d="M0 0h32v24H0z"/><mask id="fp_MT_lga" fill="#fff"><path fill-rule="evenodd" d="M10 4H6v2.993A1 1 0 0 0 5.232 8H2v4h3.33c.13.267.375.469.67.539V16h4v-3.449c.324-.054.594-.265.733-.551H14V8h-3.169v-.034A1 1 0 0 0 10 6.98z" clip-rule="evenodd"/></mask><path fill="#a0a0a0" fill-rule="evenodd" d="M10 4H6v2.993A1 1 0 0 0 5.232 8H2v4h3.33c.13.267.375.469.67.539V16h4v-3.449c.324-.054.594-.265.733-.551H14V8h-3.169v-.034A1 1 0 0 0 10 6.98z" clip-rule="evenodd"/><path fill="#feca00" d="M6 4V3H5v1zm4 0h1V3h-1zM6 6.993l.23.973.77-.183v-.79zM5.232 8v1h1.035l-.035-1.034zM2 8V7H1v1zm0 4H1v1h1zm3.33 0 .901-.435L5.958 11h-.627zm.67.539h1v-.791l-.77-.182zM6 16H5v1h1zm4 0v1h1v-1zm0-3.449-.167-.985-.833.14v.845zm.733-.551v-1h-.628l-.273.565zM14 12v1h1v-1zm0-4h1V7h-1zm-3.169 0-1-.034L9.798 9h1.034zM10 6.98H9v.844l.833.142zM6 5h4V3H6zm1 1.993V4H5v2.993zm-.768.973H6.23L5.769 6.02a2 2 0 0 0-1.537 1.946zm0 0h-2v.068zM2 9h3.232V7H2zm1 3V8H1v4zm2.33-1H2v2h3.33zm.9.566.001-.001-1.8.87c.257.534.745.936 1.338 1.077zM7 16v-3.461H5V16zm3-1H6v2h4zm-1-2.449V16h2v-3.449zm1.167.986c.65-.11 1.19-.531 1.466-1.102l-1.8-.87zM14 11h-3.267v2H14zm-1-3v4h2V8zm-2.169 1H14V7h-3.169zm-1-1.034 2 .068v-.068zm.002 0q-.004-.002-.001 0 0-.003 0 0h2a2 2 0 0 0-1.665-1.972zM9 4v2.98h2V4z" mask="url(#fp_MT_lga)"/><path fill="#e31d1c" fill-rule="evenodd" d="M16 0h16v24H16z" clip-rule="evenodd"/><mask id="fp_MT_lgb" width="16" height="24" x="16" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M16 0h16v24H16z" clip-rule="evenodd"/></mask></svg>`
} as const

export default defineComponent({
  name: 'FlagMT',
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
