import { useNavigate } from 'react-router';


const CardProducto = (props) => {

    const navigate = useNavigate()

    const hClick = (idproducto) => {
        navigate(`/DetalleProducto/${idproducto}`)
    }

    return (
        <>
        <div key={"c" + props.dproducto.Id_Producto} className="card mb-3">
            <img key={"ci" + props.dproducto.Id_Producto} src={props.dproducto.Imagen} className="img-fluid card-img-top" />
            <div key={"cb" + props.dproducto.Id_Producto} className="card-body">
                <h4 className="card-title">{props.dproducto.Nombre_Producto}</h4>
                <div key={"ct" + props.dproducto.Id_Producto} className="card-text">
                    <h5>Precio: ${props.dproducto.Precio}</h5>
                </div>
                <p>Ciudad: {props.dproducto.Ciudad}</p>
                <p>Comuna: {props.dproducto.Nombre_Comuna}</p>
                <p>Local: {props.dproducto.Nombre_Local}</p>
                <div className='btn-card pt-2'>
                    <button type="button" onClick={() => hClick(props.dproducto.Id_Producto)} className=" btn btn-info me-1">Ver Detalle 👀</button>
                </div>
            </div>
        </div>
        </>
    )
}

    export default CardProducto