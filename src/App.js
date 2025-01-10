import './App.css';
import PropTypes from "prop-types"; // sirve para validar props

function App() {

  const usuario = {
    apellido: "Hidalgo",
    edad: "38",
    genero: "Masculino"
  }

  return (
    <div>
      <Saludo destinatario=" Un saludo a: " usuario={usuario}></Saludo>
    </div>
  );
}

function Saludo(props) {
  return (
    <div>
      <h1>Hola {props.destinatario} {props.usuario.apellido}!!!</h1>
      <h2>edad: {props.usuario.edad}</h2>
      <h2>Genero: {props.usuario.genero}</h2>
    </div>
  );
}

Saludo.propTypes = {
  usuario: PropTypes.shape(    
    {
      nombre: PropTypes.string.isRequired,  
      edad: PropTypes.number.isRequired
    }
  ).isRequired
}

export default App;
