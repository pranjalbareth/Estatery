import React, { useState, useContext } from 'react';
// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine, RiCalendar2Line, RiCalendar2Fill, RiCalendarFill } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const WhenDropdown = () => {
  const { date, setDate, selecteddate } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <div>
          <div className='text-[13px] font-medium leading-tight'>{date}</div>
          <div className='text-[15px] leading-loose'>Select Move-in Date</div>
        </div>
          <RiCalendar2Line width="32px" className='dropdown-icon-secondary bg-blue-border' />
        
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {selecteddate.map((date, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setDate(date)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {date}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default WhenDropdown;
