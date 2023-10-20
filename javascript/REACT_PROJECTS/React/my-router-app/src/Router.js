import React from 'react';
import { Navbar } from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home.js';
import { Dashboard } from './Dashboard.js';
import { About } from './About.js';
import {Calc} from './Calc.js'
import {Calculator} from './Calculator.js'
import {LoginForm} from './LoginForm'
import {DataInput} from './filterDataInput.js'
import  DisplayNames from './DisplayNames'
export function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator1" element={<Calc />} />
          <Route path="/calculator2" element={<Calculator/>}/>
          <Route path="/loginform" element={<LoginForm/>}/>
          <Route path="/filterdata" element={<DataInput/>}/>
          <Route path="/displayname" element={<DisplayNames/>}/>
        </Routes>
      </BrowserRouter>
      <br />
      <br />
    </div>
  );
}
