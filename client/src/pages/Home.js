import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Products from '../components/Products';
import Blog from '../components/Blog';


const Home = () => {

    return (
        <div>
            <Hero />
            <Collections />
            <Products />
            <Blog />
        </div>
    )
}

export default Home;