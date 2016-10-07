/**
 * Binary Search
 */

function binarySearch(obj) {
  const A = obj.A;
  const k = obj.k;

  let s = obj.s;
  let e = obj.e;

  // 검색 종료위치가 시작위치보다 크거나 같은 범위에서
  while (e - s >= 0) {
    const m = Math.floor((s + e) / 2);

    // 찾는 값인 경우 종료
    if (A[m] === k) {
      return m + 1;
    }

    // 찾는 값의 위치 비교
    if (A[m] < k) {
      // 중간값 보다 크면 중간값부터 검색
      s = m + 1;
    } else {
      // 중간값 보다 작으면 중간값까지 검색
      e = m - 1;
    }
  }

  // 찾는 값이 없는 경우
  return -1;
}

export default binarySearch;
