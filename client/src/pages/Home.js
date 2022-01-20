import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Products from '../components/Products';
import Blog from '../components/Blog';

import { useQuery, userMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutation'

const Home = () => {

    const {data} = useQuery(QUERY_HISTORY, {variables: {orderId: '61e8ed94fd4845ddf5ebb96e'}})
    console.log(data)
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