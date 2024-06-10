import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center mb-8'>
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex flex-col justify-between items-center transition duration-300 ease-in-out transform hover:scale-105'
          >
            <h2 className='font-bold text-lg mb-4'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-32 h-32 object-cover rounded-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;