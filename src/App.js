//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [posts, setPosts] = useState([]);
  console.log('Componente pai renderizado!');

  //component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.json());
    .then((r) => setPosts(r));
  }, []);

  return (
    <div className='App'>
      <h1>teste</h1>
    </div>
  );
}

export default App;


