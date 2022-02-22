# Paint JS

[노마드코더 VanillaJs 그림판 만들기](https://nomadcoders.co/javascript-for-beginners-2/lectures/1495)

> VanillaJs 그림판 만들기를 통해 HTML5의 Canvas에 대해 이해하고 이벤트 핸들러를 이용하여 마우스 제어 등에 대해 공부하기 위해 제작

# 주요 기능

1.  캔버스 기본 설정 하기
2.  캔버스를 이용하여 마우스로 그림 그리기

- 전체 색상 채우기
- range를 이용하여 선 사이즈 조절하기
- 색을 선택하여 선 색 및 배경 색 변경하기
- Fill or Faint 모드로 변경하기
- 마우스 오른쪽 클릭 막기
- 이미지 파일로 저장하기

## 캔버스 기본 설정 하기

- Context 생성하기 - `getContext('2d')`
- 캔버스 기본 사이즈 설정하기 - `CANVAS_SIZE` 변수를 생성하여 값 저장하여 설정 (선택) - `canvas.width = CANVAS_SIZE;` - `canvas.height = CANVAS_SIZE;`

- 기본 배경 색상 채우기

  - 흰색으로 배경 색상 설정
    `ctx.fillStyle = '#fff'`
  - 화면 사이즈에 맞는 Rect를 설정하여 채우기
    `ctx.fillRect(0, 0, canvas.width, canvas.height);`
  - 선 색 설정하기
    `ctx.strokeStyle = INITIAL_COLOR;`

  - 배경 색 설정
    `ctx.fillStyle = INITIAL_COLOR;`
  - 선 굵기 설정하기
    `ctx.lineWidth = 2.5;`

## 캔버스를 이용하여 마우스로 그림 그리기

- `mousemove`, `mousedown`, `mouseup`, `mouseleave` 핸들러를 이용하여 제작
- painting 변수를 생성하여 상태 값을 이용하여 적용하기 - `painting = true` 일 경우 라인을 그림 - `painting = false` 일 경우 그리지 않음
