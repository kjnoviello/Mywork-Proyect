import Information from '../../components/Information/Information'
const Nosotros = () => {

    const aboutUs = {
        title: "Sobre nosotros",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio dolor quam debitis cupiditate expedita dolore quisquam voluptates alias numquam eaque reiciendis incidunt quasi esse, exercitationem similique, corporis architecto voluptatibus.",
        btn: "CONOCENOS"
    };
    const worker = {
        title: "Quieres ser visto?",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio dolor quam debitis cupiditate expedita dolore quisquam voluptates alias numquam eaque reiciendis incidunt quasi esse, exercitationem similique, corporis architecto voluptatibus.",
        btn: "SER WORKER"
    };


    return (
        <>
        <div className='divide-y-2 mx-5'>
            <Information  title={worker.title} text={worker.text} btn={worker.btn}/>
            <Information  title={aboutUs.title} text={aboutUs.text} btn={aboutUs.btn}/>
        </div>
        </>
    )
}

export default Nosotros