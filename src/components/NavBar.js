import React from 'react'
import CartWidget from './CartWidget'


function NavBar(parametros) {
  return (
    <nav id="navbar" className="header flex justify-between py-4 bg-slate-800 text-white">
        <h1 >Mi Página</h1>
        
        <nav>
        <a href='#'>{parametros.link1} </a>
        <a href='#'>link </a>
        <a href='#'>link </a>
        </nav>     
        

        <CartWidget />
      
    </nav>
  )
}

export default NavBar
