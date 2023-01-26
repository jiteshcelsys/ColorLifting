import logo from './logo.svg';
import './App.css';
import Controlled from './Controlled';
import UnControlled from './UnControlled';
import React, { useContext,useState } from 'react';
import Color from './Components/Color'
const data = React.createContext();
const data2 = React.createContext();


function App() {
const [state, setstate] = useState("");
console.log(state);
function getColor(value){
  setstate(value)
}

  return (
    <div className="App">
      
      <h1 style={{color:`${state}`}}>App Color</h1>
  <Color getColor ={getColor}/>
    </div>
  );
}

export default App;
export {data,data2}
