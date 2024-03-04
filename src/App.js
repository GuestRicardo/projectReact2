//import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//componentes
const Post = ({ post, handleClick }) => {
  console.log('filho renderizou');
  return (
    <div key={post.id} className='post' >
      <h1 onClick={()=> handleClick()}>{post.title}</h1>
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

  console.log('Componente pai renderizado!');

  //component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  const handleClick =()=>{

  }

  return (
    <div className="App">
      <div>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick}/>;
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
