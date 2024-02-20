import './App.css'
import Footer from './assets/components/Footer/Footer'
import Navbar from './assets/components/Navbar/Navbar'
import Search from './assets/components/Search/Search'
import Proceso from './assets/pages/Proceso/Proceso'


function App() {

  return (
    <div className="app">
      <Navbar />
      <Search />
      <Proceso />
      <Footer />
    </div>
  )
}

export default App
