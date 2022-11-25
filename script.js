const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const slider = document.getElementById("vol");

function drawTree(startX, startY, len, angle, angleChange) {
  angleChange = change;
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
  //   ctx.strokeStyle = "red";
  ctx.translate(startX, startY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if (len < 10) {
    ctx.restore();
    return;
  }

  drawTree(0, -len, len * 0.75, angle + angleChange);
  drawTree(0, -len, len * 0.75, angle - angleChange);

  ctx.restore();
}
// console.log(typeof slider.value);

// drawTree(canvas.width / 2, canvas.height - 80, 120, 0, 15);

// slider.oninput = function () {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawTree(
//     canvas.width / 2,
//     canvas.height - 80,
//     120,
//     0,
//     parseInt(slider.value)
//   );
// };
let change = 0;
let intervalId = window.setInterval(function draw() {
  change++;
  console.log(change);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTree(canvas.width / 2, canvas.height - 80, 120, 0, change);
}, 30);
