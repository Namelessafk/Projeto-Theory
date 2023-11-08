import React from "react";
import '../css/Start.css'

class Start extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Bem Vindo ao Caso #</h2>
        <p>Digite seu nome para começar:</p>
        <input type="text" />
        <button>continuar</button>
      </div>
    );
  }
}

export default Start;