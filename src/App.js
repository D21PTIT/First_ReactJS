import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './feartures/Song';
import Fearture from './feartures/Todo';
import Brawl from './feartures/Brawl';

function App() {
  const arr =['Fearture','Song','Brawl']
  const [pos, setPos] = useState();
  return (
    <div style={{padding: '30px'}}>
      {arr.map((it)=>(
        <button onClick={()=>{
          setPos(it);
        }}
        style={it===pos ? {background: '#000', color: '#fff'} : {}}
        >
          {it}
        </button>
      ))}
      {pos==='Fearture'? <Fearture /> : (pos==='Song' ? <Song /> : <Brawl/>)}
    </div>
  )


}

export default App;
