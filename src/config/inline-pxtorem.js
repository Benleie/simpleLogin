const loaderUtils = require('loader-utils')
// 默认参数
let defaultsProp = {
  unitToConvert: 'px',
  rootValue: 16, 
  unitPrecision: 5,
  minPixelValue: 1
}
const template = /<template>([\s\S]+)<\/template>/gi
const ZPXRegExp = /(\d+)px/

module.exports = function (source) {
  const opts = loaderUtils.getOptions(this)
  const defaults = Object.assign({}, defaultsProp, opts)
  let _source = ''
  if (template.test(source)) {
    _source = source.match(template)[0]
  }
  let pxGlobalRegExp = new RegExp(ZPXRegExp.source, 'ig')
  if (pxGlobalRegExp.test(_source)) {
    let $_source = _source.replace(pxGlobalRegExp, createPxReplace(defaults.rootValue, defaults.minPixelValue, defaults.unitPrecision))
    return source.replace(template, $_source)
  } else {
    return source
  }
}

function createPxReplace (rootValue, minPixelValue, unitPrecision) {
  return function ($0, $1) {
    if (!$1) return $0
    const pixels = parseFloat($1)
    if (pixels < minPixelValue) return $0
    // console.log("pixels: " + pixels)
    const fixedVal = toFixed((pixels / rootValue), unitPrecision)
    // console.log(fixedVal)
    return  fixedVal === 0 ? "0" : fixedVal + "rem"
  }
}

function toFixed (number, precision) {
  var multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier)
  return Math.round(wholeNumber / 10) * 10 / multiplier
}