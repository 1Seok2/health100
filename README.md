This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# health100 project

with 체육종합 빅데이터 센터 주관 [2020년도 1차 체육종합 데이터 활용 경진대회](http://sportsdata.or.kr/event_view.html)

[프로젝트 배포]()



### 프로젝트 설명

[자세히 보기](https://www.notion.so/health100-c1765134086240b79fe617c50126ad10)


체력측정별 운동처방 데이터를 활용한 비대면 운동처방 서비스 개발

- [Teachable Machine](https://teachablemachine.withgoogle.com/)을 활용하여 웹 서비스 구축
    - 추가적으로 [kakao음성](https://developers.kakao.com/) 활용
- [국민체력100](http://14.49.46.105/front/certify/cer0102_list.do) 측정을 기반으로 운동 처방을 한 내역을 살펴보면 대부분 집에서 할 수 있는 운동들임
    - 최근 코로나로 인해 중단된 국민체력100을 안전하게 집에서 간소화된 종목과 방법으로 측정하고영상과 측정기록에 따른 운동처방을 전달
- 운동처방이 목적이 아니더라도 계속 집에만 머물러 있는 사람들이 스스로 꾸준하게 운동하고 자가 측정을 할 수 있도록 자신의 계정에 측정 날짜, 측정 기록, 영상 등이 데이터베이쓰에 쌓임



### Project Architecture Diagram

![health100](https://user-images.githubusercontent.com/49581472/93219919-dba6e080-f7a6-11ea-8f2e-579bc02e9b75.png)



### 프로젝트 구성

Framework: React.js
Cloud : Google Cloud Service
    and Google Teachable Machine
Deploy:
Build: npm or yarn run build



### 프로젝트 규칙

> Performance 를 우선시하고, Clean Code 를 지향한다.



##### 코드작성법

* 반복적인 코드는 하나로 통일한다 ex) api.js



##### 코드 작성시 준수 사항

* Styled Component 사용
* Container / Presenter Pattern 사용 + Container: apis 호출 등 로직을 담당 + Presenter: 로직을 제외한 view를 담당
* Un-used 코드 삭제
* Component 파일명의 앞글자는 대문자로 한다. ex) HomeIndex.js
* 구조분해할당 > 구조분해할당은 배열이나 객체에서 특정 데이터를 뽑아내서 각각 별도의 변수에 할당하는 것을 말한다. 이를 사용하여 간결한 코드를 기술 할 수 있다
* 템플릿 리터럴 Javascript에서 문자열의 열결 시 '+' 등 사용 대신 더 간단히 표현 가능. 줄바꿈 코드 역시 템플릿 리터럴로 표현



##### Functional Components

> React.js는 최근 hook API등의 함수형 컴포넌트로 전환하였기 때문에 함수형 컴포넌트로 작성하는 것을 추천



##### 아토믹(Atomic) 디자인

> **_공통으로 인식하는 컴포넌트 기준이 있으면 이에 따라 충분한 이해를 바탕으로 분할할 수 있다._** > **_개발팀에서 이에 대한 가이드라인을 체계적으로 만들고 팀 조직내에서 공통 인식으로 공개 되는 것이 바람직하다._**


| 목록                          | 특징                                                              |
| ----------------------------- | ----------------------------------------------------------------- |
| **_Atoms(원자)_**             | UI를 구성하는 가장 작은 요소. 버튼, 입력 등                       |
| **_Molecules(분자)_**         | 여러개의 Atoms를 조합하여 형성.                                   |
| **_Organisms(유기적조직체)_** | Atoms + Molecules 를 조합하여 생성. Header 나 Footer 가 이에 해당 |
| **_Templates_**               | 실제 데이터가 반영되기 전의 상태                                  |
| **_Pages_**                   | Template에 데이터가 반영 된 상태                                  |


#### 팀원

* 경희대학교 최호성
* 경희대학교 최원석