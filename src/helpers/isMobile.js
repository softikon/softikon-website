export const isAndroid = function() {
    return navigator.userAgent.match(/Android/i)
}
export const isBlackBerry = function() {
    return navigator.userAgent.match(/BlackBerry/i)
}
export const isiOS = function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
}
export const isOpera = function() {
    return navigator.userAgent.match(/Opera Mini/i)
}
export const isWindows = function() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
}
export const isMobile = function() {
    return isAndroid() || isBlackBerry() || isiOS() || isOpera() || isWindows()
}
