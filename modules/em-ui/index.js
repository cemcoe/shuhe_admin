import Button from './Button'

/** 按需加载 */
export const EmButton = {}
EmButton.install = Vue => Vue.component(Button.name, Button)
/** 按需加载 */



const COMPONENTS = [
  Button,
]

const emui = {}

emui.install = function (Vue) {
  COMPONENTS.forEach(component => {
    Vue.component(component.name, component)
  })
}


export default emui


