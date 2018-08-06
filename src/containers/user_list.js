import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/index';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.userSelected = this.userSelected.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }
  userSelected(user,event) {

    this.props.selectUser(user);
  }
  renderUser(userData)
  {
    const firstname = userData.firstname;
    const lastname = userData.lastname;
    const address = userData.address;
    const key = userData.key;
    const user = {
      key: key, // for now just last name
      firstname: userData.firstname,
      lastname: userData.lastname,
      address: userData.address
    }

    return (
      <tr onClick={this.userSelected.bind(this, user)} key={key}>
        <td>{ firstname }</td>
        <td>{ lastname }</td>
        <td>{ address }</td>
      </tr>
    )
  }
  render()
  {
    return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {this.props.users.map(this.renderUser)}
      </tbody>
    </table>
  );
  }
}

function mapStateToProps(state) {
  return { users: state.usersList }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
