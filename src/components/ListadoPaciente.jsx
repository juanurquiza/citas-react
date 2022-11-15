import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'

const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

   
 
  return (

    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>ListadoPaciente</h2>
      <p className='text-3xl mt-5 mb-10 text-center'>
        administra{''}
        <span className='text-indigo-600 font-bold'>Pacientes y citas </span>
      </p>   
      { 
          pacientes.map( paciente => (
          <Paciente 
            key={paciente.id}
            paciente={paciente}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        ) )  
      }
    </div> 
  )
}

export default ListadoPaciente