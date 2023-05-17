import React from 'react';
import Banner from '../HomeComponents/Banner';
import Gallery from '../HomeComponents/Gallery';
import BlogPost from '../HomeComponents/BlogPost';
import Features from '../HomeComponents/Features';

const Home = () => {
    return (
        <div className='mt-3'>
          <Banner></Banner>
          <Gallery></Gallery>
          <BlogPost></BlogPost>
          <Features></Features>
        </div>
    );
};

export default Home;