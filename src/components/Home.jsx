import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/CarouselDemo.css';

import { Header } from '../page/Header';
import { Content } from '../page/Content';

export const Home = () => {
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
            <Header />

            <Content seccions={seccions} navigate={navigate} />
            <aside>
                <ol>
                    <li><span>Elements</span></li>
                    <li><span>Estructure</span></li>
                </ol>
            </aside>

            <footer>
                @Ivan Pinduisaca &copy;
            </footer>
        </div>
    )
}
