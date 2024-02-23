import './App.css';
import { useState } from 'react';
import DisplayPosts from './components/DisplayPosts';
import DisplayUsers from './components/DisplayUsers';

function App() {

  const [ userId, setUserId ] = useState<number>(0);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id } = e.target;

    setUserId(id);
  };

  return (
    <div className='main'>
      <DisplayUsers handleClick={handleClick} />
      <DisplayPosts userId={userId}/>
    </div>
  );
}

export default App;
