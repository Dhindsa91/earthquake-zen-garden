import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
const data = require('./data.json');
import './global.css';

import HomePage from './pages/Home/index';
import Profile from './pages/Profile';
import Earthquake from './pages/Earthquake/index';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: [
        {
          title: 'Home',
          key: 'home',
          link: '/',
          component: HomePage
        },
        {
          title: 'Profile',
          key: 'profile',
          link: '/profile',
          component: Profile
        },
        {
          title: 'Earthquake',
          key: 'earthquake',
          link: '/earthquake',
          component: Earthquake
        }
      ]
    };
  }


  renderRoutes() {
    const state = this.state;
    const { routes } = state;

    return routes.map(route => {
      const routeKey = `${route.key} ${route.title}`;
      return <Route exact key={routeKey} path={route.link} component={route.component}/>;
    });
  }

  render() {
    return (
      <div className="layout">
        {console.log(data)}
        <Navbar logo={data.site.logoImage} name={data.profile.firstName} />
        <div className="page-container">
          <Switch>
            {this.renderRoutes()}
          </Switch>
        </div>
      </div>
    );
  }
};
