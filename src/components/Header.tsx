import React from "react";
import '../css/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Theory</h1>
        <p className="dia"> {new Date().toLocaleDateString()}</p>
      </div>
    );
  }
}

export default Header;