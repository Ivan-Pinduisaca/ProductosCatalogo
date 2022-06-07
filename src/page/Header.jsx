import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';

import { FaBloggerB } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { BsInfoSquareFill } from 'react-icons/bs';
import { ImCart } from 'react-icons/im';


export const Header = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const logo = () => {
        navigate('/home');
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
                        <Button label='Pedidos' className="p-button-text text-black-alpha-90 text-xl text-center mr-2" icon={<ImCart className='text-2xl mr-1' />} />
                        <Button label='Iniciar Sesión' onClick={login}
                            className="bg-green-300 text-black-alpha-90 text-xl text-center mr-8" />
                    </div>
                </div>
                <hr />
            </div>
        </header>
    )
}
