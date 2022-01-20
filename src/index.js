import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import Signup from './components/Signup';
import Privacypolicy from './components/Privacypolicy';
import Termsandcondtion from './components/Termsandcondition';
import Articledetails from './components/Articledetails';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/privacypolicy" element={<Privacypolicy/>}/>
    <Route path="/Termsandcondition" element={<Termsandcondtion/>}/>
    <Route path="/Articledetails" element={<Articledetails/>}/>
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
