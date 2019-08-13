

## 설명 

### 스터디 참고 사이트 (https://kbennycc.blogspot.com/2019/02/0117-react-router.html)

### create-react-app 설치
* ( create-react-app 프로젝트 폴더명 ) 을 이용하여 react 애플리케이션 프로젝트를 만든다.
* 설치된 파일중에 필요없는 파일을 지운다.
* index.js, Root.js, App.js 파일을 생성하여 최초 진입 시점의 내용 코딩을 시작한다.

### NODE_PATH 설정 으로 루트경로로 파일 불러오기 처리
* "start": "NODE_PATH=src react-scripts start", "build": "NODE_PATH=src react-scripts build"
* window에서는 npm i cross-env 설치 후 아래와 같이 셋팅
  - "start": "cross-env NODE_PATH=src react-scripts start", "build": "cross-env NODE_PATH=src react-scripts build"

### react-router-dom 설치
* ( npm i react-router-dom ) 브라우저에서 사용되는 리액트 라우터.
* BrowserRouter 를 이용하여 HTML5의 history API를 이용하여 새로고침 하지 않고 화면전환 가능하게 한다.
* &lt;BrowserRouter&gt;&lt;App /&gt;&lt;/BrowserRouter&gt;
 
### query-string 설치
* url뒤에 ?a=111&b=444 형식으로 들어가는 정보 관련 라이브러리 설치 (npm i query-string) 

### containers, components 폴더 생성
* 똑똑한 컴포넌트는 containers폴더에, 멍청한 컴포넌트는 components폴더에 파일을 생성한다.
* 이 폴더구조 관련해서는 좀 더 연구가 필요함...

### Route 설정
* &lt;Route exact path="/" component={Home} /&gt;




