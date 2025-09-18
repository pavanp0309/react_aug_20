import React from 'react'
import { useState } from 'react'

const LoginPage = () => {
    // let [username,setUser]=useState("")
    // let [userEmail,setUserEmail]=useState("")
    // let [usermobile,setUsermobile]=useState("")
    // let [userpassword,setUserPassword]=useState("")

    let [user,setUser]=useState({username:"",useremail:"",usermobile:"",password:"",address:"",job:"",company:""})


  return (
    <div className='container'>
      <div className="card">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
                 {/* form  */}
                <form action="" className="form">
                    {/* username */}
                  <input  type="text" placeholder='enter ur name'  className='form-control' value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
                  
                    {/* userEmail */}
                   <input type="email" className='form-control'  value={user.useremail} onChange={(e)=>setUser({...user,useremail:e.target.value})} />
                    {/* userMobile */}
                   <input type="tel" className='form-control'  value={user.usermobile} onChange={(e)=>setUser({...user,usermobile:e.target.value})}/>
                   {/* userpassword */}
                   <input  type="password"  className='form-control'  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                   <input  type="text"  className='form-control'  value={user.company} onChange={(e)=>setUser({...user,company:e.target.value})}/>
                   <input  type="text"  className='form-control'  value={user.address} onChange={(e)=>setUser({...user,address:e.target.value})}/>
                   <input  type="text"  className='form-control'  value={user.job} onChange={(e)=>setUser({...user,job:e.target.value})}/>
                   
                </form>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <h4>UserName:{user.username}</h4>
                <h4>UserEmail:{user.useremail}</h4>
                <h4>UserMobile:{user.usermobile}</h4>
                <h4>UserPassword:{user.password}</h4>
                <h4>UserCompany:{user.company}</h4>
                <h4>UserAdress:{user.address}</h4>
                <h4>UserJob:{user.job}</h4>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
