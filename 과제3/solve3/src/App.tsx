import React, { useEffect, useState } from 'react';
import './App.css';
import UserForm from './userForm/UserForm';
import { truncate } from 'fs';

interface userInfo {
  name: string | undefined;
  password: string | undefined;
}


function App() {
  // 전체 사용자의 정보를 관리합니다.
  const [users, setUsers] = useState<userInfo[]>([{ name: undefined, password: undefined }]);
  const [confirmCheck, setConfirmCheck] = useState<boolean>(true);

  // 사용자를 추가합니다. Add User 버튼에 클릭 이벤트 시 실행됩니다.
  const addHandler = () => {
    setUsers([...users, { name: undefined, password: undefined }]);
  }

  // UserForm 컴포넌트에 넘겨줄 사용자의 정보를 바꾸는 함수입니다.
  const infoHandler = (idx: number, args: userInfo) => {
    let tempArr = [...users];
    tempArr[idx] = args;
    setUsers(tempArr);
  }

  // 입력값이 바뀔 때마다, name의 중복유무와 confirm 버튼의 활성화 유무를 결정합니다.
  useEffect(() => {
    let isDisabled: boolean = false;
    users.forEach((v, idx) => {
      if (v.name === undefined || v.password === undefined || (v.name && v.name.length < 3) || (v.password && v.password.length < 6)) {
        isDisabled = true;
      }
    })
    setConfirmCheck(isDisabled);
  }, [users])
  console.log(users);
  console.log(confirmCheck);
  return (
    <div className="App">
      {users.map((v: userInfo, idx: number) => { return <UserForm number={idx} userInfo={v} infoHandler={infoHandler} key={idx} /> })}
      <div className='button'>
        <button onClick={addHandler}>Add User</button>
        <button disabled={confirmCheck}>Confirm</button>
      </div>
    </div>
  );
}

export default App;
