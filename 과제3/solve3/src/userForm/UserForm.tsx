import React, { useEffect, useState } from 'react';
import './UserForm.css'
import { CgCloseR } from "react-icons/cg";

interface userInfo {
  name: string | undefined;
  password: string | undefined;
}

interface props {
  number: number;
  userInfo: userInfo;
  infoHandler: (idx: number, args: userInfo) => void;
}

function UserForm(props: props) {

  const nameWarning = () => {
    if (props.userInfo.name !== undefined) {
      if (props.userInfo.name.length === 0) {
        return (<div className='warn'>Name is required.</div>);
      } else if (props.userInfo.name.length < 3) {
        return (<div className='warn'>Name must be at least 3 characters long.</div>);
      }
    }
  }

  const passwordWarning = () => {
    if (props.userInfo.password !== undefined) {
      if (props.userInfo.password.length === 0) {
        return (<div className='warn'>password is required.</div>);
      } else if (props.userInfo.password.length < 6) {
        return (<div className='warn'>password must be at least 6 characters long.</div>);
      }
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
        <input type="text" id='box' onBlur={(e) => { props.infoHandler(props.number, { ...props.userInfo, name: e.target.value }); }} onChange={(e) => { props.infoHandler(props.number, { ...props.userInfo, name: e.target.value }); }} />
        {nameWarning()}
      </div>
      <div className='set'>
        <div className='type'>Password</div>
        <input type="text" id='box' onBlur={(e) => { props.infoHandler(props.number, { ...props.userInfo, password: e.target.value }); }} onChange={(e) => { props.infoHandler(props.number, { ...props.userInfo, password: e.target.value }); }} />
        {passwordWarning()}
      </div>
    </div>
  );
}

export default UserForm;