import React from 'react'
import NewsList from './components/NewsList'
import { Routes,Route } from 'react-router-dom'
import NewsDetails from './components/NewsDetails'


const App = () => {
  return (
    <>
    <Routes>
      <Route  path='/' element={ <NewsList/>}/>
      <Route  path='/:newsId' element={ <NewsDetails/>}/>
    </Routes>
     
    </>
  )
}

export default App
