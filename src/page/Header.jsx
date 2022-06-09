import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

import { FaBloggerB } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { BsInfoSquareFill } from 'react-icons/bs';
import { ImCart } from 'react-icons/im';
import { BiLogOutCircle } from 'react-icons/bi';
import { VscVmActive } from 'react-icons/vsc';

export const Header = ({ isLogin, setIsLogin }) => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const logo = () => {
        navigate('/');
    }

    const goCar = () => {
        navigate('/car');
    }

    const logout = () => {
        setIsLogin(false);
        logo();
    }

    return (
        <header>
            <div className="card">
                <div className="flex card-container overflow-hidden">
                    <div className="flex flex-column align-items-center justify-content-center m-2 px-5 border-round">
                        <img src="src/images/LogoAguila.jpg" alt="Logo Multicomercio" className='border-round-xl w-20rem h-6rem cursor-pointer mt-2' onClick={logo} title='Multicomercio' />
                    </div>
                    <div className="flex-grow-1 flex align-items-center justify-content-start px-5 border-round">
                        <div className="card">
                            <Button label='Productos' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<FaShoppingBag className='text-2xl mr-1' />} />
                            <Button label='Precios' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<FaDollarSign className='text-2xl mr-1' />} />
                            <Button label='Blog' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<FaBloggerB className='text-2xl mr-1' />} />
                            <Button label='Nosotros' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<BsInfoSquareFill className='text-2xl mr-1' />} />
                        </div>
                    </div>
                    <div className="flex-none flex align-items-center justify-content-start px-5 border-round">
                        <Button label='Pedidos' className="p-button-text text-black-alpha-90 text-xl text-center mr-2" icon={<ImCart className='text-2xl mr-1' />}
                            onClick={goCar} />

                        {!isLogin ? (
                            <Button label='Iniciar Sesión' onClick={login}
                                className="bg-green-300 text-black-alpha-90 text-xl text-center mr-8" />
                        ) : (
                            <div>
                                <div className="flex align-items-center">
                                    <Tooltip target=".tooltip-button" autoHide={false}>
                                        <div className="flex align-items-center">
                                            <Button type="button" label='Cerrar sesion' icon={<BiLogOutCircle className='mr-2 text-3xl' />} onClick={logout} className="p-button-rounded p-button-success ml-2"></Button>
                                        </div>
                                    </Tooltip>
                                    <Button className="tooltip-button ml-2" type="button" label="Logueado" icon={<VscVmActive className='mr-2 text-3xl' />} />
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
                <hr />
            </div>
        </header>
    )
}
