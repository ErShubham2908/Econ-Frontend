import React from 'react'
import Mobile from './Mobile';
import Ipad from './Ipad';
import Accessories from './Accessories';
import MacBook from './MacBook';
import Laptop from './Laptop';
import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <>
        <Mobile />
        <Laptop />
        <Ipad />
        <Slider />
        <MacBook />
        <Accessories />

    </>
  )
}

export default Home;