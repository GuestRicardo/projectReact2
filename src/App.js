import P from 'prop-types'//esse proptypes é um react node
import { useReducer, createContext, useContext, useRef } from 'react';
import './App.css';


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
