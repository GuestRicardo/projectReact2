//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from './context/App';

//estado inicial(objeto)=
//para passar para os componentes será preciso usar props


//contexto


function App() {
  //mudando o estado
  const [contextState, setContextstate] = useState(globalState);

  return (
    //usando o estado
    //dentro do estado esta os componentes
    //apartir do momento q recebe o valor o contexto será este no momento
    <GlobalContext.Provider value={{ contextState, setContextstate }}>
      <Div />
    </GlobalContext.Provider>
  );
}
export default App;

