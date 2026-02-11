import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Methodologies from './components/Methodologies'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'

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
