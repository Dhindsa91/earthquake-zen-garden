import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const data = require('../../data.json');

export default class HomePage extends Component {
  render() {
    return (
      <div>
      <h3 className="title">USGS ALL Earthquakes, Past Hour</h3>
      <table className="data_table">
          <th>Title</th>
          <th>Magnitude</th>
          <th>Time</th>

      {data.data.features.map(e=>{
      
          return(
          <tr>
           <Link to={`/profile/${e.id}`}> <td>{e.properties.place}</td>  </Link>
           <Link to={`/profile/${e.id}`}> <td>{e.properties.mag}</td> </Link>
           <Link to={`/profile/${e.id}`}> <td>{e.properties.time}</td> </Link>
          </tr>
          )
      })}
      </table>
  </div>
    );
  }
};
