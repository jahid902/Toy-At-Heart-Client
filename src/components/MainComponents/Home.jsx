import React from 'react';
import Banner from '../HomePageComponents/Banner';
import Gallery from '../HomePageComponents/Gallery';
import BlogPost from '../HomePageComponents/BlogPost';
import Features from '../HomePageComponents/Features';
import ShopByCategory from '../HomePageComponents/ShopByCategory';

const Home = () => {
    return (
        <div className='mt-3'>
          <Banner></Banner>
          <Gallery></Gallery>
          <ShopByCategory></ShopByCategory>
          <BlogPost></BlogPost>
          <Features></Features>
        </div>
    );
};

export default Home;