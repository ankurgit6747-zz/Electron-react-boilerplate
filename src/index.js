
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Profile';
import { BrowserRouter, Route } from "react-router-dom";
 

 
ReactDOM.render(
  <>
     <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={App} />
          <Route path="/Profile" exact component={Profile} />
        </div>
      </BrowserRouter>
  </>,
  document.getElementById('root')
);
 

