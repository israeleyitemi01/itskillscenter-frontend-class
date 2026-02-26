import React from 'react'

function MyProjects({image, logo, title, span, description, progress,  button}) {
  return (
    <div className='my-work'>
        <div className='myWork-container1'>
            <img className='im' src={image} alt="" />
            <div className='works'>
                <img src={logo} alt="" />
                <h3>{title}<span>{span}</span></h3>
                <p>{description}</p>
                <button>{progress}</button>
                <button className='view-btn'>{button}<i class="fa fa-angle-right" aria-hidden="true"></i></button>
            </div>
        </div>

    </div>
  )
}

export default MyProjects