import React, { Component } from "react";
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name: 'Home Page',
    to: '/',
    exact: true
  },
  {
    name: 'Products List',
    to: '/products-list',
    exact: false
  }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Call API</a>
        <ul className="nav navbar-nav">
          {this.showMenu(menus)}
        </ul>
      </div>
    );
  }
  showMenu = (menus) => {
    var res = null;
    if (menus.length > 0) {
      res = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return res;
  };
}

export default Menu;
