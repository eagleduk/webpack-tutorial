WEBPACK TUTORIAL
        - 백성훈 (**)

https://webpack.js.org/

그외 참조 사이트
    - https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html
    - https://muang-kim.tistory.com/102

npm init -y
npm install webpack webpack-cli --save-dev

npx 명령어 -> node_modules/.bin 의 명령어들을 실행시켜 준다.

bundle 의 파일들을 /src 폴더에 넣어주고,
output 파일들은 /dist 라는 폴더에 생성된다.

bundle 파일 만들기
1. npx webpack
2. bundle 시 node 의 모들을 사용할 시에는 --target=node 를 추가하여 준다.
3. webpack 환경 설정 파일 webpack.config.js 를 작성하면 (1) 의 명령어로만 실행시킬 수 있다.

package.json
** 내부의 참조 모듈들을 한번에 설치하기 위해서는 npm install
1. dependencies
    - 어플리케이션에 포함되는 모듈들
    - npm 설치시 --save
2. devDependencies
    - 개발과정에 관여하는 모듈들
    - npm 설치시 --save-dev

Loader
** javascript 파일, js 파일 이외의 파일을 bundle 하기 위한 webpack 의 설정
** https://webpack.js.org/loaders/
1. style-loader, css-loader
    - css 파일을 bundle에 포함시키기 위한 모듈

Plugin
1. HtmlWebpackPlugin
    - "template" 값에 명시된 html 파일을 기준으로 bundle 시 html 파일을 생성해 준다.
    - https://github.com/jantimon/html-webpack-plugin#options

Webpack 설정
1. Handlebars
    - .hbs
    - npm i handlebars -D
    - npm i handlebars-loader -D
    - webpack.config.js 옵션으로 값을 설정하고, 그 값을 bundling 할 때 가져다 사용할 수 있다.
    - model(webpack.config.js), template(*.hbs), view(bundle 된 *.html) 형태

2. Caching
    - 이용자의 사용시간을 최소화
    - [hash], [contentHash]
        => hash: bundle 될때, 수정사항이 있는 파일이 있으면, 모든 [hash] 가 들어있는 파일들이 새로 bundling 된다.
        => contentHash: 수정사항이 있는 파일만 새로 bundling 된다.
    - bundle 된 파일의 이름이 같으면 브라우저는 새로운 파일이라고 인식을 못하기 때문에, 파일이름에 hash 값을 추가로 넣어주면,
        bundling 과정에서 이름이 다른 파일이 생성이 된다. 하지만 매번 새로운 파일을 생성하기 때문에, output 폴더를 초기화 해주는 작업이 필요하다.
        => npm i clean-webpack-plugin -D
        => 설치 후 config.webpack.js 에 require 후 plugin 에 추가를 해주어야 한다.
    - css 파일도 하나의 파일로 생성
        => npm i mini-css-extract-plugin -D
        => 설치 후 config.webpack.js 에 require 후 plugin 에 추가, rules 에 추가를 해주면, output 폴더에 css 파일도 생성이 된다.

3. Chunk
    - bundle 파일을 분리

최적화
1. minification & mangling
    - 주석 및 console
    - 난독화 : 변수를 알파벳 하나의 변수로 치환
    - html-wepack-plugin

2. css 최적화
    - cssnano, optimize-css-assets-webpack-plugin

3. js 최적화
    - terser

Mode
    - 각 개발시 bundling 시간을 단축하기 위해 개발모드, 배포모드 등의 설정을 다르게 한다.
    - node_env 가 윈도우에서는 안되는듯... 제대로 알려주지도 않는다..
        => npm i win-node-env -D 설치 후 해결....
    - 아무튼... 정말 수업듣기 힘들다....
1. devlopment mode
    - npm i webpack-dev-server -D
    - webpack-dev-server 가 작동이 되지 않는다.... 버전 충돌이라는데... 잘 모르겠다...
    - api 를 보고 공부해야할듯....
    - historyApiFallback, open, overlay, port

loader
1. file loader
    - npm i file-loader -D
    - https://github.com/webpack-contrib/file-loader

2. url loader
    - npm i url-loader -D
    - https://github.com/webpack-contrib/url-loader

3. sass loader
    - npm i sass-loader -D
    - https://github.com/webpack-contrib/sass-loader
    - npm i node-sass -D

4. postcss loader
    - https://postcss.org/
    - npm i postcss -D
    - npm i autoprefixer -D
    - npm i postcss-loader -D
    - browser list
    - style lint

5. BABEL
    - 하위 브라우저에서도 호환할 수 있도록 도와준다
    - npm i @babel/cli -D
    - npm i @babel/core -D
    - npm i @babel/preset-env -D
    - npm i babel-loader -D