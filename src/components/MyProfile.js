import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "",
    description: "",
  };

  handleFieldChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="container">
        <h1>My Profile</h1>
        <form className="my_profile" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleFieldChange("name", e)}
              className="form-control"
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Gender</label>
            <input
              type="text"
              value={this.state.gender}
              onChange={(e) => this.handleFieldChange("gender", e)}
              className="form-control"
              id="gender"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea rows="3" cols="20"
              type="text"
              value={this.state.description}
              onChange={(e) => this.handleFieldChange("description", e)}
              className="form-control"
              id="description"
            />
          </div>
          <div className="form-group">
            <input type="checkbox" />I have read the terms of conduct
          </div>
          <div className="form-group">
            <input
              disabled={!this.state.name && !this.state.gender}
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MyProfile;


