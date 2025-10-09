import React from 'react'
import useInvoice from '../../context/InvoiceContext'
import { Button,Avatar } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Navbar = () => {

  // imported the user data form the context api after login
  const {user,loginWithGoogle,logout}=useInvoice()
  let navigate=useNavigate()

  // function for hnadling the authentication 
  const hadleAuth=async()=>{
    if(!user){
      await loginWithGoogle()
      navigate("/features")
      toast("user logged in successfull")

    }else{
      await logout()
      navigate('/')
      toast("user logged out")
    }
  }

  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/'}>InvoiceFriend</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/features'}>Features</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to={'/pricing'}>Pricing</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to={'/about'}>About</NavLink>
        </li>
       <li className="nav-item">
          <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
        {/*  conditional login and logout  */}
        <div className='d-flex gap-3 align-items-center '>
          {user && <div className='d-flex align-items-center gap-1'><Avatar src={user.photo|| "U"}/> <p>{user.name|| "user"}</p></div>}
          <Button onClick={hadleAuth}>{user?"logout":"Login with Google"}</Button>
        </div>

    </div>
  </div>
</nav>
  )
}

export default Navbar
