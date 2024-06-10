import React from 'react';

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
           <span className='text-orange-500'>Fast Delivery</span> Delicious Foods
          </h1>
          <p className='px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight'>
            
              Bringing happiness and delicious food right to your doorstep with every order.
          </p>
          <button className='mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition-colors duration-300'>
            Order Now
          </button>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" alt="/" />
      </div>
    </div>
  );
};

export default Hero;