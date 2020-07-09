import React from "react";
import "./navbar.scss";
import logo from "../../logo.png";
// export default class navbar extends Component {
//   render() {
//     return <div>I am Navbar.js</div>;
//   }
// }

export default function navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo"></img>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
