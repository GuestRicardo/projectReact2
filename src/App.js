//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//componentes
const Post = ({ post }) => {
  console.log('filho renderizou');
  return (
    <div key={post.id} className='post' >
      <h1>{post.title}</h1>
      <p>By: {post.userId}</p>
    </div>
  );
}
// const Input = ({ input }) => {
//   <div>
//     <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
//   </div>
// }

//tipando o post acima(componente)
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
}
// Input.propTypes = {
//   input: P.shape({
//     type: P.string,
//     value: P.string,
//   }),
// }

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

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
      <div>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      {posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />)}
      {posts.length <= 0 && <p>Ainda não existe posts esta sendo carregado</p>}
    </div>
  );
}
export default App;

//a chave do return sempre será renderizada primeiro, pra depois ser buscado o useEfect
//o setTimeout serve para a espera do carregamento dos posts
//na tipagem sempre q for objeto será (shape) importantismo isso
//observação qualquer momento q o estado muda sera renderizadoo estado inteiro
//toda vez q se busca o no input tudo q tem na api sera renderizado, isso é pessimo para o desempenho, para isso q se usa o useMemo
//para q o sistema tenha uma boa otimização, tambem e preciso tomar muito cuidado com a otimização prematura, antes da hra
//entao para ter certeza q nao precise q seja carregado tudo de uma vez toda vez q digitar qualquer coisa
//nao é preciso otimizar o codigo somente quando tiver problema
//pq quando e renderizado o componbente ele sera criado uma copia e fara uma comparação de estado
//para q tenha melhor desempenho sera feito o uso do use memo no componente inteiro
