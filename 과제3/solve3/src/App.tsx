import React, { useEffect, useState } from 'react';
import './App.css';
import UserForm from './userForm/UserForm';
import { truncate } from 'fs';
import ConfirmBox from './userForm/ConfirmBox';

interface userInfo {
  name: string | undefined;
  password: string | undefined;
  duplicated: string;
}


function App() {
  // 전체 사용자의 정보를 관리합니다.
  const [users, setUsers] = useState<userInfo[]>([{ name: undefined, password: undefined, duplicated: '' }]);
  const [confirmCheck, setConfirmCheck] = useState<boolean>(true);
  const [confirmClicked, setConfirmClicked] = useState<boolean>(false);

  // 사용자를 추가합니다. Add User 버튼에 클릭 이벤트 시 실행됩니다.
  const addHandler = () => {
    setUsers([...users, { name: undefined, password: undefined, duplicated: '' }]);
  }

  // UserForm 컴포넌트에 넘겨줄 사용자의 정보를 바꾸는 함수입니다.
  const infoHandler = (idx: number, args: userInfo) => {
    let tempArr = [...users];
    tempArr[idx] = args;
    console.log(tempArr);
    setUsers(tempArr);
  }

  const clickHandler = () => {
    setConfirmClicked(true);
    let copyUsers = [...users];
    // 유저정보를 초기화합니다.
    setUsers([{ name: undefined, password: undefined, duplicated: '' }]);
  }

  // name 중복 유무를 체크합니다.
  const duplicatedCheck = () => {
    let usersCopy: userInfo[] = [...users]
    let isDuplicated: boolean = false;
    users.forEach((v, idx) => {
      for (let i = 0; i < users.length; i++) {
        if (idx !== i && v.name === users[i].name) {
          isDuplicated = true;
          if (v.name) {
            usersCopy[idx].duplicated = v.name;
            usersCopy[i].duplicated = v.name;
          }
        }
      }
      if (isDuplicated === false) {
        usersCopy[idx].duplicated = '';
      }
    })
    setUsers([...usersCopy])
  }

  // 입력값이 바뀔 때마다, confirm 버튼의 활성화 유무를 결정합니다.
  useEffect(() => {
    let isDisabled: boolean = false;
    users.forEach((v) => {
      // confirm 버튼을 위한 체크입니다.
      if (v.name === undefined || v.password === undefined || (v.name != undefined && v.name.length < 3) || (v.password != undefined && v.password.length < 6)) {
        isDisabled = true;
      }
    })
    setConfirmCheck(isDisabled);

  }, [users])

  return (
    <div className="App">
      {users.map((v: userInfo, idx: number) => { return <UserForm number={idx} userInfo={v} infoHandler={infoHandler} key={idx} duplicatedCheck={duplicatedCheck} /> })}
      {confirmClicked && <ConfirmBox />}
      <div className='button'>
        <button onClick={addHandler}>Add User</button>
        <button onClick={clickHandler} disabled={confirmCheck}>Confirm</button>
      </div>
    </div>
  );
}

export default App;
