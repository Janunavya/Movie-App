import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Add} from './components/Add';
import {Watched} from './components/Watched';
import "./lib/font-awesome/css/all.min.css";
import {GlobalProvider} from './context/Globalstate'


function App() {
  return (
   <GlobalProvider>
      <Router>
        <Header/>
        <Routes>
          <Route  path={`/`} element={ <Watchlist/>}/>
          <Route  path={`/watched`} element={ <Watched/>}/>
          <Route  path={`/add`} element={ <Add/>}/>
        </Routes>
      </Router>
   </GlobalProvider>
    
  );
}

export default App;
    