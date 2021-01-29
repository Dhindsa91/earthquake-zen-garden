import React, { Component } from 'react';
const data = require('../../data.json');

export default class Profile extends Component {
  render() {
    return (
      <div >
        <h1 className="title">Profile</h1>
        <div className="profile_container">
          <img className="profile_image" src={data.profile.avatarImage}></img>
          <table>
            <tr><td><b>First Name </b></td><td> {data.profile.firstName} </td></tr>
            <tr><td><b>Last Name</b></td><td>  {data.profile.lastName}</td></tr>
            <tr><td><b>Phone  </b></td><td> {data.profile.phone} </td></tr>
            <tr><td><b>Email  </b></td><td> {data.profile.email} </td></tr>
            <tr><td><b>Bio  </b></td><td> {data.profile.bio} </td></tr>
          </table>
        </div>
      </div>
    );
  }
};
