import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <header className="App-header"> 

        <BrowserRouter>
          <Routes>

            <Route path='/' element = {<Home/>} />

          </Routes>
        </BrowserRouter>     
      </header>
    </div>
  );
}

export default App;
