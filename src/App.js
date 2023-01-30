import React from 'react'
import './App.css';
import Header from "./Components/Header/Header"
import Fortnite from "./Components/Fortnite/Fortnite"
import Apex from "./Components/Apex/Apex"
import Home from './Components/Home/Home';
import Ftnitem from './Components/Ftnitem/Ftnitem';
import { AnimatePresence } from 'framer-motion';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
        <div className="App">
        <Header/>
          <AnimatePresence>
        <Routes>
            <Route path='/Home' exact element={<Home />}/>
            <Route path='/Fortnite'  element={<Fortnite />}/>
            <Route path='/Apex' element={<Apex />}/>          
            <Route path='/Ftnitem/:id' exact element={<Ftnitem />}/>
        </Routes>
          </AnimatePresence>
         
      </div>      
    </Router>
  );
}

export default App;
