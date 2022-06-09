import React from 'react'
import { Header } from '../page/Header'
import { ProductList } from './ProductList'

export const Products = ({ isLogin, setIsLogin, prodBuy, setProdBuy }) => {
    return (
        <div>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} />
            <ProductList isLogin={isLogin} prodBuy={prodBuy} setProdBuy={setProdBuy} />
        </div>
    )
}
