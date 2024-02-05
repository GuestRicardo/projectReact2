import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //useState
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
        <button type="button" onClick={}>Reverse</button>
        </p>
      </header>
    </div>
  );
}

export default App;
