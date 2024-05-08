function hexLoop() {
    eval("var hex = rgbToHex" + document.getElementsByClassName("rand-color")[0].style.backgroundColor.slice(3) + ";");
if (/\d/.test(hex)) {
    document.getElementsByClassName('refresh')[0].click();
setTimeout(function() {
    hexLoop();
}, 1);
}
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


hexLoop()
