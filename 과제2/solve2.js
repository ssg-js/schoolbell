// 여기에 정답을 작성해주세요
class Selector {
  constructor(param) {
    // this.element = document.querySelectorAll(param);
    this.element = param
    console.log(this);
  }
  addClass(param) {
    console.log(this.element, param);
    return this;
  }
  removeClass(param) {
    console.log(this.element, param);
    return this;
  }
  css(param) {
    console.log(this.element, param);
    return this;
  }
  fadeOut(param) {
    console.log(this.element, param);
    return this;
  }
}

function $(param) {
  // 객체 선언 후 리턴
  let target = new Selector(param);
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