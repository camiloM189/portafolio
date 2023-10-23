import React from 'react'
import { Perfil } from './components/Perfil';
import { CuadroDeRedes } from './components/CuadroDeRedes';
import { QuienSoy } from './components/QuienSoy';
import { CuadrosDeFramWorks } from './components/CuadrosDeFramWorks';
import { TrabajosRealizados } from './components/TrabajosRealizados';

export const Portafolios = () => {

  
 
  return (
      <div className='bg-gradient-blue-green portafolio container '>

         <Perfil/>
        <CuadroDeRedes/>
        <QuienSoy/>
        <CuadrosDeFramWorks/>
        <TrabajosRealizados/> 
  
          
      
          

      </div>

  )
}
