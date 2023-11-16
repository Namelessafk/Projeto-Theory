import '../css/Start.css'
import { useContext } from 'react'
import { Contextos } from '../context/logica'

type Props = {
  setName: (setName: string) => void;
}

export const Start = ({ setName }: Props) => {
  const [contextoState, dispatch] = useContext(Contextos)

  console.log(contextoState)


  return (
    <div className="container">
      <h2>Bem Vindo ao Caso #</h2>
      <p>Digite seu nome para começar:</p>
      <input
        id='input-start'
        type="text"
        placeholder="Digite seu nome"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })} id='btn-start'>continuar</button>
    </div>
  );
}

export default Start;