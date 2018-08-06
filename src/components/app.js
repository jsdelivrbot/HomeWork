import React, { Component } from 'react';

import EditUser from "../containers/edit_user";
import UserList from "../containers/user_list";

export default class App extends Component {
  render() {
      return (
        <div>
          <EditUser />
          <UserList />
        </div>
      );
  }
}
