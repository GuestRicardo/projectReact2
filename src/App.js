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
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div key={post.id} className='post' >
            <h1>{post.title}</h1>
            <p>By: {post.userId}</p>
          </div>
        )
      })}
    </div>
  )
}
export default App;

//a chave do return sempre será renderizada primeiro, pra depois ser buscado o useEfect
