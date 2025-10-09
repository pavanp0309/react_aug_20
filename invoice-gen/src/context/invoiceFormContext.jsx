import js from "@eslint/js";
import { createContext,useContext,useEffect,useState } from "react";


// creating the context for the form
const InvoiceFormContext=createContext()

export const FormContextProvider=({children})=>{
    // useState for storing the form data entered by user
    const [invoiceData,setInvoiceData]=useState(() => {
    try {
      return JSON.parse(localStorage.getItem("invoicedata")) || {};
    } catch (error) {
      return null;
    }
  });

//   useEffect for handling the  data
useEffect(()=>{
    try {
        localStorage.setItem("invoicedata",JSON.stringify(invoiceData||{}))
    } catch (error) {
        alert("failed to add data")
    }

},[invoiceData])

    return <InvoiceFormContext.Provider value={{invoiceData,setInvoiceData}}>
     {children}
    </InvoiceFormContext.Provider>
}

// custom Hook for avoide the repeattion of code
export  const useInvoiceData= ()=>useContext(InvoiceFormContext)