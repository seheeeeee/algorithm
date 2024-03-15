// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 6 7 11
// ▣ 출력예제 YES
// ▣ 입력예제 13 33 17
// ▣ 출력예제 NO

function mySolution(a, b, c) {
  let max;
  let arr = [a, b, c];

  if (a > b) max = a;
  else max = b;

  if (c > max) max = c;

  const filterArr = arr.filter((num) => num !== max);

  return filterArr[0] + filterArr[1] > max ? "YES" : "NO";
}

function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";
  return answer;
}
