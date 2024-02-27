//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//componentes
const Post = ({ post }) => {
  return (
    <div key={post.id} className='post' >
      <h1>{post.title}</h1>
      <p>By: {post.userId}</p>
    </div>
  );
}

//tipando o post acima(componente)
Post.propTypes ={
  post:P.shape({
    id:P.number,
    title:P.string,
    body:P.string,
  }),
}

function App() {
  const [posts, setPosts] = useState([]);
  console.log('Componente pai renderizado!');

  //component did mount
  useEffect(() => {
    setTimeout(
      () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((r) => r.json())
          .then((r) => setPosts(r));
      }, [5000]);
  }, []);
  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map((post) => {
          return (

          );
        })}
      {posts.length <= 0 && <p>Ainda não existe posts esta sendo carregado</p>}
    </div>
  );
}
export default App;

//a chave do return sempre será renderizada primeiro, pra depois ser buscado o useEfect
//o setTimeout serve para a espera do carregamento dos posts
//na tipagem sempre q for objeto será (shape) importantismo isso
