import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative overflow-hidden'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 py-2 px-4 mt-4 hover:bg-opacity-80 transition-colors duration-300'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105'
          src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </div>
      {/* Repeat the same structure for other cards */}
    </div>
  );
};

export default HeadlineCards;