import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/CarouselDemo.css';

import { Header } from '../page/Header';
import { Content } from '../page/Content';
import { Footer } from '../page/Footer';

export const Home = ({ isLogin, setIsLogin }) => {
    const [seccions, setSeccions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getSeccions().then(data => setSeccions(data));
    }, []);

    const getSeccions = async () => {
        const res = await fetch('src/data/seccions.js');
        const data = res.json();
        return data;
    }

    return (
        <div className='m-3 bg-green-100 text-black-alpha-90 border-round-xl'>
            <Header isLogin={isLogin} setIsLogin={setIsLogin} />
            <Content seccions={seccions} navigate={navigate} />
            <Footer />
        </div>
    )
}
