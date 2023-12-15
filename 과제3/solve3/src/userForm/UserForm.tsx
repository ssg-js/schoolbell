import React, { useEffect, useState } from 'react';
import './UserForm.css'
import { CgCloseR } from "react-icons/cg";

interface userInfo {
  name: string | undefined;
  password: string | undefined;
  duplicated: boolean;
}

interface props {
  number: number;
  userInfo: userInfo;
  infoHandler: (idx: number, args: userInfo) => void;
}

function UserForm(props: props) {
  // 이름 글자수를 검사합니다. 이름 중복여부로 검사합니다.
  const nameWarning = () => {
    if (props.userInfo.name !== undefined) {
      if (props.userInfo.name.length === 0) {
        return (<div className='warn'>Name is required.</div>);
      } else if (props.userInfo.name.length < 3) {
        return (<div className='warn'>Name must be at least 3 characters long.</div>);
      } else { // 이름이 3자 이상인 경우입니다.
        if (props.userInfo.duplicated === true) {
          return (<div className='warn'>The name '{props.userInfo.name}' is duplicated.</div>);
        }
      }
    }

  }
  // 비밀번호 글자수를 검사합니다.
  const passwordWarning = () => {
    if (props.userInfo.password !== undefined) {
      if (props.userInfo.password.length === 0) {
        return (<div className='warn'>password is required.</div>);
      } else if (props.userInfo.password.length < 6) {
        return (<div className='warn'>password must be at least 6 characters long.</div>);
      }
    }
  }

  // name 처음 클릭했을때, undefined => 0으로 값을 바꿔줍니다.
  const nameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      props.infoHandler(props.number, { ...props.userInfo, name: e.target.value });
      console.log('???');
    }
  }

  // password 처음 클릭했을때, undefined => 0으로 값을 바꿔줍니다.
  const passwordBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      props.infoHandler(props.number, { ...props.userInfo, password: e.target.value });
    }
  }

  return (
    <div className='userBox'>
      <div id='userInfo' className='set'>
        <h4>User - {props.number}</h4>
        <CgCloseR />
      </div>
      <div className='set'>
        <div className='type'>Name</div>
        <input type="text" id='box' onBlur={nameBlur} onChange={(e) => { props.infoHandler(props.number, { ...props.userInfo, name: e.target.value }); }} />
        {nameWarning()}
      </div>
      <div className='set'>
        <div className='type'>Password</div>
        <input type="text" id='box' onBlur={passwordBlur} onChange={(e) => { props.infoHandler(props.number, { ...props.userInfo, password: e.target.value }); }} />
        {passwordWarning()}
      </div>
    </div>
  );
}

export default UserForm;