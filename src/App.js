import { useReducer } from 'react';
import './App.css';

//estado Complexo
const globalState = {
  title: 'Estado Complexo',
  body: 'o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos',
  counter: 0
};

//função para manipular seu estado como reducer
//eslint-disable-next-line
const reducer = (state, action) => {
  //eslint-disable-next-line
  switch (action.type) {
    case 'muda': {
      console.log('quando clicar no button ira mudar o estado atraves do dispatch, q esta usando a action para carregar essa mensagem com payload que seria a data atual', action.payload);
      //a spread vai garantior oq estava anteriormente seja exibido, esta sendo pegou tudo q esta no estado anterior
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('chamou inverter, com isso o titulo sera escrito de tras pra frente');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') }
    }
  }
  console.log('nenhuma açaõ encontrada')
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  //os 3 estao vindo do state
  const { title, counter, body } = state;
  return (
    <div>
      <h1>{title} {counter}</h1>
      {/**este type é muito importante para action, e pode ser passado o quanto for preciso*/}
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>Mudar</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
    </div>
  );
}
export default App;
