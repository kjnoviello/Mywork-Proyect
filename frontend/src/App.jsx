import './App.css'
import Footer from './assets/components/Footer/Footer'
import Navbar from './assets/components/Navbar/Navbar'
import Nosotros from './assets/pages/Nosotros/Nosotros'
import Proceso from './assets/pages/Proceso/Proceso'


function App() {

  return (
    <div className="app">
      <Navbar />
      <Proceso />
      <Nosotros />
      <Footer />
    </div>
  )
}

export default App
