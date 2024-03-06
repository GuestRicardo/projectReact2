import { useReducer } from 'react';
import './App.css';

//estado Complexo
const globalState = {
  title: 'Estado Complexo',
  body: 'o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos',
  counter: 0
};

function App() {
  const[] = useReducer();
  return (
    <div>
      <h1>teste</h1>
    </div>
  );
}
export default App;

//o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos
//reducer é uma função que vai manipular seu estado
