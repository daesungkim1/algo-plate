# algo-plate

> unit test를 통해 알고리즘 테스트해 보는 개인적인 공간입니다.

<br>

## 왜?

알고리즘을 학습하면 불편한 점이 있습니다. 작성한 solution을 테스트 해 보기 위해 예제
입력 데이터를 준비하는 과정인데 주로 별도의 text 파일로 만들어 코드에서 읽어들입니다.
별로 어렵지 않은 작업이지만 이렇게 작성한 입력 파일은 학습을 위해 일회성으로 만들어
놓는 경우가 많습니다. 그래서 동작을 확인 한 후에는 사용했던 입력파일 관리에 소홀하게
되고, 작성해 둔 알고리즘 코드를 나중에 다시 보면 확인해 보기가 쉽지 않습니다.

이러한 점 때문에 unittest가 가능한 개발 환경 위에 코드들을 준비해봤습니다. 알고리즘
구현을 위한 코드만 따로 분리하여 저장해 두고, 이 코드를 unit test를 통해 테스트하는
방식으로 알고리즘이 수행됩니다. 이때 입력 데이터는 미리 정의된 JSON document를 사용
하여 테스트 코드에서 사용됩니다.

작성하는 코드들은 다음과 같은 기술을 연습하기 위해 작성하였습니다.

* 기초적인 알고리즘 이해사항 정리
* ES2015 언어 연습
* Babel6 transfiler 개발환경 이해
* mocha 및 chai를 활용한 unittest code 연습
* istanbul을 통한 code coverage 확인
* coveralls 사용해 보기

<br>

## 시작하기

ES2015로 코드를 작성하기로 했기 때문에 Node JS 개발환경 환경이 필요합니다. ES2015를
테스트해 보려면 babel transfiler가 필요합니다.

<br>

### 개발환경 설치

Repository를 적절한 위치에 clone 후 의존성있는 package를 npm 명령을 통해 설치합니다.
설치를 마치면 CLI로 test를 수행하고 code coverage를 확인 할 수 있는 개발 환경이
셋팅됩니다. 개발환경에 대한 보다 자세한 설명은 [Doc](https://github.com/daesungkim1/algo-plate/tree/master/docs)를 참고하세요.

```
npm install
```

<br>

### solution 추가하기

알고리즘 구현을 위한 solution 파일들은 ```src``` 디렉토리 아래에 위치합니다. ES2015의
module 정의에 따라 class 혹은 function을 export 합니다.

<br>

### 입력 데이터 준비하기

입력 데이터는 ```data``` 디렉토리에 다음과 같은 JSON형식으로 준비합니다.

* tc-size : testcase 갯수
* test-size : 테스트 유형 갯수
* name : 알고리즘 이름
* testcases : 고유의 키값에 입력에 사용되는 데이터를 정의
   * <키> : 테스트 키
      * size : 입력의 크기
      * case : 입력값
* tests (배열)
   * type : 테스트 유형
   * size : 테스트 갯수
   * results (배열)
      * ref : 테스트에 사용할 testcases 키
      * input : 입력
      * expected : 예상값


JSON 예제
```
{
  "tc-size" : 2,
  "test-size" : 2,
  "name" : "binarySearch",
  "testcases" : {
      "tc1" : {
        "size" : 10,
        "case" : [1,2,3,5,6,8,9,11,14,15]
      },
      "tc2" : {
        "size" : 5,
        "case" : [1,2,3,5,7]
      }
  },
  "tests" : [
    {
      "type" : "match",
      "size" : 2,
      "results" : [
        {
          "ref" : "tc1",
          "input" : 9,
          "expected" : 7
        },
        {
          "ref" : "tc1",
          "input" : 1,
          "expected" : 1
        }
      ]
    },
    {
      "type" : "upper-bound",
      "size" : 2,
      "results" : [
        {
          "ref" : "tc1",
          "input" : 7,
          "expected" : 6
        },
        {
          "ref" : "tc2",
          "input" : 8,
          "expected" : 6
        }
      ]
    }
  ]
}
```

<br>

### Test 추가하기

테스트 코드는 test 디렉토리에 정의되어 있습니다. solution 파일을 작성하면서 test
코드도 동시에 작성합니다. test 코드에 대한 간략한 예는 다음과 같습니다.
(참고로 mocha는 기본값으로 test란 이름의 디렉토리를 찾아서 실행하여 줍니다.)

```
import { expect } from 'chai';
import fs from 'fs';

// 알고리즘 구현 정의
import <클래스명> from '<파일 위치>';


// 입력 데이터 읽기
const fixture =
    JSON.parse(fs.readFileSync('<입력 데이터 파일 위치>', 'utf8'));

const tests = fixture.tests;

// 테스트 케이스 추출
let tc1 = {};
tests.forEach((test) => {
  if (test.type === '<테스트 유형>') {
    tc1 = test;
  }
});

describe('수행할 알고리즘에 대한 설명', () => {

  describe('테스트에 대한 설명', () => {
    const results = tc1.results;
    results.forEach((test) => {

      it('입력값을 가지고 알고리즘 실행', () => {
        const result = <클래스명>();
        expect(result).to.be.equal(test.expected);
      });

    });
  });

});
```

<br>

## 알고리즘 테스트 하기

기본적인 테스트 스크립트는 [package.json](https://github.com/daesungkim1/algo-plate/blob/master/package.json)에 정의되어
있습니다.

```
"scripts": {
...
  "test": "mocha --compilers js:babel-register",
  "test:watch": "mocha --compilers js:babel-register --reporter min --watch",
  "test:cover": "babel-node ./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha",
...
```

간단히 ```npm test``` 명령어를 통해 전체 테스트를 실행해 볼 수 있습니다.


<br>

## 작성자
* 김대성 (Daesung Kim [@danielkimreally](https://twitter.com/danielkimreally))

<br>

## License

Copyright © 2016 Daesung Kim. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/daesungkim1/algo-plate/blob/master/LICENSE.txt) file.

---
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license. It is attributed to Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/babel-starter-kit/graphs/contributors), and original version can be found ["Babel Start Kit"](https://github.com/kriasoft/babel-starter-kit)
