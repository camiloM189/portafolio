import React from 'react'

export const Prueba = () => {
    const descargarCurriculum = async() => {
        const response = await fetch('curriculum.pdf');
        const blob = await response.blob();
    
        const link = document.createElement('a');
    
        link.href = URL.createObjectURL(blob);
    
        link.download = `curriculum.pdf`;
    
    
        link.click();
      }
  return (
    <div className='bg-gradient-blue-green portafolio'>
         <article className='text-light '>
            <div className='circulo-perfil'>
             <img src="Mesa de trabajo 20_1.png" alt=""  className='img-fluid foto-de-perfil'/>


            </div>
             <h3 className='circulo-perfil-nombre me-5 '>Juan Camilo Millan Cuellar</h3>

        </article>
        
        <div className='row botonDeRedes '>
        
        <a href="https://github.com/camiloM189"> <img src="github.png" className='col-12 img-fluid mb-2 ms-1'   alt="github" /></a>
        <a href="mailto:jcamilomillan18912@gmail.com"><img src="gmail.png"  className='col-12 img-fluid mb-2 ms-1' alt="gmail" /></a> 
        <a href="https://www.linkedin.com/in/juan-camilo-millan-cuellar-a78088248/"><img src="link.png"   className='col-12 img-fluid mb-2 ms-1' alt="link" /></a>  
        
         </div>
         <article className='text-light row texto-quien-soy'>
        <h2 className='mb-3 '>¿Quien Soy?</h2>

        <p className='col-5 justificarTexto'>
        Soy un diseñador gráfico con sólidas habilidades
         en Illustrator y Photoshop. Mi creatividad se 
         combina con un aprendizaje rápido, responsabilidad y 
         dedicación, lo que me impulsa a buscar la excelencia 
         en cada tarea que emprendo.</p>

          <p className='col-5'>

          </p>
           <p className='col-5 mt-2 justificarTexto mb-2'>Además, tengo experiencia como desarrollador
            Front-End junior, donde he trabajado con frameworks como React,
             Redux Toolking y React-Router. También cuento con conocimientos 
             en el uso de bibliotecas de diseño, incluyendo Bootstrap. 
             Mi pasión por el diseño y el desarrollo web me motiva a ofrecer 
             soluciones de calidad en cada proyecto que abordo.</p>
        <div className='ms-1'>

        <button className='btn btn-primary' onClick={descargarCurriculum}>Curriculum</button>

        </div>

        </article>
        <div className='container contenedorDeFramworks'>
    <div className='row iconosframwork'>
    
    <img src="html.png" alt="" className='img-fluid imgFramworks col-4 html1'/>
    <img src="react.png" alt="" className='img-fluid imgFramworks col-4 html1'/>
    <img src="js.png" alt=""  className='img-fluid imgFramworks col-4 html1'/>
    <img src="css.png" alt=""  className='img-fluid imgFramworks col-4 html1'/>
    <img src="redux.png" alt=""  className='img-fluid imgFramworks col-4 html1'/>
    <img src="boostrap.png" alt=""  className='img-fluid imgFramworks col-4 html1'/>
    </div>
    </div>
         <div className="container">
      <section className="row min-vh-100 align-items-lg-center">
         <article className="col-12 col-md-6 col-lg-3 d-flex">
           <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
             <img src="" className="card-img-top bg-third-color" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">Nuevo sitio web</h5>
               <p className="card-text">¿Necesitas un (nuevo) sitio web 100% responsivo?</p>
               <a href="sitios.html" className="second-text-color">Mas detalles <i className="bi bi-chevron-right"></i></a>
             </div>
           </div>
         </article>
         <article className="col-12 col-md-6 col-lg-3 d-flex">
           <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
             <img src="" className="card-img-top bg-third-color" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">Clientes
               </h5>
               <p className="card-text"> Clientes felices y proyectos hermosos</p>
               <a href="clientes.html" className="second-text-color">Mas detalles <i className="bi bi-chevron-right"></i></a>
             </div>
           </div>
         </article>
         <article className="col-12 col-md-6 col-lg-3 d-flex">
           <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
             <img src="" className="card-img-top bg-third-color" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">Flujo de Trabajo
               
              </h5>
              <p className="card-text">Escucho tus necesidades. Discutamos tu proyecto.</p>
              <a href="comencemos.html" className="second-text-color">Mas detalles <i className="bi bi-chevron-right"></i></a>
            </div>
          </div>
        </article>
       
       </section>






    </div>

    </div>
  )
}
