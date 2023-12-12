// 여기에 정답을 작성해주세요

class Selector {
  // 생성자에서 인자에 해당하는 요소들을 배열로 element에 저장합니다.
  constructor(args) {
    this.element = document.querySelectorAll(args);
  }
  // 메서드 체이닝이 가능하도록 메서드 실행 후 객체를 반환합니다.
  addClass(args) {
    this.element.forEach((cur) => {
      cur.classList.add(args);
    });
    return this;
  }
  removeClass(args) {
    this.element.forEach((cur) => {
      cur.classList.remove(args);
    });
    return this;
  }
  css(...args) {
    if (typeof args[0] == 'string') { // 문자열로 들어오는 경우입니다.
      this.element.forEach((cur) => {
        cur.style[args[0]] = args[1];
      });
    } else { // object로 들어오는 경우입니다.
      this.element.forEach((cur) => {
        for (let v in args[0]) {
          if (isNaN(args[0][v])) { // (숫자만으로 이뤄지지 않은 경우) = 'px'이 붙은 경우
            cur.style[v] = args[0][v];
          } else {
            cur.style[v] = args[0][v] + 'px';
          }
        }
      });
    }
    return this;
  }
  fadeOut(args) { // duration 기본값 400, easing 기본값 swing(0.5 - Math.cos( p * Math.PI ) / 2)
    this.element.forEach((cur) => {
      cur.style.transition = 'opacity 400ms cubic-bezier(0.420, 0.000, 0.580, 1.000)';
      cur.style.opacity = 0;
      setTimeout((v) => {
        v.style.display = 'none';
      }, 400, cur);
      args();
    });
    return this;
  }
}

// 객체 생성 후 반환합니다.
function $(args) {
  let target = new Selector(args);
  return target;
}




// 아래 코드는 수정하지 않습니다

// 1
$('#target-1').removeClass('border');

// 2
$('#target-1').css('left', '250px');

// 3
$('.target-2').removeClass('border').addClass('blue');

// 4
$('.target-2').css({ 'left': 50, 'margin-top': '-15px' })

// 5
$('#target-3').fadeOut(() => $('#target-4').addClass('green'));