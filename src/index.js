import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './css/style.scss';
import './css/font-awesome.min.css';
import './css/themify-icons.css';

import Header from './components/Header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import MyForm from './components/form';
import Footer from './components/footer';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
   
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/form">
            <MyForm/>
          </Route>
        </Switch>
      </div>
    </Router>

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
