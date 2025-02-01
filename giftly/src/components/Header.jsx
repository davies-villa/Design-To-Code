import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center text-center text-gray-800" >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-0"></div>

      {/* Text Content */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Surprise Your Loved Ones with <br /> Beautiful Bouquets
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Handpicked flowers, beautifully arranged for every occasion.
        </p>
        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;
