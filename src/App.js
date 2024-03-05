//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useContext } from 'react';
import { useState } from 'react';

//estado inicial(objeto)=
//para passar para os componentes será preciso usar props
const globalState = {
  title: 'O titulo que contexto',
  body: 'O body do contexto',
  counter: 0,
};

//contexto
const GlobalContext = React.createContext();

//componente
const Div = ({ children }) => {
  return (
    //com elementos irmãos
    <>
      <H1 />
      <Body />
    </>
  );
}
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return <h1>{title} {counter} </h1>
}
const Body = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter }, setContextstate
  } = theContext;
  return (
    <p
      onClick={()=>setContextstate((spred)=>({ ...spred, counter:spred.counter ++}))}
    >
      {body}
    </p>
  );
}
//fim dos componentes

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


//para entender primeiro sobre esse hook sera preciso entender o q é contexto
//é quando tem um componente, q dentro deste tem varios outros, para especificar outras atividades
//então seria varias propriedades descendo de niveis
//nesses casos nao é inviavel nesta situação, para isso q precisa do useCotext
//pq nao e ideal passar varias p´rops ate chegar o componente idela q deseja realizar a ação
//para isso é criado o estado global,
//para passar o contexto sera o estado inicial, e com a propriedade Provider, o q os componentes veem para controlar sera o value(valor)
// q será passado pelo contexto, entao resulmo, o contexto recebe o estado para q o componente possa o ver
//com useContext esta sendo pegado elementos do filho sem preisar de props de forma direta, mo caso o titulo q esta no estado
//isso significa q podemos pegar dados direto de qualquer contexto
