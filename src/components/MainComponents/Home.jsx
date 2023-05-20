import React from 'react';
import Banner from '../HomePageComponents/Banner';
import Gallery from '../HomePageComponents/Gallery';
import BlogPost from '../HomePageComponents/BlogPost';
import Features from '../HomePageComponents/Features';
import ShopByCategory from '../HomePageComponents/ShopByCategory';
import useTitle from '../../Hooks/useTitle';

const Home = () => {

    useTitle('Home');

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