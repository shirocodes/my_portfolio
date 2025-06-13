import React from 'react'

const About = () => {
  return (
    <section className=' about-role container fade-in d-flex flex-column mt-5 align-items-center min-vh-100 text-center text-md-start'>
      <h2 className='mb-3'>More than code — I deliver products & manage projects that succeed.</h2>
      <p className="lead mb-5">Fullstack Developer | Agile Project Manager | Problem Solver</p>
      
      <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4'>
        <div className='col-6 col-md-3 mb-3'>
          <div className='card card-hover p-3 shadow-sm h-100'>
            <h6 className="mt-2">Clean, scalable code</h6>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="card card-hover p-3 shadow-sm h-100">
            <h6 className="mt-2">Agile collaboration</h6>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="card card-hover p-3 shadow-sm h-100">
            <h6 className="mt-2">On-time delivery</h6>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="card card-hover p-3 shadow-sm h-100">
            <h6 className="mt-2">User-focused</h6>
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-lg">Let's Talk</button>
    </section>
  )
}

export default About