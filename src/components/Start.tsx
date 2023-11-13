import '../css/Main.css'

export const Start = ({setName}: any) => {
  return (
    <div className="container">
      <h2>Bem Vindo ao Caso #</h2>
      <p>Digite seu nome para começar:</p>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => alert(name)}>continuar</button>
    </div>
  );
}

export default Start;