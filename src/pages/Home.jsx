import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import portfolioImg from '../assets/portfolioStand.jpg'
import './Page.css'


const Home = () => {
  return (
    <section className='container py-5 d-flex align-items-center min-vh-100'>
      <div className='row'>
        <div className='col-md-6 text-center mb-4 mb-md-0 text-center'>
          <img
            src={portfolioImg}
            alt='Portfolio Image of Wanjiru Muchiri'
            className='img-fluid rounded-circle border border-3 shadow'
            style={{maxWidth: '300px'}}
          />
        </div>

        <div className='col-lg-6 text-center text-lg-start'>
          <h2>
            Hello, I'm <span style={{color: '#450337', fontWeight: 'bold'}}>Wanjiru Muchiri</span>
          </h2>
          <div className='role-text'>
            <h5 className='animated-text text-muted'>
              <span style={{color: '#e91e63', fontWeight: 'light'}}>
                <Typewriter
                  words={['Fullstack Developer', 'Keen on Agile Project Management','React Enthusiast', 'Backend Engineer']}
                  loop={Infinity}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h5>
          </div>
          <div className='mt-3 text-start'>
            <p>
              I build sleek, responsive web apps with a sprinkle of frontend flair and backend power. 
              I'm passionate about turning ideas into intuitive, high-performing digital experiences.
            </p>
            <p>
               <span style={{color: '#450337', fontWeight: 'medium'}}>But here's the twist: </span> <br/>
              I don't just code — I manage and deliver projects too. With hands-on experience in Agile 
              project management, I bridge the gap between tech and teamwork, keeping projects on time, 
              in scope, and user-focused.
            </p>
            <p>
              Whether it's React on the frontend or Node.js on the backend, I craft solutions that are clean, 
              scalable, and a joy to use.
            </p>
            <p>
              Let's build something impactful — and finish it like pros.
            </p>
            </div>

          <div className='portfolio-btns mt-4'>
            <button className='btn btn-primary me-3'>Hire me</button>
            <button className='btn btn-outline-secondary'>Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home