import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { GrUpdate } from 'react-icons/gr';

const UserForm = ({ firstName, lastName, email, isEditClicked, handleAddBtn, handleChange, handleUpdateBtn, handleResetBtn, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="user-row">
      <div>
        <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleChange} />
      </div>
      <div>
        <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleChange} />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
      </div>
      {!isEditClicked ? (
          <FiPlusCircle title="Add User" onClick={handleAddBtn} size="25px" />
        ) : (
          <GrUpdate title="Update User" onClick={handleUpdateBtn} size="25px" />
      )}
    </div>
    <div className="form-btns">
      <button type="button" onClick={handleResetBtn} className="reset-btn">Reset</button>
      <button type="submit" className="save-btn">Save</button>
    </div>
  </form>
)

export default UserForm;
