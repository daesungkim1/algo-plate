# algo-plate

> unit test를 통해 알고리즘 테스트해 보기


## 왜?

다음과 같은 것에 익숙해 지기 위한 개인적인 공간입니다.

* 기초적인 알고리즘 이해사항 정리
* ES2015 언어 연습
* Babel6 transfiler 개발환경 이해
* mocha 및 chai를 활용한 unittest code 연습
* istanbul을 통한 code coverage 확인
* coveralls 사용해 보기


## 시작하기

알고리즘 학습을 하면서 불편했던 점이 있었는데 작성한 solution를 테스트 해 보려고 할 때 주로 test case를 별도의 text 파일에 저장한 후 실행했던 점입니다. 이렇게 별도로 작성한 test case들이 일회성으로 확인한 후에 관리도 잘 안되고, 향후 학습을 위해 다시 solution 파일을 열어 보면 test case가 없어서 난감한 경우가 많았습니다.

이런 점을 극복하고자 unit test를 활용하면 편리할 것 같아 시작했습니다. 작성한 solution이 test를 시작하면 미리 정의해 둔 fixture를 읽어와서 solution의 결과 pass/fail을 보여주게 됩니다.


### 선수조건

Node JS 환경 및 ES2015 이해 


### 설치

Repository를 적절한 위치에 clone 후 의존성있는 package를 설치합니다. 설치를 마치면 cli로 test를 수행하고 code coverage를 확인할 수 있는 babel6을 통한 ES2015 개발 환경이 셋팅됩니다. 개발환경에 대한 보다 자세한 설명은 (Doc)[https://github.com/daesungkim1/algo-plate/tree/master/docs]를 참고하세요.

```
npm install
```

## 알고리즘 테스트 하기

간단히 npm test를 통해 src에 정의되어 있는 solution 을 테스트 해 볼 수 있습니다.

```
npm test
```


### solution 추가하기

_작성중_


### TestCase 데이터 추가하기

_작성중_


## 작성자
* 김대성 (Daesung Kim <daesung.kim1@yahoo.com>)

## License

Copyright © 2016 Daesung Kim. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/daesungkim1/algo-plate/blob/master/LICENSE.txt) file.

---
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license. It is attributed to Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/babel-starter-kit/graphs/contributors), and original version can be found ["Babel Start Kit"](https://github.com/kriasoft/babel-starter-kit)