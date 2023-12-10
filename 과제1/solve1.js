let numbers = ['1', '3', '5', '7', '9'];
let a_coms = [];
let ans = 0; // 정답값
/**
 * nCk(조합) 함수
 * @param {string} str 고른 숫자로 만든 가장 큰 수
 * @param {number} idx 배열 인덱스로 len(arr)-1에서 0으로 감소함
 * @param {number} k 고를 숫자의 개수로 k에서 1로 감소함
 * @returns 
 */
const combination = (str, idx, k) => {
  if (k == 0) { // k 개 고르면 돌아갑니다.
    a_coms.push(str);
    return;
  }
  if (k > idx + 1) { // (고를 숫자의 개수)가 (남은 숫자의 개수) "이하"일 때 if문 밑에 로직을 진행합니다.
    return;
  }
  // 현재 idx 선택
  combination(str + numbers[idx], idx - 1, k - 1);
  // 현재 idx 선택안함
  combination(str, idx - 1, k);
  return;
}

// A,B 그룹 중 A그룹을 만듭니다.
for (let k = 1; k <= Math.floor(numbers.length / 2); k++) {
  combination([], numbers.length - 1, k);
}

// A그룹과 A그룹에 속하지 않는 원소로 B그룹을 만듭니다.
// 두 그룹으로 만든 숫자를 곱합니다.
for (let a of a_coms) {
  let b = '';
  let result = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (a.includes(numbers[i])) {
      continue;
    }
    b += numbers[i];
  }
  result = Number(a) * Number(b);
  if (ans < result) {
    ans = result;
  }
}

console.log(ans);
