import P from 'prop-types'//esse proptypes é um react node
import { useReducer, createContext, useContext, useRef, useEffect, useState } from 'react';
import './App.css';

//criando um hook, ele é uma função no react
//ele vai simular o setInterval
const useMyHook = (callback) => {
  //esta função stInterval esta na API do proprio node
  //esta sendo executado a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, 2000);
    //lembrando q é sempre certo limpar o lixo da memoria, para isso usa o clearInterval
    return () => clearInterval(interval);
  }, [callback]);
};

//App.jsx
function App() {
  //estado
  const [counter, setCounter] = useState(0);

  //usando o hook
  useMyHook(() => {
    setCounter((c) => c + 1);
  });

  return (
    <div>
      <h1>Contador:{counter}</h1>
    </div>
  );
}
export default App;
