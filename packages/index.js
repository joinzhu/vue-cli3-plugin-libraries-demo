let components = {}

const requireComponents = require.context('../components', true, /\.vue/)

requireComponents.keys().forEach(fileName => {
    // 组件实例
    const reqCom = requireComponents(fileName)
    // 截取路径作为组件名
    const reqComName = fileName.split('/')[1].split('.')[0]
    // 组件添加到将暴露的对象中
    components[reqComName] = reqCom.default || reqCom
})

export default components