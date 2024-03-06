import './App.css'
import Footer from './assets/components/Footer/Footer'
import Navbar from './assets/components/Navbar/Navbar'
import Proceso from './assets/pages/Proceso/Proceso'
import ServicesList from './assets/components/ServicesList/ServicesList'
import Carousel from './assets/components/Carousel/Carousel'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Proceso />
      
      <Carousel/>
      <Carousel/>
      <Footer />
    </div>
  )
}

export default App
