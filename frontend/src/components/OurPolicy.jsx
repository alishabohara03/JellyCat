
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHourglassHalf, faHeadset } from '@fortawesome/free-solid-svg-icons';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <FontAwesomeIcon
          icon={faCircleCheck}
          className='w-10 h-10 m-auto mb-5'
        />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-500'>We offer hassle-free exchange policy</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faHourglassHalf}
          className='w-10 h-10 m-auto mb-5'
        />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-500'>We provide 7 days free return policy</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faHeadset}
          className='w-10 h-10 m-auto mb-5'
        />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-500'>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;

