import { useContext } from "react";
import { useState } from "react";


import Header from "./components/Header"; //HEADER
import Start from "./components/Start" // Pre-Game
import Scenario from "./components/Scenario"; //Cenario
import Profile from "./components/Profile";
import Instructions from "./components/Instructions";
import { Contextos } from './context/logica'



function App() {
  const [name, setName] = useState("");
  const [contextoState, dispatch] = useContext(Contextos)

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {contextoState.gameStage === "Start" && <Start setName={setName} />}
        {contextoState.gameStage === "Start" && <Profile name={name} />}
        {contextoState.gameStage === "Playing" && <Instructions />}
        <Scenario />
      </main>

    </>
  )
}

export default App
