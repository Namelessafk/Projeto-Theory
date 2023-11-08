import React from "react";
import '../css/Main.css'
import Start from "./Start";

class Profile extends React.Component {
  render() {
    let {name} = Start;
    return (
      <div className="container">
        <h2>Perfil:</h2>
        <p>{name}, você é um investigador que está trabalhando no caso sobre...</p>
        <button>continuar</button>
      </div>
    );
  }
}

export default Profile;