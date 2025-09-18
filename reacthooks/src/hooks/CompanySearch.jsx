import React from 'react'
import { useState } from 'react'


let companyList=["Nvidia", "Microsoft", "Apple", "Alphabet"," Google", "Amazon", "Meta","Facebook","Broadcom"]

const CompanySearch = () => {
    const [searchTerm,setSearchTerm]=useState("")

    // filterlogic
    let companies=companyList.filter(company=>{
      return company.toLowerCase().includes(searchTerm.toLowerCase())
    })
    console.log(companies)


  return (
    <div>
        {/* Searchbar */}
      <input 
      type="text"
      className='form-control w-75 my-3 mx-auto d-block'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
       />
       {/* displaying the comapanies */}
       <div className='card mx-auto my-3 w-50 text-center p-3'>
         {companies.map((ele,index)=>(
            <p key={index}>{ele}</p>
         ))}
       </div>
    </div>
  )
}

export default CompanySearch
