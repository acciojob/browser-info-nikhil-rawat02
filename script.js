//your JS code here. If required.
let element = document.getElementById("browser-info");
let browserInfo = navigator.appName;
let version = navigator.appVersion;
let info =  "You are using " + browserInfo + " version " + version;
// console.log(info);
element.innerHTML = info;