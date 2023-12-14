import React, { useState } from 'react';
import './App.css';
import UserForm from './userForm/UserForm';

function App() {
  const [arr, setArr] = useState<number[]>([0]);

  const arrHandler = () => {
    setArr([...arr, arr.length]);
  }


  return (
    <div className="App">
      {arr.map((n) => { return <UserForm number={n} /> })}
      <div className='button'>
        <button onClick={arrHandler}>Add User</button>
        <button>Confirm</button>
      </div>

    </div>
  );
}

export default App;
