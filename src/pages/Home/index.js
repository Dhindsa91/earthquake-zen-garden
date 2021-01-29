import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import orderBy from 'lodash/orderBy'
const data = require('../../data.json');

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {quake: data.data.features};

    // This binding is necessary to make `this` work in the callback
    this.sort = this.sort.bind(this);
  }


  sort(by){
 
    console.log(by);
    
   this.setState({
     quake: orderBy(this.state.quake, item => item.properties[by], ['asc'])
   })



  }

  render() {
    return (
      <div>
    
      <h3 className="title">USGS ALL Earthquakes, Past Hour</h3>
      <table className="data_table">
        <tr>
          <th  onClick={() => {this.sort("place")}}>Title</th>
          <th  onClick={() => {this.sort("mag")}}>Magnitude</th>
          <th  onClick={() => {this.sort("time")}}>Time</th>
        </tr>
      {this.state.quake ? this.state.quake.map(e=>{
       
          return(
          <tr >
           <Link to={`/earthquake?id=${e.id}`}> <td >{e.properties.place}</td>  </Link>
           <Link to={`/earthquake?id=${e.id}`}> <td >{e.properties.mag}</td> </Link>
           <Link to={`/earthquake?id=${e.id}`}> <td >{e.properties.time}</td> </Link>
          </tr>
          )
      }): <p></p> }
      </table>
  </div>
    );
  }
};
