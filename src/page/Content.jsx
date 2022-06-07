import React from 'react';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';

export const Content = ({ seccions, navigate }) => {

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

    const seeProducts = (id) => {
        seccions.map((seccion) => {
            if (id === seccion.id) {
                navigate(`/${seccion.nombreSeccion}`);
            }
        })
    }

    const seccionTemplate = (seccion) => {
        return (
            <div className="product-item text-white-alpha-90 p-2">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img src={`src/images/seccions/${seccion.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={seccion.nombreSeccion} className="product-image w-11 h-23rem border-round-xl" />
                    </div>
                    <div>
                        <h4 className="mb-1">{seccion.descripcion}</h4>
                        <div className="car-buttons mt-5">
                            <Button label='Ver todos los productos' icon="pi pi-eye" id={seccion.id} className="bg-orange-100 p-button-rounded" onClick={() => seeProducts(seccion.id)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <article>
                <Card className='m-3 bg-green-100 h-auto'>
                    <article>
                        <div className="grid grid-nogutter surface-0 text-800 bg-green-100">
                            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-start ">
                                <section>
                                    <span className="block text-6xl text-black-alpha-90 font-bold mb-3">Ferreteria, Bazar, Papeleria, Tecnología y productos Descartables.</span>
                                    <div className="text-5xl text-indigo-700 font-bold mb-3">Encuentra todos los productos que estás buscando.</div>
                                    <p className="text-3xl mt-0 mb-4 text-pink-600 line-height-3 mt-3">Hacemos envios de todos nuestros productos a nivel nacional e internacional.</p>
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
                            <div className="grid grid-nogutter surface-0 text-800 mt-5 border-round">
                                <div className="col-12 md:col-6 overflow-hidden m-auto">
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
                </Card>
            </article>
        </div>
    )
}
