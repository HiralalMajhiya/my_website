import React from 'react';
import '../styles/Kart.css';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
function MenuItem({ image, name, price }) {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>
        {price} Rupees
        <button id='kart'>
          <ShoppingBagRoundedIcon />
        </button>
        <span id='add'>add</span>
      </p>
    </div>
  );
}

export default MenuItem;
