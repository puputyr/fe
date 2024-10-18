// Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    // background: 'linear-gradient(to bottom, #ffc1e3, #b392ac)',
  };

  const menuStyle = {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#5e2b84',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to Login page
  };

  return (
    <header
    className='hero' style={navStyle}>
      <ul style={menuStyle}>
        <li>Home</li>
        <li>Tentang Kami</li>
        <li>Partner</li>
        <li>Fitur</li>
        <li>Contact</li>
      </ul>
      <button style={buttonStyle} onClick={handleLoginClick}>
        Login
      </button>
    </header>
  );
};

export default Hero;
