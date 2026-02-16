import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Methodologies from './components/layout/Methodologies'
import Navbar from './components/layout/Navbar'
import Projects from './components/layout/Projects'
import Statistics from './components/layout/Statistics'
import Testimonials from './components/layout/Testimonials'


function App() {

  return (
  <>
    <div className='md:mx-20 md:px-4 '>
    <Navbar />
    <Header />
    <Projects />
    <Methodologies />
    <Testimonials />
    <Statistics />
    </div>
    <Footer />
    </>
  )
}

export default App
