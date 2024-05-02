import React, { useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './feartures/Song';
import Fearture from './feartures/Todo';
import Brawl from './feartures/Brawl';
import CallAPI from './feartures/CallAPI';
import Count_Timer from './feartures/Count_Timer';
import Effect from './feartures/Effect';
import Reduce from './feartures/Reduce';
import Reducer from './feartures/Reduce';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import products from './api/productApi';
import categoryApi from './api/categoryApi';
import HookForm from './components/HookForm';

function App() {

  //goi thu API
  useEffect (()=>{
    const fetchProduct = async()=>{
      const productList = await categoryApi.getAll();
      console.log(productList)
    }
    fetchProduct()
  },[])


  return (
    <div class='ok'>
      <NavLink to='/feature'><button>Fearture</button></NavLink>
      <NavLink to='/song'><button>Song</button></NavLink>
      <NavLink to='/brawl'><button>Brawl</button></NavLink>
      <NavLink to='/callapi'><button>CallAPI</button></NavLink>
      <NavLink to='/count_timer'><button>Count_Timer</button></NavLink>
      <NavLink to='/effect'><button>Effect</button></NavLink>
      <NavLink to='/usereducer'><button>Reducer</button></NavLink>
      <NavLink to='/hookform'><button>HookForm</button></NavLink>


      <Routes>
        <Route path='/feature' element={<Fearture />} />
        <Route path='/song' element={<Song />} />
        <Route path='/brawl' element={<Brawl />} />
        <Route path='/callapi' element={<CallAPI />} />
        <Route path='/count_timer' element={<Count_Timer />} />
        <Route path='/effect' element={<Effect />} />
        <Route path='/usereducer' element={<Reducer />} />
        <Route path='/hookform' element={<HookForm></HookForm>}/>
    </Routes>



    </div>
  )

}

export default App;
