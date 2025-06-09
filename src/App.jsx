import React from 'react'
import AppRouter from './router/AppRouter'
import Navbar from './components/Navbar'
import Stats from './components/Stats'

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />

      <main className='flex-grow-1'>
        <AppRouter />
      </main>
      <Stats />
    </div>
  )
}

export default App