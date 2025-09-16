import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <Nav/>
      {/* used for rendering the child routes inside the parent route */}
    <Outlet/>
    </div>
  )
}

export default Services
