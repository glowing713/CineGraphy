# CineGraphy

## Dev stage

### Build & Deploy
```js
npm run deploy
```
- deploy script를 run 하면 npm이 자체적으로 일치하는 이름인 predeploy 코드를 실행한다.
- predeploy 코드는 React 프로젝트를 build 해서 HTML, JS, CSS로 구성된 빌드 프로젝트를 생성한다.
- 이후, gh-pages 패키지가 build 디렉토리(default)를 github pages에 배포하게 된다.