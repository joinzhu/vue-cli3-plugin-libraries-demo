# vue-cli-plugin-yunlsp-ui
## 介绍
packages/index.js: 多组件打包入口

## 使用
1. public/index.html: 引入dist中的umd.js或umd.min.js，css文件
2. webpack需要将通过cdn引入的组件配置成外部引入，详见vue.config.js

## 本地运行使用demo
```
npm run serve
```

### 打包库（单个组件作为入口）
```
npm run lib
```

### 打包库（多个组件合并打包，js作为入口）
```
npm run libMultiple
```
参考文档：https://cli.vuejs.org/zh/guide/build-targets.html
