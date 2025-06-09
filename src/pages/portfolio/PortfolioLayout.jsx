import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const PortfolioLayout = () => {
  return (
    <div className='container'>
      <h2 className='my-4'>My Portfolio</h2>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <Link to="" className='nav-link'>Overview</Link>
        </li>
        <li className='nav-item'>
          <Link to="project1" className='nav-link'>Project 1</Link>
        </li>
        <li className='nav-item'>
          <Link to="project2" className='nav-link'>Project 2</Link>
        </li>
      </ul>

      <div className='mt-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default PortfolioLayout