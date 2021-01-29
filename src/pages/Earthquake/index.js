import React, { Component } from 'react';
const data = require('../../data.json')


export default class Earthquake extends Component {

  constructor(props) {
    super(props);
    this.state = {quake: null};
  }

  componentDidMount() {
    const queryString = window.location.href;
    const urlParams = queryString.split("?")[1];

    const id = urlParams.split('id=')[1];
    console.log("ID", data.data.features.find(x => x.id == id));
    this.setState({
      quake: data.data.features.find(x => x.id == id)
    })



  }

  render() {
    return (
      <div className="earthquake_container">
        {this.state.quake && this.state.quake.properties ? 
        (
          <div>
        <h1 className="title">{this.state.quake.properties.place}</h1>
        <table>
          <tbody>
            <tr><td><b>Title</b></td><td>{this.state.quake.properties.place}</td></tr>
            <tr><td><b>Magnitude</b></td><td>{this.state.quake.properties.mag}</td></tr>
            <tr><td><b>Time</b></td><td>{this.state.quake.properties.time}</td></tr>
            <tr><td><b>Status</b></td><td>{this.state.quake.properties.status}</td></tr>
            <tr><td><b>Tsunami</b></td><td>{this.state.quake.properties.tsunami}</td></tr>
            <tr><td><b>Type</b></td><td>{this.state.quake.properties.type}</td></tr>
          </tbody>
        </table>
        </div>



        ) : (<h1>Loading...</h1>)

        }
      </div>
    );
  }
};
