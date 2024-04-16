import './App.css'
import Footer from './assets/components/Footer/Footer'
import Navbar from './assets/components/Navbar/Navbar'
import Nosotros from './assets/pages/Nosotros/Nosotros'
import Proceso from './assets/pages/Proceso/Proceso'
import Carousel from './assets/components/Carousel/Carousel'
import Login from './assets/pages/Login/Login'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Proceso />
      <Carousel/>
      <Carousel/>
      <Nosotros />
      <Footer />
      <Login />
    </div>
  )
}

export default App
