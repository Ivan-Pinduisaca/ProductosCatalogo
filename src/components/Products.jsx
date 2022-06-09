import React from 'react'
import { Header } from '../page/Header'
import { ProductList } from './ProductList'

export const Products = ({ isLogin, prodBuy, setProdBuy }) => {
    return (
        <div>
            <Header isLogin={isLogin} />
            <ProductList isLogin={isLogin} prodBuy={prodBuy} setProdBuy={setProdBuy} />
        </div>
    )
}
