import React from 'react';
import Banner from '../HomeComponents/Banner';
import Gallery from '../HomeComponents/Gallery';

const Home = () => {
    return (
        <div className='mt-3'>
          <Banner></Banner>
          <Gallery></Gallery>
        </div>
    );
};

export default Home;