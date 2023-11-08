import React from "react";
import '../css/Main.css'

class Scenario extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Cenário 1:</h2>
        <p>Você se vê diante da seguinte situação bla bla bla, o que você fará?</p>
        <div className="escolha">Escolha 1</div>
        <div className="escolha selected">Escolha 2</div>
        <div className="escolha">Escolha 3</div>
        <button>Confirmar</button>
      </div>
    );
  }
}

export default Scenario;