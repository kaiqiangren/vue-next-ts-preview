module.exports = {
  "plugins": {
    "autoprefixer": {},
    "postcss-import": {},
    "postcss-url": {},
    "postcss-write-svg": {
      utf8: false
    },
    // 官方说明文档 https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md
    "postcss-px-to-viewport": {
      viewportWidth: 375,     // (Number) UI设计图的宽度.
      viewportHeight: 605,    // (Number)UI设计图的高度，一般可以不设置.
      unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw',     // (String) Expected units.
      selectorBlackList: [],  // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1,       // (Number) 设置要替换的最小像素值.
      mediaQuery: false       // (Boolean) 允许在媒体查询中转换px
    }
  }
}
