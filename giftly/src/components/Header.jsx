import React from 'react';
import { motion } from 'framer-motion';
import flowersImage from '../assets/Flower.png'; 

const Header = () => {
  return (
    <header className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center text-gray-800 overflow-hidden">
      {/* Fading "Flowers" Text */}
      <div className="absolute top-12 flex flex-col items-center opacity-20 space-y-4">
        {[...Array(3)].map((_, i) => (
          <motion.span 
            key={i} 
            className="text-7xl md:text-7xl font-bold opacity-0 text-gray-300"
            style={{ fontFamily: 'Garet-Heavy', color: i === 1 ? 'red' : 'gray' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.5 }}
          >
            Flowers
          </motion.span>
        ))}
      </div>

      {/* Centered Flower Image */}
      <div className="relative z-20 flex justify-center items-center mb-16">
        <img 
          src={flowersImage} 
          alt="Flowers" 
          className="w-64 h-64 object-contain"
        />
      </div>

    </header>
  );
};

export default Header;
