//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { AppContext} from './context/AppContext';
import { Div } from './components/Div';

function App() {
  //mudando o estado

  return (
<AppContext>
  {/**Tudo que eu passar aq sera filho do AppContext */}
  <Div>

  </Div>
</AppContext>
  );
}
export default App;

