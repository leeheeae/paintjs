const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('controls__color');

console.log(Array.from(colors)); //배열로 변경

//default setting
canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = '#2c2c2c'; //선 색
ctx.lineWitdh = 2.5; //선 사이즈

let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

//캔버스 마우스 핸들러 설정
if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

//컬러 핸들러 설정
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick)
);
