import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';

import { useNavigate } from 'react-router-dom';

import { FaBloggerB } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { BsInfoSquareFill } from 'react-icons/bs';
import { ImCart } from 'react-icons/im';

import '../css/CarouselDemo.css';

export const Home = () => {
    const [seccions, setSeccions] = useState([]);
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const logo = () => {
        navigate('/home')
    }

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        getSeccions().then(data => setSeccions(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const getSeccions = async () => {
        const res = await fetch('src/data/seccions.js');
        const data = res.json();
        return data;
    }

    const seccionTemplate = (seccion) => {
        return (
            <div className="product-item text-black-alpha-90 p-2">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={`src/images/seccions/${seccion.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={seccion.nombreSeccion} className="product-image w-30rem h-23rem" />
                    </div>
                    <div>
                        <h4 className="mb-1">{seccion.descripcion}</h4>
                        <div className="car-buttons mt-5">
                            <Button label='Ver todos los productos' icon="pi pi-eye" className="p-button-secondary p-button-rounded mr-2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header>
                <div className="card">
                    <div className="flex card-container blue-container overflow-hidden">
                        <div className="flex-none flex align-items-center justify-content-center m-2 px-5 border-round">
                            <img src="src/images/LogoAguila.jpg" alt="Logo Multicomercio" className='border-round-xl w-20rem h-6rem cursor-pointer' onClick={logo} />
                        </div>
                        <div className="flex-grow-1 flex align-items-center justify-content-start m-2 mt-3 px-5 border-round">
                            <div className="card">
                                <Button label='Productos' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<FaShoppingBag className='text-2xl mr-1' />} />
                                <Button label='Precios' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<FaDollarSign className='text-2xl mr-1' />} />
                                <Button label='Blog' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<FaBloggerB className='text-2xl mr-1' />} />
                                <Button label='Nosotros' className="p-button-text text-black-alpha-90 text-xl text-center mx-5" icon={<BsInfoSquareFill className='text-2xl mr-1' />} />
                            </div>
                        </div>
                        <div className="flex-none flex align-items-center justify-content-start m-2 mt-3 px-5 border-round">
                            <Button label='Pedidos' className="p-button-text text-black-alpha-90 text-xl text-center mr-2" icon={<ImCart className='text-2xl mr-1' />} />
                            <Button label='Iniciar Sesión' onClick={login}
                                className="bg-green-300 text-black-alpha-90 text-xl text-center mr-8" />
                        </div>
                    </div>
                    <hr />
                </div>
            </header>

            <article>
                <Card className='m-3 bg-green-100 h-auto'>
                    <Button label='Multicomercio' className="p-button-text text-black-alpha-90 text-xl text-center mr-2" icon='pi pi-home text-2xl' />

                    <article>
                        <div className="grid grid-nogutter surface-0 text-800 bg-green-100">
                            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-start ">
                                <section>
                                    <span className="block text-6xl text-black-alpha-90 font-bold mb-1">Ferreteria, Bazar, Papeleria, Tecnología y productos Descartables.</span>
                                    <div className="text-5xl text-indigo-700 font-bold mb-3">Encuentra todos los productos que estás buscando.</div>
                                    <p className="text-3xl mt-0 mb-4 text-pink-600 line-height-3 mt-5">Hacemos envios de todos nuestros productos a nivel nacional e internacional.</p>
                                </section>
                            </div>
                            <div className="col-12 md:col-6 overflow-hidden">
                                <div className="carousel-demo">
                                    <div className="card">
                                        <img src="src/images/onlineStore.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-nogutter surface-0 text-800 bg-green-100">
                                <div className="col-12 md:col-6 overflow-hidden mt-5 m-auto">
                                    <div className="carousel-demo">
                                        <div className="card">
                                            <Carousel value={seccions} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                                                autoplayInterval={3000} itemTemplate={seccionTemplate} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>


                    </article>
                </Card>
            </article>
            {/* 
            <aside>
                <ol>
                    <li><span>Elements</span></li>
                    <li><span>Estructure</span></li>
                </ol>
            </aside>

            <footer>
                Ivan Pinduisaca &copy;
            </footer> */}
        </div>
    )
}
