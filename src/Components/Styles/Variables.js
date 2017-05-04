import Color from 'color'

export const defaultFontSize = 'calc(14px + (72 - 14) * (50vw + 50vh - 320px) / (5120 - 320) )'
export const defaultLineHeight = '1.35'

export const colors = {
  black: 'black',
  gray: 'gray',
  white: 'white',
  beige: '#F4ECD7',
  orange: '#F25C05',
  pink: '#93576B',
  tan: '#F2B47E',
  purple: '#4F4065',
  lightOrange: Color('#F25C05').lighten(0.3).string(),
  lightPink: Color('#93576B').lighten(0.3).string(),
  lightPurple: Color('#4F4065').lighten(0.3).string(),
}

export const fontXlight = '100'
export const fontLight = '200'
export const fontRegular = '400'
export const fontBook = '500'
export const fontBold = '700'
export const fontBlack = '900'

export const fontColor = colors.white
export const fontFamily = '"Source Sans Pro", sans-serif'
export const headerFontFamily = '"Source Serif Pro", serif'

export const backgroundColor = colors.black
