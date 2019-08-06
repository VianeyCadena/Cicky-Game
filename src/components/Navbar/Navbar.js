import React from 'react';

const Navbar = props => (
<nav>
    <div className="nav-wrapper  blue-grey darken-1">
      <a href="#" class="brand-logo">Clicky Game</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="scores">Score: {props.score} | Highscore:{props.highscore}</li>
      </ul>
    </div>
  </nav>
);



export default Navbar;