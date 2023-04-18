import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "harland lohora",
    puesto: "instructor",
    id: uuid(),
    fav: true
  },
  {
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    id: uuid(),
    fav: true
  },
  {
    equipo: "UX y diseno",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    id: uuid(),
    fav: true
  },
  {
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    id: uuid(),
    fav: true
  },
  {
    equipo: "Inovacion y gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    id: uuid(),
    fav: true
  }])

  const [equipos, actualizarEquipos] = useState([
    { id: uuid(), titulo: "Programacion", colorPrimario: "#57C278", colorSecundario: "#D9F7E9" },
    { id: uuid(), titulo: "Front End", colorPrimario: "#82CFFA", colorSecundario: "#E8F8FF" },
    { id: uuid(), titulo: "Data Science", colorPrimario: "#A6D157", colorSecundario: "#F0F8E2" },
    { id: uuid(), titulo: "Devops", colorPrimario: "#E06B69", colorSecundario: "#FDE7E8" },
    { id: uuid(), titulo: "UX y diseno", colorPrimario: "#DB6EBF", colorSecundario: "#FAE9F5" },
    { id: uuid(), titulo: "Movil", colorPrimario: "#FFBA05", colorSecundario: "#FFF5D9" },
    { id: uuid(), titulo: "Inovacion y gestion", colorPrimario: "#DD8A29", colorSecundario: "#FFEEDF" }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)

    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("elimnar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //actuaizar color 
  const actualizarColor = (color, id) => {
    console.log("actaulizar:", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid }])
  }

  const like = (id) => {
    console.log("like",id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {if(colaborador.id === id){colaborador.fav = !colaborador.fav} return colaborador })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} />}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like} />)
      }

      <Footer />

    </div>
  );
}

export default App;
