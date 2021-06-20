import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from './components/Register'

export default function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <header className='App-header'>
        <h1 style={{
              color: 'white',
            }}>
         Water my plants
        </h1>
        <p>
          Never forget when it's time to feed your foliage and quench your
          plants' thirst.
        </p>
      
      </header>
      <Link to='/'></Link>
      <Switch>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route exact path='/register'>
          <Register/>
      </Route>

      </Switch>
      </div>
    </div>
  );
}
