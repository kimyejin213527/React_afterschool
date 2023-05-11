import logo from './logo.svg';

import './App.css';

import { useState } from 'react';

​

function App() {  

  let[제목들, 제목변경] =

  useState(['찬실은복도많지','내서랍속에 행복','컴온컴온']); 

  let[like, likeAdd] = useState(0);

  let[modal,setModal] = useState(false);

  // 동적UI을 만들기 위해서는 현재UI상태를 state에 저장해 두어야 함

  //0이면 0번째 제목, 1이면 1번째 제목, 2이면 2번째 제목

  let[title,setTitle] = useState(0); 

 

  return (

    <div className="App">

      <div className="black-nav">

        <h4 style = {{color : 'yellow', fontSize :'22px'}}>힐링영화</h4>

      </div>

      <button onClick={()=>{

        let copy1 = [...제목들];

        copy1[0] = '벌새';

        //copy1[1] = '우리들';

        //copy1[2] = '가족';

        제목변경(copy1);

      }}>신규영화</button>

      <button onClick={()=>{

        let copy2 = [...제목들];

        copy2.sort();        

        제목변경(copy2);

      }}>제목정렬</button>

      

      

​

      {/* {

        제목들.map(function(e){

        return(

        <div className="list">

        <h4>{e}</h4>

        <p>4월18일</p>

        </div>  

        )

        })

       }      */}

​

       {       

        제목들.map(function(e,i){

        return(

        <div className="list">

        <h4 onClick={()=>{setModal(true); setTitle(i) }}>{제목들[i]}</h4>

        <p>4월18일</p>

        </div>  

        )

        })

       }   

​

       {

        modal == true ? <Modal index={title} 제목변경1={제목변경}

        color = "skyblue" title1={제목들}/> : null

        //modal == true ? <Modal/> : null

       }

 

    </div>

  );

}

function Modal(props ){

   return(

     <div className="modal" style={{background : props.color}}>

        <h4>{props.title1[props.index]}</h4>        

        <p>날짜</p>

        <p>상세내용</p>

        <button onClick={()=>{props.제목변경1(['라이프잇셀프', '벌새', 

        '라이스보이'])}}>글수정</button>

      </div>               

   )

}

export default App;



