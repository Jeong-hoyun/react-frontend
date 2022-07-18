#  Create React App tutorial

 yarn install 로 인한 가벼운 react 앱 확인 가능한 프로젝트
 [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

로컬 서버 실행 yarn start 로 실행 가능

### 0706 react tutorial

# jsx 란

```javascript

const element =<img src={user.avatalUrl} />
// jsx 태그가 비어있다면 /> 를 이용해 바로 닫아주어야함

const element ={
   <div>
   <h1>hello</h1>
   </div>
}
//jsx는자식을 정의할 수 있다

const element={
    <h1 className="greeting">
    hello,world
    </h1>
};

//=== 밑의 내용과 같은 것이 JSX다
const element =React.createElement(
    'h1',
    {className:'greeting'},
    'hello, world'
);

```

## antd install

```javascript
yarn add antd
```

## component usestate 복습

0718 usestate로 kmtomile 과 같은 앱 만들기 작업 완료
부족한부분 내일 보충예정



