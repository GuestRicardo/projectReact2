//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';


//componentes
const Post = ({ post, handleClick }) => {
  console.log('filho renderizou');
  return (
    <div key={post.id} className='post' >
      <h1 style={{ color: 'blue' }} onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>By: {post.userId}</p>
    </div>
  );
}


//tipando o post acima(componente)
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
}


function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Componente pai renderizado!');

  //component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  //input
  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

    //contador
    useEffect(() => {
      contador.current++;
    });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <div>
        <h3>Renderizou: {contador.current} vezes.</h3>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        )
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existe posts esta sendo carregado</p>}
    </div>
  );
}
export default App;

//exemplo q sera usado aq, será pego a referencia, é que quando clicar no titulo do texto
//ele sera automaticamente carredo no input
// o react esta atrelando o input com o ref q foi usado
//toda vez q o input mudar ele estará em foco
