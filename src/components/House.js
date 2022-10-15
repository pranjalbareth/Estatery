import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='bg-white rounded-[10px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-xl transition' >
      <img className='rounded-t-[10px]' src={house.image} alt='' />
      <div className='p-5 bg-white rounded-b-[10px]' style={{border: '1px solid #e9e9ff'}}>
      <div className='flex' style={{alignItems: "center"}}>
        <span className='text-lg font-semibold bg-blue-border '>$ {house.price}</span>
        <p className='text-[8px] grey-tint' style={{color: "#9f9f9f", marginTop: "4px"}}>‎ /month</p>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.agent.name}</div>
      <div className='text-[13px] inline-block leading-tight'>
          {house.address}
        </div>
      <hr className='mt-5'/>
      <div className='flex gap-x-4 my-4 justify-between'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[18px] rounded-full'>
            <BiBed className='bg-blue-border' />
          </div>
          <div className='text-[15px] grey-tint'>{house.bedrooms} Beds</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[18px] rounded-full'>
            <BiBath className='bg-blue-border'/>
          </div>
          <div className='text-[15px] grey-tint'>{house.bathrooms} Bathrooms</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[18px] rounded-full'>
            <BiArea className='bg-blue-border'/> 
          </div>
          <div className='text-[15px] grey-tint'>{house.surface} m<sup>2</sup></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default House;
