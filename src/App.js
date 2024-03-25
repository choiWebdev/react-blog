import React, {useState} from 'react';
import './App.css';

function App() {
  // this is feature b
  let [postSubject, setSubject] = useState(['글제목1', '글제목2', '글제목3']);
  const [like, countLike] = useState(0);

  function changeSubject (){
    let newArray = [...postSubject];
    newArray[0] = '여자 코트 추천';
    setSubject(newArray);
  }

  return (
    <div className="App">
      <div className="bk-nav">
        <h1>개발 Blog</h1>
      </div>
      <button onClick={ changeSubject }>버튼</button>
      {
        postSubject.map((e, idx) => {
          return (
          <div className="list">
            <h4 className="">{postSubject[idx]} <span className="like" onClick={ () => {countLike(like + 1)} }>👍 {like}</span></h4>
            <p>2024. 03. 18</p>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
