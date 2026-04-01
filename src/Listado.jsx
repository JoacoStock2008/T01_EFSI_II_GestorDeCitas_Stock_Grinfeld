import './Listado.css'
import './TextoMediano'
import './Elemento'

const citas = [
    {
        mascota: "Nina" ,
        duenio: "Martin" ,
        fecha: '2021-08-05' ,
        hora: '08:20' ,
        sintomas: "Le duele la pierna"
    } ,

    {
        mascota: "Sifon" ,
        duenio: "Flecha" ,
        fecha: '2023-08-05' ,
        hora: '09:24' ,
        sintomas: "Duerme mucho"
    } ,

    {
        mascota: "Floki" ,
        duenio: "Ari" ,
        fecha: '2023-08-05' ,
        hora: '16:15' ,
        sintomas: "No está comiendo"
    }

];
function Listado(){
    return(
        <>
        <div className = "one-half column">
            <TextoMediano texto = "Administra tus citas"/>
            <li>
                {citas.map((cita) => (
                    <Elemento elemento = {cita}/>
                ))}
            </li>
        </div>
        </>
    )
}

export default Listado
//Terminar --> hacer un map del array para mostrar todos los elemntos como componentes
//Acomodar el css para que quede igual que en el archivo de la consigna