document.getElementsByClassName('refresh')[0].click();
function sumDigitsFromString(str) {
  var nums = [];
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
if (sumDigitsFromString(hex) != 0) {
    document.getElementsByClassName('refresh')[0].click();
setTimeout(function() {
    hexLoop();
}, 1);
}
}

hexGoal = input("How much the numbers sum up to in the hex code. Enter nothing or press cancel to stop trying.")
if (wanted_captcha == null || wanted_captcha === '') {
hexLoop() = function(){};
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


hexLoop()
eval("var hex = rgbToHex" + document.getElementsByClassName("rand-color")[0].style.backgroundColor.slice(3) + ";");
alert(hex);





EXPERIMENT: 




function sumDigitsFromString(str) {
  var nums = [];
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
if (sumDigitsFromString(hex) != 0) {
    document.getElementsByClassName('refresh')[0].click();
setTimeout(function() {
    hexLoop();
}, 1);
} else {alert(hex)}
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


hexLoop()
