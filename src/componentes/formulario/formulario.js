import { useState } from "react"
import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../lista-opciones"
import Boton from "../boton"

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("manejar el envio");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo titulo="color" placeholder="Ingresar color en hexadecimal" required valor={color} actualizarValor={actualizarColor} type="color" />
            <Boton>registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario