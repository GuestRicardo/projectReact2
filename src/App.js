import P from 'prop-types'//esse proptypes é um react node
import { useReducer, createContext, useContext } from 'react';
import './App.css';

//simulando os locais

//actions.js
export const actions = {
  CHANGE_TITLE: "CHANGE_TITLE",
}

//data.js
//este seria um estado para se usar em qualquer lugar da aplicação por ser global
//um exemplo da vida real seria, um carrinho de compras q fica ao supérior direito da tela de um servComerce
export const globalState = {
  title: 'Estado Complexo',
  body: 'o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos',
  counter: 0
};
//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudando  o titulo');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

//inicio do componente
//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>
  );
}
//proptyp do appcontext, para ter children
AppContext.propTypes = {
  children: P.node,
}
//fim do componente

////H1/index.jsx
//componente inicio
export const H1 = () => {
  const context = useContext(Context);

  return (
    <h1 onClick={() => context.dispatch({ type: 'CHANGE_TITLE' })}>{context.state.title}</h1>
  );
}
//componente fim


//App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
        {/**este type é muito importante para action, e pode ser passado o quanto for preciso*/}

      </div>
    </AppContext>
  );
}
export default App;
