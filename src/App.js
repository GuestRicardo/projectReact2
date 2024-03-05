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


//primeiramente para usar o useContext será preciso ter o estado inicial
//é um objeto
//agora o proximo passo é criar um componente de contexto(esse e preciso importar o react)
//esse contexto tera 2 componentes o proveder e o consumer, o consumer aceita tambem o estado inicial
//são 3 componentes
// na função APP é onde vai ser disponibilizado o contexto para todos os filhos
// o use state esta ai para alterar o estado inicial do counter
//dento do componente global esta todos os filhos
// o contexto disponibliza o contexto para qualquer chave, valores, estados ou funções para dentro dos componentes
//tendo acesso ao state, assim todos os componentes teram essa atualização
