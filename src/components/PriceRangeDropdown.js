import React, { useState, useEffect, useContext } from 'react';

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Select Price range',
    },
    {
      value: '1000 - 2000',
    },
    {
      value: '2000 - 3000',
    },
    {
      value: '3000 - 4000',
    },
    {
      value: '4000 - 5000',
    },
    {
      value: '5000 - 6000',
    },
    {
      value: '6000 - 7000',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <div>
          <div className='text-[13px] font-medium leading-tight'>Price</div>
          <div className='text-[15px] leading-loose'>{price}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='filter-icon-bg dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='filter-icon-bg dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
