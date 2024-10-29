import React from 'react';
import { useNavigate } from 'react-router-dom';
import headerImage from '../assets/header.png';

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <header
      className="flex justify-between items-center p-4 bg-cover bg-opacity-70"
      style={{ backgroundImage: `url(${headerImage})` }} // Set the background image
    >

      <ul className="flex space-x-8 text-lg text-stone-900">
        <li className="hover:text-purple-700 cursor-pointer">Home</li>
        <li className="hover:text-purple-700 cursor-pointer">Tentang Kami</li>
        <li className="hover:text-purple-700 cursor-pointer">Partner</li>
        <li className="hover:text-purple-700 cursor-pointer">Fitur</li>
        <li className="hover:text-purple-700 cursor-pointer">Contact</li>
      </ul>

      {/* Button */}
      <button
        className="px-6 py-2 bg-purple-900 text-white font-bold rounded-lg shadow-md hover:bg-purple-700"
        onClick={handleLoginClick}
      >
        Login
      </button>
    </header>
  );
}; 

export default Hero;
