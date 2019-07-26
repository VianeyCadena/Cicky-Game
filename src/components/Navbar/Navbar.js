import React from 'react';

const Navbar = props => (
<nav>
    <div className="nav-wrapper">
      <a href="#" class="brand-logo">Clicky Game</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="scores">Score: {props.score} | Highscore:{props.highscore}</li>
      </ul>
    </div>
  </nav>
);



export default Navbar;