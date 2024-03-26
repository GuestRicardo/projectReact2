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
    const interval = setInterval();
  },[])
  return (

    <div>
      <h1>Teste</h1>
    </div>

  );
}
export default App;
//criando um hook, ele é uma função no react
