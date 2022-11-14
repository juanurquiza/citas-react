import { useState, useEffect } from "react"
import Error from "./Error"
import Paciente from "./Paciente"

const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])
  
  
  const generarId = () => {
   const random =  Math.random().toString(36).substring(2)
   const fecha = Date.now().toString(36)

   return random + fecha
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      // validacion de formulario 
      if([nombre,propietario,email,fecha,sintomas].includes('')){
        console.log('hay al menos un cambio vacio')
        setError(true)
        return
      }
      
      setError(false)

      //objeto paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        }

      if(paciente.id){

        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => 
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
          setPacientes(pacientesActualizados)
          setPaciente({})
      }
      else{
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])   
      }

     setNombre('')
     setPropietario('')
     setEmail('')
     setFecha('')
     setSintomas('')
  } 
  return (
    <div className="w-1/2 lg:w-2/5">
        
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          añade pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form onSubmit={ handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
         {error && <Error mensaje= 'Todos los campos son obligatorios'/> } 
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">Nombre Mascota</label>
            <input
                id="mascota" 
                type="text" 
                placeholder="mascota"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)} 
                className="border-bold w-full p-2 mt-2 rounded-md"
              />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">Nombre Propietario</label>
            <input
                id="propietario" 
                type="text" 
                placeholder="mascota"
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)} 
                className="border-bold w-full p-2 mt-2 rounded-md"
              />
            </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-grey-700 uppercase font-bold">email</label>
            <input
                id="email" 
                type="text" 
                placeholder="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
                className="border-bold w-full p-2 mt-2 rounded-md"
              /> 
           </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-grey-700 uppercase font-bold">fecha alta</label>
            <input
                id="alta" 
                type="date" 
                placeholder="alta"
                value={fecha}
                onChange={(e)=> setFecha(e.target.value)} 
                className="border-bold w-full p-2 mt-2 rounded-md"
              /> </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">sintomas</label>
            <textarea id="sintomas"
               placeholder="sintomas"
                className="border-bold w-full p-2 mt-2 rounded-md"
                value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)} 
            />
          </div>
          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? 'editar paciente': 'agregar paciente'}/>
        </form>

    </div>
  )
}

export default Form