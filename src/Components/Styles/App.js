import * as Variables from './Variables'

export const appStyle = {
  color: Variables.colors.purple,
  backgroundColor: Variables.backgroundColor,
  fontFamily: Variables.fontFamily,
  fontWeight: Variables.fontLight,
  fontSize: Variables.defaultFontSize,
  lineHeight: Variables.defaultLineHeight,

  h1 {
    width: '100%',
    fontFamily: Variables.headerFontFamily,
    fontSize: '2.1em',
    fontWeight: Variables.fontBook,
    textAlign: 'center',
  }

  h2 {
    width: '100%',
    fontFamily: Variables.headerFontFamily,
    fontSize: '1.75em',
    fontWeight: Variables.fontBook,
    textAlign: 'center',
  }

  h3 {
    width: '100%',
    fontFamily: Variables.fontFamily,
    fontSize: '1.25em',
    fontWeight: Variables.fontBold,
    textAlign: 'center',
  }

  h4 {
    width: '100%',
    fontFamily: Variables.fontFamily,
    fontSize: '1em',
    fontWeight: Variables.fontBold,
    textAlign: 'center',
  }

  p {
    fontFamily: Variables.fontFamily,
    fontSize: '0.9em',
    fontWeight: Variables.fontBook,
  }

  a {
    textDecoration: 'none',
  }
}
