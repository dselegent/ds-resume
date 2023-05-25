interface IGlobalStyle {
  themeColor: string // 主题色
  firstTitleFontSize: string // 一级标题
  secondTitleFontSize: string // 二级标题
  textFontSize: string // 正文
  secondTitleColor: string // 二级标题字体颜色
  textFontColor: string // 正文字体颜色
  secondTitleWeight: number // 二级标题字体粗细
  textFontWeight: number // 正文字体粗细
  paddingTop: number // 上内边距
  paddingBottom: number // 下内边距
  paddingLeftRight: number // 左右内边距
  modelMarginTop: number
  modelMarginBottom: number
  leftWidth: string // 左右布局时左侧宽度
  rightWidth: string // 左右布局时右侧宽度
  leftThemeColor: string // 左侧布局时左侧背景色
  rightThemeColor: string // 右侧布局时右侧背景色
  fontFamily: string // 字体
}
export default IGlobalStyle
