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
    case 'muda':
      console.log('quando clicar no button ira mudar o estado atraves do dispatch, q esta usando a action para carregar essa mensagem');
      //a spread vai garantior oq estava anteriormente seja exibido, esta sendo pegou tudo q esta no estado anterior
      return { ...state, title: 'mudou!' };
  }

  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  //os 3 estao vido do state
  const { title, counter, body } = state;
  return (
    <div>
      <h1>{title} {counter}</h1>
      {/**este type é muito importante para action, e pode ser passado o quanto for preciso*/}
      <button onClick={() => dispatch({ type: 'muda' })}>Click</button>
    </div>
  );
}
export default App;

//o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos
//reducer é uma função que vai manipular seu estado, lembrando sempre que usar uma função reducer sera preciso retornar um estado
//a função reducer recebe 2 propriedades o estado atual e o action
//a função recebe o estado atual e retorna o novo estado
//observação o context geralmente e mais organizado com reduce
//o dispatch serve para dispachar coisas(disparar ações) comum usar objetos e definir o tipo da ação

//função para manipular seu estado como reducer
// const reducer =(state, action) =>{
//   return {...state};
// };

//quando clica no botão(action), ele vai chamar a função reducer que vai da acesso ao estado anterior e a ação q foi disparada, com isso
//foi criada uma condicional, para comparar o type, se caso estiver diferente será voltado para o estado anterior,
//ao contrario o titulo irá passar para mudou!, como esta definido acima
