//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { useMemo } from 'react';
import { useEffect } from 'react';


function App() {
  console.log('Componente pai renderizado!');
  //component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts');
  },[ ]);
  return (
    <div className='App'>
      <h1>teste</h1>
    </div>
  );
}

export default App;


