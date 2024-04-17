// import React from 'react'
import './Registro.css'

const Login = () => {
    return (
        <div className='flex flex-col justify-center align-center w-full py-[200px]'>
            <p className="title"><strong>Registro</strong></p>
            <main className='w-full flex justify-center'>
                <form className="form">
                    <p className="message">Resgistrese ahora y tenga acceso completo a nuestra app.</p>
                        <div className="name">
                            <label>
                                <input className="input" type="text" placeholder="John" required=""></input>
                                <span>Nombre</span>
                            </label>

                            <label>
                                <input className="input" type="text" placeholder="Doe" required=""></input>
                                <span>Apellido</span>
                            </label>
                        </div>  
                                
                        <label>
                            <input className="input" type="email" placeholder="user@example.com" required=""></input>
                            <span>Email</span>
                        </label> 
                            
                        <label>
                            <input className="input" type="password" placeholder="***" required=""></input>
                            <span>Password</span>
                        </label>

                        <label>
                            <input className="input" type="password" placeholder="***" required=""></input>
                            <span>Confirmar password</span>
                        </label>

                        <label>
                            <input className="input" type="Ciudad" placeholder="Buenos Aires" required=""></input>
                            <span>Ciudad</span>
                        </label>

                        <label>
                            <input className="input" type="Teléfono" placeholder="+54 011-11112222" required=""></input>
                            <span>Teléfono</span>
                        </label> 

                        <label >
                            <select className='input' name="select" id="select">
                                <option value="worker">Worker</option>
                                <option value="usuario">Usuario</option>
                            </select>
                            <span>Como desea registrarse?</span>
                        </label>
                        <br />

                    <button className="submit"><strong>Registrarme</strong></button>
                    <p className="signin">Ya posees una cuenta? <a href="#">Ingresar</a></p>
                </form>
            </main>
        </div>
    )
}

export default Login