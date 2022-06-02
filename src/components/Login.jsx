import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [checked, setChecked] = useState(false)
    const navigate = useNavigate();

    const regresar = () => {
        navigate('/');
    }

    return (
        <div>
            <Button label="Regresar" icon="pi pi-arrow-left" onClick={regresar}
                className="w-full mt-3 ml-3 p-button-rounded p-button-success w-8rem" />
            <div className="flex align-items-center justify-content-center card-container h-screen">
                <div className="surface-card p-4 shadow-2 border-round lg:w-4">
                    <div className="text-center mb-5">
                        <img src="src/images/userLogin.png" alt="hyper" height={75} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Bienvenido</div>
                        <span className="text-600 font-medium line-height-3">No tienes una cuenta?</span>
                        <a className="font-medium no-underline ml-2 text-900 cursor-pointer">Crear cuenta!</a>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Correo</label>
                        <InputText id="email" type="text" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
                        <InputText id="password" type="password" className="w-full mb-3" />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center text-900">
                                <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                                <label htmlFor="rememberme">Recordar mis credenciales</label>
                            </div>
                            <a className="font-medium no-underline ml-2 text-right cursor-pointer text-900">Olvide mi contraseña</a>
                        </div>
                        <div className="flex align-items-center justify-content-center">
                            <Button label="Iniciar sesion" icon="pi pi-user" className="w-30rem p-button-rounded p-button-success p-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
