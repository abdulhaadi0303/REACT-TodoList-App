import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <p className='footernote'>Copyright @ {currentYear}</p>
  );
}

export default Footer;
