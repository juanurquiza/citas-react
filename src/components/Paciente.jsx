import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre,propietario,email,fecha,sintomas, id} = paciente
    
    const handleEliminar = () => {
        const respuesta = confirm('desea elimiar el paciente ', nombre)
        if(respuesta)
            eliminarPaciente(id)
    }
  return ( 
     
      <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-grey-700 uppercase'> nombre {''}
          <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'> propietario {''}
          <span className='font-normal normal-case'>{propietario}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'> Correo {''}
          <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'> fecha {''}
          <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'> sintomas {''}
          <span className='font-normal normal-case'>{sintomas}</span>
        </p>
        <div className='flex justify-between'>
            <button type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700
            text-white font-bold uppercase rounded-lg'
            onClick={() => setPaciente(paciente)}>
                Editar
            </button>
            <button type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700
            text-white font-bold uppercase rounded-lg'
            onClick={handleEliminar}>
                eliminar
            </button> 
        </div>
      </div> 
  )
}

export default Paciente