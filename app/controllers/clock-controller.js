function _drawClock() {
  let today = new Date();
  
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  //NOTE sets the AM/PM Value
  let amPm = ""
  if (h < 12) {
    amPm = "AM"
  } else {
    amPm = "PM"
  }
  //NOTE converts to 12 hour time
  if (h > 12) {
    h -= 12;
  } else {
    h = h;
  }
  //NOTE pads the numbers with a zero in front of them for single digits
  let hStr = ("0" + h).slice(-2);
  let mStr = ("0" + m).slice(-2)
  let sStr = ("0" + s).slice(-2)

  //NOTE sets the html on the page to the time values
  document.getElementById("clock").innerText = hStr + " : " + mStr + " : " + sStr + " " + amPm
  //NOTE repeats the function every half a second
  let t = setTimeout(() => {_drawClock()}, 1000);
}

export default class ClockController {
  constructor() {
    //NOTE draws clock on creation of controller
    _drawClock();
  }
}
