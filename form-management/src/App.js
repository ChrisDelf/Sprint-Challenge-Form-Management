import React from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';
import FormikUserForm from './Components/UserForm';
import FormikLoginForm from './Components/Login';

function App() {
  return (
    <div className="App">
    <Route path='/' exact component ={FormikUserForm} />
    <Route path='/login' component ={FormikLoginForm} />
          </div>
  );
}
export default App;
