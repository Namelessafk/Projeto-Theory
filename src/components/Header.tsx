import React from "react";
import '../css/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>Theory</h2>
        <p className="dia"> {new Date().toLocaleDateString()}</p>
      </div>
    );
  }
}

export default Header;