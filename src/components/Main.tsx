import { useState } from "react";
import Profile from "./Profile";
//import Scenario from "./Scenario";
import Start from "./Start";
//import Instructions from "./Instructions";


export const Main = () => {
  const [name, setName] = useState("");
  return (
    <>
      <Start setName={setName} />
      <Profile name={name} />
    </>
  );
}

export default Main;