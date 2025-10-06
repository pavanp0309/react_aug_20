import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import useInvoice from '../context/InvoiceContext'

const Login = () => {
   const {loginWithGoogle}=useInvoice()
   let navigate=useNavigate()

   let startlogin=async()=>{
    await loginWithGoogle()
    navigate("/features")
   }
  
  return (
    <div className='card'>
      <Button type='primary' onClick={startlogin}>loginWithGoogle</Button>
    </div>
  )
}

export default Login
