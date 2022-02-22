# Paint JS

[노마드코더 VanillaJs 그림판 만들기](https://nomadcoders.co/javascript-for-beginners-2/lectures/1495)

> VanillaJs 그림판 만들기를 통해 HTML5의 Canvas에 대해 이해하고 이벤트 핸들러를 이용하여 마우스 제어 등에 대해 공부하기 위해 제작

# 주요 기능

1.  캔버스 기본 설정 하기
2.  캔버스를 이용하여 마우스로 그림 그리기
3.  색을 선택하여 선 색 및 배경 색 변경하기
4.  Fill or Faint 모드로 변경하기
5.  전체 색상 채우기
6.  range를 이용하여 선 사이즈 조절하기
7.  마우스 오른쪽 클릭 막기
8.  이미지 파일로 저장하기

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

- **mousemove, mousedown, mouseup, mouseleave** 핸들러를 이용하여 제작
- painting 변수를 생성하여 상태 값을 이용하여 적용하기 - `painting = true` 일 경우 라인을 그림 - `painting = false` 일 경우 그리지 않음
- **mousemove** 핸들러를 이용하여 마우스 위치를 이용하여 그리기
  - `offsetX, offsetY`를 이용하여 캔버스 안에서의 마우스 위치 확인
  - painting 상태 값에 따라 설정하기
    - true일 경우 `ctx.beginpath();` `ctx.moveTo(x,y);` 를 이용하여 보이지 않는 패스가 마우스를 움직일때마다 좌표를 찾아갈 수 있도록 설정
    - false일 경우 `lineTo(x,y); ctx.stroke();` 를 이용하여 마우스 이동되는 위치에 따라 선이 그려지도록 설정
- **mousedown** 핸들러를 이용하여 `painting = true`가 되도록 설정
- **mouseup, mouseleave** 핸들러를 이용하여 `painting = false`가 되도록 설정

## 색을 선택하여 선 색, 배경 색 변경하기

- 컬러 컨트롤러를 선택하여 불러온 뒤 **click** 핸들러를 이용하여 설정
  - 선택한 타겟의 배경색 찾아 color 변수에 할당
    - `const color = event.target.style.backgroundColor;`
  - 선 색과 배경 색을 color 변수에 있는 색으로 변경
    - `ctx.strokeStyle = color;`
    - `ctx.fillStyle = color;`

## Fill or Faint 모드로 변경하기

- mode의 상태를 저장하기 위해 filling 상태 값 변수 생성
  - `let filling = false;` (기본 값 false)
- mode 버튼에 **click** 핸들러 설정
  - `filling = true` 일 경우
    - `filling = fasle`로 변경
    - `mode.innerText = 'Fill'`을 이용하여 텍스트 변경
  - `filling = false`일 경우
    - `filling = true`로 변경
    - `mode.innerText = 'Paint'`를 이용하여 텍스트 변경

## 전체 색상 채우기

- canvas에 **click** 핸들러 설정
  - `filling = true`일 경우에만 적용되도록 설정
  - 캔버스를 클릭 했을 때 전체가 채워지도록 설정
    - `ctx.fillRect(0, 0, canvas.width, canvas.height);`

## range를 이용하여 선 사이즈 조절하기

- 생성해둔 range를 선택한 후 **input** 핸들러 설정
  - 해당 range의 value를 찾기
    - `const size = event.target.value;`
  - 캔버스의 라인 사이즈를 range 사이즈로 변경
    - `ctx.lineWidth = size;`

## 마우스 오른쪽 클릭 막기

- 캔버스에 **contextmenu** 핸들러 설정
  - `event.preventDefault();` 를 이용하여 마우스 오른쪽 클릭 막기

## 이미지 파일로 저장하기

- saveBtn에 **click** 핸들러 설정
  - 캔버스의 dataURL를 원하는 파일 형태로 설정 (기본값 png)
    - `const image = canvas.toDataURL('image/png');`
  - a 링크를 생성하여 a 링크의 href에 캔버스의 dataURL를 할당
    - `const link = document.createElement('a');`
    - `link.href = image;`
  - 링크를 이용하여 다운로드되어 저장될 파일 이름을 설정
    - `link.download = 'PaintJS[🎨]';`
  - 링크가 클릭 되도록 설정
    - `link.click();`
