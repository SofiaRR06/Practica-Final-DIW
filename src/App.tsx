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
    <div className='mx-auto px-4 sm:max-w-sm md:max-w-md lg:max-w-4xl'>
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
