# shuhe_admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 备注
modules/em-ui 组件库

main.js 
==> ../modules/em-ui 
==> index.js 
==> EmButton.install = Vue => Vue.component(Button.name, Button) 
==> Button/index.vue


```js
// 全部导入组件
import emui from '../modules/em-ui'
app.use(emui)
```

```js
// 按需导入组件
import { EmButton } from '../modules/em-ui'
app.use(EmButton)

// types
// ["primary", "info", "default", "danger", "warning"]
```

