const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('controls__color');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;

//default setting
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR; //선 색
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; //선 사이즈

let painting = false;
let filling = false;

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
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Fill';
  } else {
    filling = true;
    mode.innerText = 'PAINT';
  }
}

function handleCanvaseClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

//캔버스 마우스 핸들러 설정
if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvaseClick);
}

//컬러 핸들러 설정
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick)
);

//range 설정
if (range) {
  range.addEventListener('input', handleRangeChange);
}

//mode 설정
if (mode) {
  mode.addEventListener('click', handleModeClick);
}
