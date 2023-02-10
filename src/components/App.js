import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const [style, setStyle] = useState("redColor");
  const [value, setValue]= useState(true);
  
  function changeStyle(){
    setValue(!value);
  }
  useEffect( () => {
    if(value===true){
    setStyle("blueColor");
    }
    else{
    setStyle("redColor");
    }
  },[value]);
  
  return (
    <div id="main">
      <p className={style} >Newton School</p>
      <button id='button' onClick={changeStyle}>Change Style</button>
    </div>
  )
}


export default App;
