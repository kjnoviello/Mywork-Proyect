// import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='flex flex-col justify-center align-center w-full py-[200px]'>
            <p className="title"><strong>Ingreso</strong></p>
            <main className='w-full flex justify-center'>
                <form className="form">
                    <p className="message">Ingresa y brilla!</p>
                        
                        <label>
                            <input className="input" type="email" placeholder="user@example.com" required=""></input>
                            <span>Email</span>
                        </label> 
                            
                        <label>
                            <input className="input" type="password" placeholder="***" required=""></input>
                            <span>Password</span>
                        </label>

                        <br />

                    <button className="submit"><strong>Iniciar sesión</strong></button>
                    <p className="signin">Olvidaste tu contraseña? <a href="#">Recupera aquí</a></p>
                    <p className="signin">No tengo una cuenta. <a href="#">Registrarme</a></p>
                </form>
            </main>
        </div>
    )
}

export default Login