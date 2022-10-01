import React from 'react'
import { useGlobalcontext } from './context'
import{FaBabyCarriage} from "react-icons/fa"
import { Button,Form,Nav} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
const Navbar = () => {
const{amount}=useGlobalcontext()
  return (
    <div>

{/* <Nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
             <li><hr class="dropdown-divider"/></li> 
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" index="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
       <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button> 
      </form> 
    </div>
    <Button variant='danger' >TEST</Button>
  </div>

</Nav>
<Form  style={{width:500,color:"red",marginLeft:40}}>
<Form.Group>
<Form.Label>email Address</Form.Label>
<Form.Control type='email' placeholder='example@gmail.com'/>
</Form.Group>

</Form> */}
     <nav>
      <div className='nav-center'>
        <h3>Cartalog For ClothWears </h3>
      </div>
      <div className='nav-container'>
        <FaBabyCarriage className='fas'/>
        <div className='amount-container'>
          <p className='total-amount'>{amount}</p>
        </div>
      </div>
    </nav> 

  </div>
  )
}

export default Navbar