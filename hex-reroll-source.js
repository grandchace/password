
function sumDigitsFromString(str) {  var nums = [];
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      nums.push(Number(str[i]));
    }
  }
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}


function hexLoop() {
    eval("var hex = rgbToHex" + document.getElementsByClassName("rand-color")[0].style.backgroundColor.slice(3) + ";");
if (sumDigitsFromString(hex) != hexGoal) {
    document.getElementsByClassName('refresh')[0].click();
setTimeout(function() {
    hexLoop();
}, 1);
} else {alert(hex)}
}
hexGoal = window.prompt("How much the numbers sum up to in the hex code. Enter nothing or press cancel to stop trying.")
if (hexGoal == null || hexGoal === '') {
    hexLoop() = function(){};
} else {
    document.getElementsByClassName('refresh')[0].click();
    hexLoop()
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


