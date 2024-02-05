import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //useState
  //para inversao do giro da logo
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';
  const handleClick  = () => {
    setReverse(!reverse);
  }
  //----------------------------------------
//para contar os clicks no button
  const [counters, setCounters]=useState(0);
  const handeIncrement = () =>{
    setCounters(counters+1);
  };
  //------------------------------------------------
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: { counters }</h1>
        <p>
        <button type="button" onClick={ handleClick }>Reverse {reverseClass} </button>
        </p>
        <p>
        <button type="button" onClick={ counters }>Incrementando {handeIncrement} </button>
        </p>
      </header>
    </div>
  );
}

export default App;
