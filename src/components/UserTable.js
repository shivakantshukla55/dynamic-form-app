import React from 'react';
import { FiMinusCircle } from 'react-icons/fi';

const UserTable = ({ userList, handleDeleteBtn, handleNextBtn }) => (
  <div className="user-table">
    <h2>List of Users</h2>
    {userList.map((item, index) => (
      <ul key={index} className="user-list">
        <li>{item.firstName}</li>
        <li className="usertable-btns">
          <button onClick={() => handleNextBtn(index)}>Next</button>
          <FiMinusCircle onClick={() => handleDeleteBtn(index)} size="25px" />
        </li>
      </ul>
    ))}
  </div>
)

export default UserTable;
