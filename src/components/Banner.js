import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
          <div className='lg:ml-14 text-[35px] font-semibold leading-none mb-6 '>
            Search properties to rent
          </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
