import '../css/Main.css'

export const Profile = ({ name }: any) => {
  return (
    <div className="container">
      <h2>Perfil:</h2>
      <p>{name}, você é um investigador que está trabalhando no caso sobre...</p>
      <button>continuar</button>
    </div>
  );
}

export default Profile;