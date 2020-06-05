import React, { Component } from 'react';

import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import PreviewUser from './components/PreviewUser';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    userList: [],
    isNextClicked: false,
    selectedUser: {},
    isEditClicked: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddBtn = () => {
    const value = [...this.state.userList];

    if (this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "") {
      value.push({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      });
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        userList: value
      });
    }
  };

  handleNextBtn = (index) => {
    const value = this.state.userList[index];
    this.setState({
      isNextClicked: true,
      selectedUser: value
    });
  };

  handleDeleteBtn = (index) => {
    const value = [...this.state.userList];
    value.splice(index, 1);
    this.setState({userList: value});
  };

  handleCloseBtn = () => {
    this.setState({isNextClicked: false});
  };

  handleEditBtn = () => {
    this.setState({
      firstName: this.state.selectedUser.firstName,
      lastName: this.state.selectedUser.lastName,
      email: this.state.selectedUser.email,
      isEditClicked: true
    });

    window.scrollTo(0, 0);
  };
  
  handleUpdateBtn = () => {
    const value = [...this.state.userList];
    const index = value.indexOf(this.state.selectedUser);
    
    if (index !== -1) {
      value[index] = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      userList: value,
      isNextClicked: false,
      isEditClicked: false
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.stringify(this.state.userList);
    if (this.state.userList.length > 0) {
      window.alert(users);
    } else {
      window.alert("please add user");
    }
  };

  handleResetBtn = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      userList: [],
      isNextClicked: false,
      selectedUser: {},
      isEditClicked: false
    });
  };

  render() {
    const { userList, isNextClicked } = this.state;
    
    const handlers = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      handleAddBtn: this.handleAddBtn,
      handleUpdateBtn: this.handleUpdateBtn,
      handleResetBtn: this.handleResetBtn,
      handleNextBtn: this.handleNextBtn,
      handleDeleteBtn: this.handleDeleteBtn,
      handleCloseBtn: this.handleCloseBtn,
      handleEditBtn: this.handleEditBtn
    }

    return(
      <div>
        <h1>Dynamic Form App</h1>
        <UserForm {...this.state} {...handlers} />
        {userList.length > 0 && 
          <UserTable {...this.state} {...handlers} />
        }
        {isNextClicked && 
          <PreviewUser {...this.state} {...handlers} />
        }
      </div>
    )
  }
}

export default App;
