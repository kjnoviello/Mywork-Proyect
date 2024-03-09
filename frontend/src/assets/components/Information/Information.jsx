/* eslint-disable react/prop-types */
import style from './Information.module.css'

const Information = (props) => {
    return (
        <section className='flex flex-col text-center'>
            <h2 className={`my-10 text-4xl text-[#606060] + ${style.text}`}><strong>{props.title}</strong></h2>
            <div className='max-w-xl flex justify-center m-auto'>
                <p className={`'mb-5 text-[#606060]' + ${style.text}`}>{props.text}</p>
            </div>
            <button className='my-10 mx-auto bg-[#606060] h-12 rounded-[100px] w-80 text-center text-white'>
                {props.btn}   
            </button>    
        </section>
    )
}

export default Information