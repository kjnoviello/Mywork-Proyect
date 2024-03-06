import './ServicesList.css'
import Carousel from '../Carousel/Carousel';

const ServicesList = () => {

    return (
        /*CONTENEDOR PRINCIPAL*/
        
    <div className='bg-slate-700 mb-5 flex flex-grow'>
        <h2 className='ml-10 text-white fuenteB'>Servicios Destacados</h2>
        <Carousel />
    </div>

    
    )

  };

  export default ServicesList