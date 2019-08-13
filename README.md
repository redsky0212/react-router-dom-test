

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
  - queryString으로 받는 쪽에서는 this.props.location.search에서 가져올 수 있다.
  - 설치한 query-string라이브러리로 location.search값을 객체로 만들 수 있다. queryString.parse(this.props.location.search)

### containers, components 폴더 생성
* 똑똑한 컴포넌트는 containers폴더에, 멍청한 컴포넌트는 components폴더에 파일을 생성한다.
* 이 폴더구조 관련해서는 좀 더 연구가 필요함...

### Route 설정
* &lt;Route exact path="/" component={Home} /&gt;
* &lt;Route path="/about/:name?" component={About} /&gt;
 - Route 에 컴포넌트를 설정하고 path에 경로를 설정한다.
 - exact는 주소를 입력한것과 정확할때만 이동한다는 뜻.
 - params를 넘길때는 위와같이 :name 과 같이 입력해서 넘긴다. "?"는 입력해도 되고 안해도 된다는 뜻.
 - params를 받을때는 this.props.match.params.파람key명  방법으로 가져와 쓸 수 있다.

### 라우트 이동 (Link) (npm i react-router-dom)
* a태그를 이용하지 않고 Link를 이용하여 코딩한다.
  - import {Link} from 'react-router-dom';
  - &lt;Link to="/"&gt;홈&lt;/Link&gt;

### 라우트 이동 및 추가기능 (NavLink)
* NavLink 로 activeStyle, activeClassName설정을 해서 url이 일치 했을때 적용할 스타일을 설정할 수 있다.
  - let activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };
  - &lt;NavLink exact to="/" activeStyle={activeStyle}&gt;홈&lt;/NavLink&gt;
  
### 자바스크립트로 라우팅 하기
* 링크를 통하여 단순 페이지 이동이 아니라 javascript로 페이지 이동이 필요할 경우 아래와 같이 사용할 수 있다.
  - this.props.history.push('/about');

### 라우터 내부에서 라우터 사용하기
* 소스의 containers/Post.js, containers/Posts.js 파일을 참조.



