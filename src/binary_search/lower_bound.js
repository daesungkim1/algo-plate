/**
 * lowerBound
 *
 * k 이상인 수가 처음 등장하는 위치 찾기
 */

function lowerBound(obj) {
  const A = obj.A;
  const k = obj.k;

  let s = obj.s;
  let e = obj.e;

  // 검색 종료위치가 시작위치보다 크거나 같은 범위에서
  while (e - s > 0) {
    const m = Math.floor((s + e) / 2);

    // 찾는 값의 위치 비교
    if (A[m] < k) {
      // 중간값 보다 크면 범위를 밀어 올림
      s = m + 1;
    } else {
      // 중간값 보다 작으면 중간값으로 범위 조정
      e = m;
    }
  } // e - s == 0 이되어 탈출함

  // 이때의 종료위치 + 1 위치가 처음 등장한 값임
  return e + 1;
}

export default lowerBound;
