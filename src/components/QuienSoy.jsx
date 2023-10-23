import React from 'react'

export const QuienSoy = () => {
    const descargarCurriculum = async() => {
        const response = await fetch('curriculum.pdf');
        const blob = await response.blob();
    
        const link = document.createElement('a');
    
        link.href = URL.createObjectURL(blob);
    
        link.download = `curriculum.pdf`;
    
    
        link.click();
      }
  return (
    <article className='text-light row texto-quien-soy'>
    <h2 className='mb-3 '>¿Quien Soy?</h2>

    <p className='col-12 col-lg-5 justificarTexto'>
    Soy un diseñador gráfico con sólidas habilidades
     en Illustrator y Photoshop. Mi creatividad se 
     combina con un aprendizaje rápido, responsabilidad y 
     dedicación, lo que me impulsa a buscar la excelencia 
     en cada tarea que emprendo.</p>

      <p className='col-5'>

      </p>
       <p className='col-12 col-lg-5 mt-2 justificarTexto mb-2'>Además, tengo experiencia como desarrollador
        Front-End junior, donde he trabajado con frameworks como React,
         Redux Toolking y React-Router. También cuento con conocimientos 
         en el uso de bibliotecas de diseño, incluyendo Bootstrap. 
         Mi pasión por el diseño y el desarrollo web me motiva a ofrecer 
         soluciones de calidad en cada proyecto que abordo.</p>
    <div className='ms-1'>

    <button className='btn btn-primary' onClick={descargarCurriculum}>Curriculum</button>

    </div>

    </article>
  )
}
