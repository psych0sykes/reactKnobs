import React , {useState} from 'react';
import CoordinateCard from './components/CoordinateCard';
import './App.css';

function App() {

  const [mousePosition , setMousePosition] = useState([0,0])



  return (
    <div onMouseMove={(event) => setMousePosition([event.screenX,event.screenY])}>
      <div>
        <CoordinateCard xco={mousePosition[0]} yco={mousePosition[1]}/>
      </div>
    </div>
  );
}

export default App;
