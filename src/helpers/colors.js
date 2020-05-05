export const getHexColorLuminosity = hex => {
  const c = hex.substring(1)
  const rgb = parseInt(c, 16)
  const r = (rgb >> 16) & 0xff // extract red
  const g = (rgb >>  8) & 0xff // extract green
  const b = (rgb >>  0) & 0xff // extract blue
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
}
