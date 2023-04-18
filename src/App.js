import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let post = '찬실이는 복도 많지'

  // document.querySelectorAll('h4')[0].innerHTML = post;
  // let [제목1, b1] = useState('찬실이는 복도 많지');
  // let [제목2, b2] = useState('내 서랍 속에 행복');
  // let [제목3, b3] = useState('컴 온 컴 온');

  let[제목들,b] = 
  useState(['찬실이는 복도 많지','내 서랍 속에 행복','컴 온 컴 온']);

  return (
    <div className="App">
      <div className='App'>
        <div className='black-nav'>
          <h4 style={{color : 'white',fontSize : '22px'}}>힐링영화</h4>
        </div>
      </div>
      <div className='list'>
        <h4>{제목[0]}</h4>
        <p>4월18일</p>
      </div>
      <div className='list'>
        <h4>{제목[1]}</h4>
        <p>4월19일</p>
      </div>
      <div className='list'>
        <h4>{제목[2]}</h4>
        <p>4월20일</p>
      </div>
    </div>
    
  );
}

export default App;