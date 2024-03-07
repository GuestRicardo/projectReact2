import { useReducer } from 'react';
import './App.css';

//estado Complexo
const globalState = {
  title: 'Estado Complexo',
  body: 'o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos',
  counter: 0
};

//função para manipular seu estado como reducer
const reducer =(state, action) =>{
  return {...state};
};

function App() {
  const[] = useReducer(reducer, );
  return (
    <div>
      <h1>teste</h1>
    </div>
  );
}
export default App;

//o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos
//reducer é uma função que vai manipular seu estado, lembrando sempre que usar uma função reducer sera preciso retornar um estado
//a função reducer recebe 2 propriedades o estado atual e o action
//a função recebe o estado atual e retorna o novo estado
//observação o context geralmente e mais organizado com reduce
