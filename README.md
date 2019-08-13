

## 설명 

 ### 스터디 참고 사이트 (https://kbennycc.blogspot.com/2019/02/0117-react-router.html)

 ### NODE_PATH 설정 으로 루트경로로 파일 불러오기 처리
   * "start": "NODE_PATH=src react-scripts start", "build": "NODE_PATH=src react-scripts build"
   * window에서는 npm i cross-env 설치 후 아래와 같이 셋팅
     - "start": "cross-env NODE_PATH=src react-scripts start", "build": "cross-env NODE_PATH=src react-scripts build"

 ### react-router-dom 설치
   * ( npm i react-router-dom ) 브라우저에서 사용되는 리액트 라우터.
   * BrowserRouter 를 이용하여 HTML5의 history API를 이용하여 새로고침 하지 않고 화면전환 가능하게 한다.
   * <BrowserRouter><App /></BrowserRouter>
 
 ### query-string 설치
   * url뒤에 ?a=111&b=444 형식으로 들어가는 정보 관련 라이브러리 설치 (npm i query-string) 

