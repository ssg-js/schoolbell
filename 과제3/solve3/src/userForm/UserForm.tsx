import React, { useEffect, useState } from 'react';
import './UserForm.css'
import { CgCloseR } from "react-icons/cg";

interface props {
  number: number;
}


function UserForm(props: props) {
  const [name, setName] = useState<string>(); // 유저 네임 상태
  const [password, setPassword] = useState<string>(); // 비밀번호 상태
  const [nameCheck, setNameCheck] = useState<boolean>(false); // 이름 3글자 이상인지 체크
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false) // 비밀번호 글자 이상 체크 상태


  const checkHandler = () => {
    if (typeof (name) != 'undefined') {
      if (name.length < 3) {
        setNameCheck(true);
      } else {
        setNameCheck(false);
      }
    }
    if (typeof (password) != 'undefined') {
      if (password.length < 6) {
        setPasswordCheck(true);
      } else {
        setPasswordCheck(false);
      }
    }
  }

  // 입력에 따른 로직들
  useEffect(() => {
    checkHandler();
    console.log(name, password);
  }, [name, password])

  return (
    <div className='userBox'>
      <div id='userInfo' className='set'>
        <h4>User - {props.number}</h4>
        <CgCloseR />
      </div>
      <div className='set'>
        <div className='type'>Name</div>
        <input type="text" id='box' onChange={(e) => { setName(e.target.value); }} />
        {nameCheck && <div className='warn'>Name must be at least 3 characters long.</div>}
      </div>
      <div className='set'>
        <div className='type'>Password</div>
        <input type="text" id='box' onChange={(e) => { setPassword(e.target.value); }} />
        {passwordCheck && <div className='warn'>Password must be at least 6 characters long.</div>}
      </div>
    </div>
  );
}

export default UserForm;