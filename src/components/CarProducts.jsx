import React from 'react'
import { Header } from '../page/Header'

export const CarProducts = ({ isLogin, prodBuy }) => {
    return (
        <div>
            <Header isLogin={isLogin} />
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
                    </div>
                )
            })}
        </div>
    )
}
