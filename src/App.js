import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Destination from './components/Destination'
import Crew from './components/Crew';
import Technology from './components/Technology';
import './Styles/main.scss';

function App() {
  return (
    <Fragment>
      
      <BrowserRouter>
        <Nav />   
        <Routes>
          <Route path="/reactproject1/" element={<Home />} />
          <Route path="/reactproject1/destination" element={<Destination />} />
          <Route path='/reactproject1/crew' element={<Crew />} />
          <Route path='/reactproject1/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
