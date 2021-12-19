const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

const h = document.getElementById("hour");
const m = document.getElementById("minute");
const s = document.getElementById("sec");

let startTimer;

function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
  return;
}

start.addEventListener("click", function () {
  startTimer = setInterval(function () {
    timer();
  }, 1000);
});

reset.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  clearInterval(startTimer);
});
