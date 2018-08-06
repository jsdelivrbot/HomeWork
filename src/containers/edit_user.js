import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, deleteUser, updateUser} from '../actions/index';

class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = { firstname: '', lastname: '', address: '' ,isnew: true};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
    this.renderAddForm = this.renderAddForm.bind(this);
    this.renderUpdateForm = this.renderUpdateForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser != null)
    {
        this.setState({ firstname: newProps.currentUser.firstname, lastname: newProps.currentUser.lastname, address: newProps.currentUser.address, isnew: false});
    } else {
      this.setState({ firstname: '', lastname: '', address: '', isnew: true});
    }
    console.log("Component will mount exit");
  }

  onInputChange(event) {
    const idkey = event.target.id;
    switch (idkey) {
      case 'firstname':
        this.setState({firstname: event.target.value});
        break;
      case 'lastname':
        this.setState({lastname: event.target.value});
        break;
      case 'address':
        this.setState({address: event.target.value});
        break;
      default:
        console.log("Unknown id key " + idkey);
      }
  }

  onFormSubmit(event) {
    event.preventDefault();

    const newUser = {'firstname': this.state.firstname,
                  'lastname': this.state.lastname,
                  'address': this.state.address
                };
    this.props.addUser(newUser);

    this.setState({ firstname: '', lastname: '', address: '', isnew: true});
  }

  onUpdateSubmit(event) {
    event.preventDefault();

    const updateUser = {'firstname': this.state.firstname,
                  'lastname': this.state.lastname,
                  'address': this.state.address,
                  'key': this.props.currentUser.key
                };

    if (event.target.id === "deleteUser") {
      this.props.deleteUser(updateUser);
    } else {
      this.props.updateUser(updateUser);
    }
    this.setState({ firstname: '', lastname: '', address: '', isnew: true});
  }

  renderAddForm() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input id="firstname" placeholder="Firstname"
              className="form-control"
              value={this.state.firstname}
              onChange={this.onInputChange}/>
        <input id="lastname" placeholder="Lastname"
                    className="form-control"
                    value={this.state.lastname}
                    onChange={this.onInputChange}/>
        <input id="address" placeholder="Address"
                    className="form-control"
                    value={this.state.address}
                    onChange={this.onInputChange}/>
        <span className="input-group-button">
        <button id="addUser" type="submit" className="btn btn-secondary">Add User</button>
        </span>
      </form>
    );
  }

  renderUpdateForm() {
    return (
    <div>
    <form onSubmit={this.onUpdateSubmit} className="input-group">
      <input id="firstname" placeholder="Firstname"
            className="form-control"
            value={this.state.firstname}
            onChange={this.onInputChange}/>
      <input id="lastname" placeholder="Lastname"
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.onInputChange}/>
      <input id="address" placeholder="Address"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.onInputChange}/>
      <span className="input-group-button">
      <button id="updateUser" onClick={this.onUpdateSubmit} className="btn btn-secondary">Update User</button>
      <button id="deleteUser" onClick={this.onUpdateSubmit} className="btn btn-secondary">Delete User</button>
      </span>
    </form>
    </div>
  );
  }

  render () {
    if (this.state.isnew ) {
      return this.renderAddForm();
    } else {
      return this.renderUpdateForm();
    }
  }
}
function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser, deleteUser, updateUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (EditUser);
