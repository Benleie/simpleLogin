module.exports = {
    "plugins": {
        "postcss-pxtorem": {
            // rootValue: 16, // 根据设计图尺寸写，设计图是1920，就写192
            minPixelValue: 1,
            propList: ['*'], // 需要被转换的属性
            selectorBlackList: [] // 不进行px转换的选择器
        }
    }
}
