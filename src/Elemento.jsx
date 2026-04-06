import './Elemento.css'
    
function Elemento({elemento}) {
    console.log(elemento)

    return (
        <>            
            <div className="cita">
                <p>Mascota: <span>{elemento.mascota}</span></p>
                <p>Dueño: <span>{elemento.duenio}</span></p>
                <p>Fecha: <span>{elemento.fecha}</span></p>
                <p>Hora: <span>{elemento.hora}</span></p>
                <p>Sintomas: <span>{elemento.sintomas}</span></p>
                <button className="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </>
    )
}

export default Elemento