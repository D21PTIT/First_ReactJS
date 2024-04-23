import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './feartures/Song';
import Fearture from './feartures/Todo';

function App() {
  const arr =['Fearture','Song']
  const [pos, setPos] = useState();
  return (
    <div>
      {arr.map((it)=>(
        <button onClick={()=>{
          setPos(it);
        }}
        style={it===pos ? {background: '#000', color: '#fff'} : {}}
        >
          {it}
        </button>
      ))}
      {pos==='Fearture' ? <Fearture /> : <Song />}
    </div>
  )


}

export default App;
