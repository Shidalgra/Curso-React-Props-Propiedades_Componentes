import './App.css';
import PropTypes from "prop-types" // sirve para validar props

function App() {

  const usuario = {
    nombre: "Sergio",
    apellido: "Hidalgo",
    edad: 38,
    genero: "masculino"
  }

  const acompañante = {
    nombre: "Karen",
    apellido: "Chinchilla", 
    edad: 36,
    genero: "femenino"
  }


  return (
    <div>
      <Saludo destinatario=" Un saludo a: " usuario={usuario} acompañante={acompañante}></Saludo>
    </div>
  );
}

function Saludo(props) {
  return (
    <div>
      <h1>Hola {props.destinatario} {props.usuario.nombre} {props.usuario.apellido} !!!</h1>
      <h2>y tambien {props.destinatario} {props.acompañante.nombre} {props.acompañante.apellido}</h2>
    </div>
  )
}

// para validar propiedades estas casi siempre se hacen despues de lo que queremos validar
Saludo.propTypes = {
  usuario:PropTypes.shape(       //queremos que el nombre sea requerido
    {
      nombre:PropTypes.string.isRequired,  //esto no saldra para el usuario pero si quitamos nombre en el codigo de arriba, saldra un error en la pagina cuando vamos a consola de chrome
      edad:PropTypes.number.isRequired
    }
  ).isRequired
}

export default App;
