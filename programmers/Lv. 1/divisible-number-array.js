// 문제명: 프로그래머스 Lv. 1 - 나누어 떨어지는 숫자 배열

// 풀이 코드
function solution(arr, divisor) {
  let answerArr = []; // answerArr 빈 배열로 초기화

  for (let i = 0; i < arr.length; i++) {
    // arr 배열의 길이만큼 반복하면서
    // arr의 요소가 divisor로 나누어 떨어진다면 (즉 divisor가 배열 arr의 약수라면)
    if (arr[i] % divisor === 0) {
      answerArr.push(arr[i]); // 해당 요소 answerArr에 push 메서드로 넣어주기
    }
  }

  /*
	divisor로 나누어 떨어지는 element가 하나도 없으면
	answerArr는 for문을 다 돌아도 추가되는 요소가 없어 빈 배열일 것
	*/
  if (answerArr.length === 0) {
    answerArr.push(-1); // -1 answerArr에 push 메서드로 넣어주기
  }

  // 마지막 리턴에서 문제에서 요구한 answerArr 오름차순으로 정렬!
  return answerArr.sort((a, b) => a - b);
}
