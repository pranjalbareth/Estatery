import React, { useContext } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';
import WhenDropdown from './WhenDropdown';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <React.Fragment >
      <div className='py-6 max-w-[1170px] mt-6 mx-auto flex flex-col lg:flex-row justify-between relative lg:-top-5 text-[35px] font-semibold leading-none mb-6 '>
      <span>Search properties to rent</span>
            <input className='hover:bg-blue-border rounded-lg transition px-3 py-1 rounded-lg searchBtn' placeholder='Search with Search Bar'/>
          </div>
          

          
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 bg-white-bg lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <WhenDropdown/>
      <PriceRangeDropdown />
      <PropertyDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className='bg-blue hover:bg-blue-hover transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
      >
        Search
      </button>
    </div>
    </React.Fragment>
  );
};

export default Search;
