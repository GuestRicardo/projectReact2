import P from 'prop-types'//esse proptypes é um react node
import { useReducer, createContext, useContext, useRef, useEffect, useState } from 'react';
import './App.css';

//ele vai simular o setInterval
const useMyHook = () => {

};

//App.jsx
function App() {
  //estado

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    //esta função stInterval esta na API do proprio node
    //esta sendo executado a cada 2 segundos
    const interval = setInterval(()=>{
      setCounter((c) => c + 1 );
    }, 2000);
  }, []);
 return (
  <div>
    <h1>Contador:{counter}</h1>
  </div>
);
}
export default App;
//criando um hook, ele é uma função no react
