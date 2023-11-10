import React from "react";
import '../css/Start.scss'

class Start extends React.Component {
  render() {
    let name = "";
    return (
      <div className="container">
        <h2>Bem Vindo ao Caso #</h2>
        <p>Digite seu nome para começar:</p>
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          onChange={e => name = e.target.value}
        />
        <button className="btn" onClick={() => alert(name)}>continuar</button>
      </div>
    );
  }
}

export default Start;