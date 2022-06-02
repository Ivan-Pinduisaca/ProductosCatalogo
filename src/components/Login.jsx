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
                        <img src="src/images/userLogin.jpg" alt="hyper" height={75} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password" type="password" className="w-full mb-3" />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                        </div>
                        <div className="flex align-items-center justify-content-center">
                            <Button label="Iniciar sesion" icon="pi pi-user" className="w-full p-button-rounded p-button-success w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
