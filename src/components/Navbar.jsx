import { NavLink } from "react-router-dom"
// import './css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink to='/' className="navbar-brand">My Portfolio</NavLink>
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls="navbarNav"
          aria-expanded='false'
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to='/' end className="nav-link">Home</NavLink> 
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link">
                Skills
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar