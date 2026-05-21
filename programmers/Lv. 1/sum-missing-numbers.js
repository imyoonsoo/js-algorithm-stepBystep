// 문제명: 프로그래머스 Lv. 1 - 없는 숫자 더하기

// 풀이 코드
function solution(numbers) {
  let result = 0; // result 초기화는 -1이 아닌 0으로!

  /*
  numbers 배열에는 0 ~ 9 중 숫자 일부가 들어가 있기 때문에 
  i <= numbers.length가 아닌 i <= 9로 픽스
  */
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      // 0 ~ 9 중 포함하지 않는 숫자만 거르기 위해 사용한 !
      result += i; // result는 0 ~ 9 사이 숫자 중에서 없는 숫자들만 모두 더함
    }
  }
  return result; // for문 밖에서! 결과값 result 리턴
}
