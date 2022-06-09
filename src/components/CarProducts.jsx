import React from 'react';
import { Header } from '../page/Header'

export const CarProducts = ({ isLogin, setIsLogin, prodBuy }) => {

    const pagar = prodBuy.map((p) => p.precio).reduce((prev, curr) => prev + curr, 0);

    return (
        <div className="card">
            <Header isLogin={isLogin} setIsLogin={setIsLogin} />
            {isLogin ?
                (
                    <div>
                        <h1 className='flex justify-content-center mb-5 text-blue-700 border-solid w-4 m-auto'>Total a pagar: ${pagar}</h1>
                        <div className='flex justify-content-evenly flex-wrap card-container list-none'>
                            {prodBuy.map((p) => {
                                return (
                                    <div key={p.id} className="border-solid border-blue-900 px-5 py-2 mb-3">
                                        <img
                                            src={`src/images/product/${p.imagen}`}
                                            alt={p.nombre}
                                            className='mt-5'
                                        />
                                        <h3 className="flex align-items-center justify-content-center">{p.nombre}</h3>
                                        <h4 className="flex align-items-center justify-content-center">$ {p.precio}</h4>
                                        <h4 className="flex align-items-center justify-content-center">Cantidad: {p.cantidad}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : (
                    <h1 className='flex justify-content-center mb-5 text-blue-700 border-solid w-4 m-auto'>No has iniciado sesion</h1>
                )}
        </div>
    )
}
