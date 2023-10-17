import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

return <>

    <div className='d-grid'>
    <h1 className='h1 p-4 m-3' style={{color:'#203562'}}>Notes App</h1>
    <div className='span m-1 pt-2 ps-4 pb-2 d-flex borderRound gap-3' style={{backgroundColor:'#203562', fontFamily:'montserrat'}}> 
    <img className='pt-1' src='/Icons/description-white.svg' alt='Notes Icon' width='30px' height='35px'/>
    <div>
      <Link to ='/content'>
    <span className='p-1 fontSize'>Notes</span>
     </Link>
    </div>
    </div>
    </div>
  
  </>
}

export default Sidebar