
import "./MiOrg.css"

const MiOrg = (props) => {

   /* const [mostrar, actualizarMostrar] = useState(true);
    const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar);
    } */

    return <section className="orgSection">
        <h3 className="tittle">Mi Organizacion</h3>
        <img src="\img\Botão add-01 1.png"  alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg