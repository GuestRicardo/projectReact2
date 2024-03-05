//import logo from './logo.svg';
import React from 'react';
import './App.css';

//estado
const globalState ={
  title: 'O titulo que contexto',
  counter: 0,
};

//contexto
const GlobalContext = React.createContext();

//componente
const Div = ({ children })=>{
  return <div className='App'>{children}</div>
}
const H1 = ({ children })=>{
  return <div className='App'>{children}</div>
}
//fim dos componentes

function App() {
  return (
    //usando o componente
    <Div>
      <h1>teste</h1>
    </Div>
  );
}
export default App;


//para entender primeiro sobre esse hook sera preciso entender o q é contexto
//é quando tem um componente, q dentro deste tem varios outros, para especificar outras atividades
//então seria varias propriedades descendo de niveis
//nesses casos nao é inviavel nesta situação, para isso q precisa do useCotext
//pq nao e ideal passar varias p´rops ate chegar o componente idela q deseja realizar a ação
//para isso é criado o estado global,

