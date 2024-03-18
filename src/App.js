import P from 'prop-types'//esse proptypes é um react node
import { useReducer, createContext, useContext } from 'react';
import './App.css';

//simulando os locais
//data.js
export const globalState = {
  title: 'Estado Complexo',
  body: 'o useReducer e muito similar ao useState so q ele foi projetado para trabalhar com estados complexos',
  counter: 0
};
//reducer.js
export const reducer = (state, action) => {
  return { ...state }
}

//inicio do componente
//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <Context.Provider value={{ state }}>{children}</Context.Provider>
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
    <h1>{context.state.title}</h1>
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
