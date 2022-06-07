import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const Login = () => {

    const [checked, setChecked] = useState(false);
    const [users, setUsers] = useState([]);
    const [valForm, setValForm] = useState({
        email: '',
        pass: ''
    })

    const { email, pass } = valForm;
    const navigate = useNavigate();

    const regresar = () => {
        navigate('/home');
    }

    const logSuccess = () => {
        navigate('/home');
    }

    useEffect(() => {
        getUsers().then((user) => setUsers(user));
        console.log(users);
    }, []);

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        if (valForm.email.trim() !== "") {
            if (valForm.pass.trim() !== "") {
                console.log(users);
                users.map((u) => {
                    if (valForm.email === u.email && valForm.pass === u.pass) {
                        console.log('email', u.email);
                        console.log('pass', u.pass);
                        console.log('emailInput', email);
                        console.log('passInput', pass);
                        console.log(u.activo);
                        u.activo = true;
                        console.log(u.activo);
                        regresar();
                        Swal.fire("Los datos son correctos", "", "info");
                    } else {
                        Swal.fire("Error", "Los datos no son correctos", "error");
                    }
                });
            } else {
                Swal.fire("Error", "La contraseña es requerida", "error");
            }
        } else {
            Swal.fire("Error", "El email es requerido", "error");
        }
    };

    const handlerOnChange = ({ target }) => {
        const { name, value } = target;
        setValForm({ ...valForm, [name]: value });
    };

    const getUsers = async () => {
        const res = await fetch('src/data/users.js');
        const data = await res.json();
        getUsers().then((user) => setUsers(user));
        return data;
    }

    return (
        <div>
            <Button label="Regresar" icon="pi pi-arrow-left" onClick={regresar}
                className="w-full mt-3 ml-3 p-button-rounded p-button-success w-8rem" />
            <form onSubmit={handlerOnSubmit}>
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
                            <InputText type="email" id='email' name='email' value={email} className="w-full mb-3" onChange={handlerOnChange} />

                            <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
                            <InputText type="password" id='pass' name='pass' value={pass} className="w-full mb-3" onChange={handlerOnChange} />

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
            </form>
        </div>
    )
}
