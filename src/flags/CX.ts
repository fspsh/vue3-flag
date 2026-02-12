import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CX_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#4141db" fill-rule="evenodd" d="m0 0 16 12H0z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="m3 4.5-.5.366.067-.616L2 4l.567-.25-.067-.616.5.366.5-.366-.067.616L4 4l-.567.25.067.616zM2 7.5l-.5.366.067-.616L1 7l.567-.25-.067-.616.5.366.5-.366-.067.616L3 7l-.567.25.067.616zM4 10.5l-.5.366.067-.616L3 10l.567-.25-.067-.616.5.366.5-.366-.067.616L5 10l-.567.25.067.616zM4.5 5.75l-.25.183.033-.308L4 5.5l.283-.125-.033-.308.25.183.25-.183-.033.308L5 5.5l-.283.125.033.308z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M10.78 6.112c-.186-.195 1.496-.653 1.67-1.244.231-.514.077-.931-.796-1.297s-1.756-1.074-.741-1.074c1.014 0 1.014.145 1.287.572s.862.518.874 0c0-.883.084-1.002-.63-1.77-.712-.767 1.788.316 1.581 1.631-.206 1.316-.455.892-.297 1.113s1.108-.465.99.448c-.333.526-.992 1.307-3.937 1.621" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M8 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" clip-rule="evenodd"/><path fill="#548650" fill-rule="evenodd" d="M6.476 5.081c.284-.063.672.696 1.372.411.7-.284.846-.828 1.178-.63.333.2.376.679.155.92-.222.24-.598.298-.598.602s-.073 1.39-.217 1.075c-.43-.35-.168-.906-.698-1.075-.531-.17-.853-.163-1.245-.092-.391.071.263-.196.402-.45.282-.272-.478-.67-.349-.761" clip-rule="evenodd"/></g><defs><clipPath id="fp_CX_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CX_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#4141db" fill-rule="evenodd" d="m0 0 20 15H0z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="m3.75 5.625-.625.458.084-.77L2.5 5l.709-.312-.084-.77.625.457.625-.458-.084.77L5 5l-.709.313.084.77zM2.5 9.375l-.625.458.084-.77-.709-.313.709-.312-.084-.77.625.457.625-.458-.084.77.709.313-.709.313.084.77zM5 13.125l-.625.457.084-.77-.709-.312.709-.312-.084-.77.625.457.625-.457-.084.77.709.312-.709.313.084.77zM5.625 7.188l-.312.228.041-.385L5 6.875l.354-.156-.042-.385.313.229.313-.23-.042.386.354.156-.354.156.042.385z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M13.476 7.64c-.234-.244 1.869-.816 2.086-1.555.29-.643.096-1.164-.995-1.621s-2.194-1.343-.926-1.343 1.268.181 1.609.715c.34.533 1.077.647 1.093 0 0-1.104.104-1.252-.787-2.212-.89-.96 2.234.394 1.976 2.04-.259 1.644-.57 1.113-.372 1.39.197.275 1.385-.582 1.237.56-.416.657-1.24 1.634-4.921 2.026" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M10 10.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25" clip-rule="evenodd"/><path fill="#548650" fill-rule="evenodd" d="M8.096 6.351c.354-.079.839.87 1.714.514.874-.356 1.057-1.035 1.473-.786.415.248.47.847.193 1.148s-.747.372-.747.753c0 .38-.092 1.737-.271 1.344-.539-.437-.21-1.133-.874-1.344-.663-.211-1.066-.204-1.555-.115-.49.089.329-.245.502-.562.353-.34-.597-.839-.435-.952" clip-rule="evenodd"/></g><defs><clipPath id="fp_CX_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CX_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5eaa22" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#4141db" fill-rule="evenodd" d="m0 0 32 24H0z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="m6 9-1 .732.134-1.232L4 8l1.134-.5L5 6.268 6 7l1-.732L6.866 7.5 8 8l-1.134.5L7 9.732zM4 15l-1 .732.134-1.232L2 14l1.134-.5L3 12.268 4 13l1-.732-.134 1.232L6 14l-1.134.5L5 15.732zM8 21l-1 .732.134-1.232L6 20l1.134-.5L7 18.268 8 19l1-.732-.134 1.232L10 20l-1.134.5L9 21.732zM9 11.5l-.5.366.067-.616L8 11l.567-.25-.067-.616.5.366.5-.366-.067.616L10 11l-.567.25.067.616z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M21.561 12.224c-.374-.39 2.99-1.306 3.339-2.488.462-1.029.153-1.862-1.593-2.594s-3.51-2.148-1.481-2.148 2.029.29 2.574 1.143c.545.854 1.724 1.036 1.749 0 0-1.766.166-2.003-1.26-3.538-1.425-1.536 3.575.63 3.162 3.262s-.91 1.782-.595 2.224 2.216-.93 1.979.897c-.665 1.051-1.984 2.614-7.874 3.242" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M16 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10" clip-rule="evenodd"/><path fill="#548650" fill-rule="evenodd" d="M12.953 10.162c.567-.126 1.343 1.392 2.742.823 1.4-.57 1.692-1.657 2.357-1.26.666.399.753 1.357.31 1.838s-1.195.596-1.195 1.205-.148 2.78-.435 2.15c-.861-.699-.336-1.812-1.397-2.15s-1.706-.327-2.489-.184.526-.392.804-.9c.565-.543-.956-1.341-.697-1.522" clip-rule="evenodd"/></g><defs><clipPath id="fp_CX_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCX',
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
