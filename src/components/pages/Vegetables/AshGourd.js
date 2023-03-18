import React from 'react';
import '../../App.css';



function ItemList() {
  return (
    <>
    <h1 className='products'>Ash Gourd</h1>
    <div className="item-list">
        <div  className="item">
          <div className="item-image">
            <img src="Images/Vegetables/AshGourd.jpg" alt="Winter Melon" />
          </div>
          <div className="item-description">
            <h2>{item.name}</h2>
            <p className="short-description">Ash Gourd</p>
            <p className="facilities">{item.facilities}</p>
            <p className='custom-text'>Ash gourd grows well in warm weather</p>
          </div>
        </div>
    </div>
    </>
  );
}

export default AshGourdVeggie;