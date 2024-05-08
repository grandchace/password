function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
eval("var hex = rgbToHex" + document.getElementsByClassName("rand-color")[0].style.backgroundColor.slice(3) + ";")
alert(hex)
