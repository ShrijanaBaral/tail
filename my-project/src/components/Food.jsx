import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  // Reset filters
  const resetFilters = () => {
    setFoods(data);
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between gap-8 mt-8'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Type</p>
          <div className='flex flex-wrap gap-2'>
            <button
              onClick={resetFilters}
              className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-md'
            >
              All
            </button>
            {/* Render category buttons dynamically */}
            {['burger', 'pizza', 'salad', 'chicken'].map((category) => (
              <button
                key={category}
                onClick={() => filterType(category)}
                className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-md'
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
          <div className='flex gap-2'>
            {['1$', '10$', '50$', '100$'].map((price) => (
              <button
                key={price}
                onClick={() => filterPrice(price)}
                className='border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-md'
              >
                {price}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;