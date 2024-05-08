function captchaLoop() {
document.getElementsByClassName('captcha-refresh')[0].click();
setTimeout(function() {
captcha_url = document.getElementsByClassName("captcha-img")[0].src
if (wanted_captcha != (captcha_url.slice((captcha_url.indexOf('captchas/')+9), (captcha_url.indexOf('captchas/')+14)))) {
captchaLoop();
}
}, 1)
}
var wanted_captcha = window.prompt("What captcha do you want? Click cancel or type nothing to stop trying.")
if (wanted_captcha == null || wanted_captcha === '' || (wanted_captcha != null && (wanted_captcha.length !== 5))) {
captchaLoop = function() {}
}
captchaLoop();
