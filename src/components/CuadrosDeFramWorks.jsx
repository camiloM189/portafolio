import React from 'react'

export const CuadrosDeFramWorks = () => {
    const clickImage = () => {

        console.log('html');
      }
    
  return (
    <div className='container contenedorDeFramworks'>
    <div className='row iconosframwork'>
    
    <img src="html.png" alt="" className='img-fluid imgFramworks col-lg-4  col-6 html1'onClick={clickImage}/>
    <img src="react.png" alt="" className='img-fluid imgFramworks col-lg-4 col-6 html1'/>
    <img src="js.png" alt=""  className='img-fluid imgFramworks col-lg-4 col-6 html1'/>
    <img src="css.png" alt=""  className='img-fluid imgFramworks col-lg-4 col-6 html1'/>
    <img src="redux.png" alt=""  className='img-fluid imgFramworks col-lg-4 col-6 html1'/>
    <img src="boostrap.png" alt=""  className='img-fluid imgFramworks col-lg-4 col-6 html1'/>
    </div>
    </div>
  )
}
