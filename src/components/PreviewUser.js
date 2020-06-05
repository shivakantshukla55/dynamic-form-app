import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const PreviewUser = ({ selectedUser, handleCloseBtn, handleEditBtn }) => (
  <div className="preview-container">
    <ul className="preview-list">
      <li>
        <h2>User Details</h2>
      </li>
      <li>
        <span>First Name:</span>
        {selectedUser.firstName}
      </li>
      <li>
        <span>Last Name:</span> 
        {selectedUser.lastName}
      </li>
      <li>
        <span>Email:</span>
        {selectedUser.email}
      </li>
      <li className="preview-btns">
        <FiEdit2 title="Edit" onClick={handleEditBtn} size="25px" />
        <AiOutlineCloseCircle title="Close" onClick={handleCloseBtn} size="25px" />
      </li>
    </ul>
  </div>
)


export default PreviewUser;
