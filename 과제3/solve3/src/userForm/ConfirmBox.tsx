import React from 'react';
import './ConfirmBox.css'

interface userInfo {
  id: number;
  name: string | undefined;
  password: string | undefined;
  duplicated: string;
}

interface props {
  userFormList: userInfo[];
}

function ConfirmBox(props: props) {
  return (
    <div className='confirmbox'>
      {props.userFormList.map((v) => {
        return (
          <div>
            <p>Name : {v.name}</p>
            <p>Password : {v.password}</p>
          </div>
        )
      })}
    </div>
  );
}

export default ConfirmBox;