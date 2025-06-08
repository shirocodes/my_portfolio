import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Skills from '../pages/Skills'
import About from '../pages/About'

// support nested routes(children) on Portfolio page 
// to link to individual project pages
import PortfolioLayout from '../pages/portfolio/PortfolioLayout'
import PortfolioOverview from '../pages/portfolio/PortfolioOverview'
import ProjectDetail from "../pages/portfolio/ProjectDetail"


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='skills' element={<Skills />}/>
            <Route path='contact' element={<Contact />}/>

            <Route path='portfolio' element={<PortfolioLayout />}>
                <Route index element={<PortfolioOverview />}/>
                <Route path=":projectId" element={<ProjectDetail />}/>
            </Route>
        </Routes>
    )
}

export default AppRouter