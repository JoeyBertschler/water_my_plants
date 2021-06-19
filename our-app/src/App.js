import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from './components/Register'
import React, { useState } from 'react'


const initialFormValues = {
  username: '',
  phone: '',
  password: '',
}

export default function App() {
  const [formValues, setFormValues ] = useState(initialFormValues)

const formChange = (name,value) => {
  setFormValues({...formValues, [name]: value})
}

  return (
    <div className='App'>
      <div className='wrapper'>
        <header className='App-header'>
        <h1>Water my plants</h1>
        <p>
          Never forget when it's time to feed your foliage and quench your
          plants' thirst.
        </p>
      
      </header>
      <Link to='/'></Link>
      <Switch>
      <Route exact path='/register'>
          <Register
          formChange={formChange}
          values={formValues}
          />
        </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
      </Switch>
      </div>
    </div>
  );
}
