function omikujishow() {
  let x = Math.random(); // 0.0 ~ 0.999...
  let message = "";
  let color = "";
  let bg = "";

  if (x < 0.1) {
    message = "大吉";       // 10%
    color = "red";
    bg = "#ffe0e0";
  } else if (x < 0.5) {
    message = "中吉";       // 40%
    color = "orange";
    bg = "#fff3e0";
  } else if (x < 0.8) {
    message = "小吉";       // 30%
    color = "green";
    bg = "#e0ffe0";
  } else if (x < 0.95) {
    message = "吉";         // 15%
    color = "blue";
    bg = "#e0f0ff";
  } else {
    message = "凶";         // 5%
    color = "black";
    bg = "#f0f0f0";
  }

  let object = document.getElementById("omikuji");
  object.innerText = message;
  object.style.color = color;
  object.style.backgroundColor = bg;
}
