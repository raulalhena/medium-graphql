import { useEffect, useState } from 'react';
import './App.css';

interface IUser {
  id: number;
  name:string;
  email:string;
}

function App() {

  const [ data, setData ] = useState<IUser>([ {
    id: null,
    name: '',
    email: ''
  } ]);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: `query { users { id name email } }` })
      });

      const result = await resp.json();
      console.log('RESULT ', result);
      setData(result.data.users);
    };

    getData();

  }, []);

  const [ userPosts, setUserPosts ] = useState([]);

  const getUserPosts = async (id) => {
    const resp = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: `query { findUserPosts(userId: "${id}") { id title content } }` })
      });

    const result = await resp.json();
    console.log('POSTS ', result);
    setUserPosts(result.data.findUserPosts);

  };

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id } = e.target;

    getUserPosts(id);
  };

  return (
    <div className='main'>
      <center><h1 style={{ color: 'lightcoral' }}>Blog Space</h1></center>
      <div className='users-container'>
        <h2 style={{ color: 'orange' }}>Users</h2>
        {
          data.map((user) => (
            <div key={ user.id } >
              <a href='#' id={ user.id } onClick={handleClick}>{ user.name }</a>
            </div>
          ))
        }
      </div>
      <div className='posts-container'>
        <h2 style={{ color: 'orange' }}>Posts</h2>
        <div className='posts-list'>
          
          { 
            userPosts.map((post) => (
              <div key={ post.id }>
                <h3> { post.title } </h3>
                <article>{ post.content } <a href='#' id={ post.id } style={{ fontSize: '0.7rem' }}>Leer mas</a></article>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
