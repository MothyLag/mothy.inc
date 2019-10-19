import React from 'react';
import './styles/nav.scss';

const Nav = () => (
  <nav>
    <div className="brand">
      <a href="#">
        <p>MothyLag</p>
        <img src="caraML.png" alt="logo" />
      </a>
    </div>
    <div className="left">
      <a href="#"> left</a>
    </div>
    <div className="right">
      <a href="#">derecha</a>
      <a href="#">derecha</a>
    </div>
  </nav>
);

export default Nav;
