import React from 'react';
import Banner from '../HomeComponents/Banner';
import Gallery from '../HomeComponents/Gallery';
import BlogPost from '../HomeComponents/BlogPost';

const Home = () => {
    return (
        <div className='mt-3'>
          <Banner></Banner>
          <Gallery></Gallery>
          <BlogPost></BlogPost>
        </div>
    );
};

export default Home;