/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer } from "react";
import cenarios from "../data/Cenarios"

const STAGES = ["Start", "Playing", "Death", "End"]

const initialState = {
  gameStage: STAGES[0],
  cenarios
}

const cenarioReducer = (state, action) => {
  console.log(state, action)

  switch (action.type) {
    case "CHANGE_STATE":
      return state

    default:
      return state
  }

}

export const Contextos = createContext();


export const ContextoProvider = ({ children }) => {

  const value = useReducer(cenarioReducer, initialState);

  return <Contextos.Provider value={value}>{children}</Contextos.Provider>;
};
