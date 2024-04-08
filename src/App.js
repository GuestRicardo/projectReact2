import P from 'prop-types'//esse proptypes é um react node
import { useReducer, createContext, useContext, useRef, useEffect, useState } from 'react';
import './App.css';

//criando um hook, ele é uma função no react
//ele vai simular o setInterval
const useMyHook = (callback, delay = 1000) => {
  //esta função stInterval esta na API do proprio node
  //para nao depender de dependencia sera usado o saveCallback, q sempre retornara essa função.
  //tambem esta sendo passado um deley que unicia depois de 1 segundo

  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current()
    }, delay);
    //lembrando q é sempre certo limpar o lixo da memoria, para isso usa o clearInterval
    return () => clearInterval(interval);
  }, [delay]);
};

//App.jsx
function App() {
  //estado
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(100);
  const [incrementor, setIncrementor] = useState(1000);

  //usando o hook
  useMyHook(() => setCounter((c) => c + 1), delay);
  return (
    <div>
      <h1>Contador:{counter}</h1>
      <h1>Deley:{delay}</h1>
      {/* //quando clicar no botao sera incrementado um novo valor */}
      <button onClick={()=>{setDelay((d)=>d + incrementor)}}>-{incrementor}</button>
      <button onClick={()=>{setDelay((d)=>d - incrementor)}}>+{incrementor}</button> <br />
      <p>Adicione o valor no input para q se incremente
      {/* ideia do input e mudar o valor do increment */}
      {/* onchange esta setando o valor do input no incremento, q no caso e o set incrementor, q e o estado atualizado*/}
      <input value={incrementor} onChange={(e) => setIncrementor(Number (e.target.value))} type="number" name="" id="" /></p>
    </div>
  );
}
export default App;
