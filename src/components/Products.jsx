import React from 'react'
import { Header } from '../page/Header'
import { ProductList } from './ProductList'

export const Products = ({ isLogin }) => {
    return (
        <div>
            <Header isLogin={isLogin} />
            <ProductList />
        </div>
    )
}
