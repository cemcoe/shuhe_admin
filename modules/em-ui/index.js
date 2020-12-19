import Button from './Button'
import Cell from './Cell/Cell'
import CellGroup from './Cell/CellGroup'

/** 按需加载 */
export const EmButton = {}
EmButton.install = Vue => Vue.component(Button.name, Button)


export const EmCell = {}
EmCell.install = Vue => Vue.component(Cell.name, Cell)

export const EmCellGroup = {}
EmCellGroup.install = Vue => Vue.component(CellGroup.name, CellGroup)
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


