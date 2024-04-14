import ('../Footer/Footer.css')

const Footer = () => {
    return (
        <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="flex-row flex flex-wrap sm:flex-nowrap flex-col-reverse sm:flex-row">
                    {/* TW elements section */}
                    <div className='w-1/4 w-full my-[40px] sm:mt-[0px] m-auto'>
                        <a href="#">
                            <div className="">
                                <img src="https://dummyimage.com/150x150/000/fff&text=logo" alt="logo" />
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-between sm:justify-evenly w-full flex-wrap">
                        {/* <Contact section */}
                        <div className='text-xs md:text-base'>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                REDES
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram mr-3 h-5 w-5">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                Instagram
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin mr-3 h-5 w-5">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                Linkedin
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter mr-3 h-5 w-5">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                Twitter
                            </p>
                        </div>
                        {/* Products section */}
                        <div className="text-xs md:text-base">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Acerca de
                            </h6>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Sobre nosotros</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Ser un Worker</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Reseñas</a>
                            </p>
                        </div>
                        {/* Products section */}
                        <div className="text-xs md:text-base">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Soporte
                            </h6>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Informanos</a>
                            </p>
                        </div>
                        {/* <Useful links section */}
                        <div className="text-xs md:text-base">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Categorías
                            </h6>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Catego 1</a>
                            </p>
                            <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">Catego 2</a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Catego 3</a>
                            </p>
                            <p>
                                <a href="#!" className="text-neutral-600 dark:text-neutral-200">Catego 4</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Copyright section */}
            <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                <span>Calle general 123, ARG.</span>
                <br />
                <span>© 2023 MyWork. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer