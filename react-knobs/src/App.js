import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoordinateCard from './components/CoordinateCard';
import Home from './Pages/Home';
import './App.css';

function App() {

  const [mousePosition , setMousePosition] = useState([0,0])



  return (
    <Router>
      <div onMouseMove={(event) => setMousePosition([event.screenX,event.screenY])}>
        <div>
          <CoordinateCard xco={mousePosition[0]} yco={mousePosition[1]}/>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
