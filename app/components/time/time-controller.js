
function time() {
  var today = new Date();
  var h = today.getHours();
  if (h > 12) { h = h - 12 }
  var m = today.getMinutes();
  m = showTime(m);
  document.getElementById('clock').innerHTML =
    h + ":" + m;
  var t = setTimeout(time, 1000);
}
function showTime(num) {
  if (num < 10) { num = "0" + num };
  return num;
}

export default class Time {
  constructor() {
    time()
  }
}