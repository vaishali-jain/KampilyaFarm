import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Farm Highlights!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Jivamritaj.jpg'
              text='Preparing Organic food for plants'
              label='Jivamrit'
              path='/services'
            />
            <CardItem
              src='images/Jivamritav.jpg'
              text='Preparing Organic nutrient source for plants'
              label='Jivamrit'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/NamamiGange.jpg'
              text='River Ram Ganga near the farm'
              label='Ram Ganga'
              path='/services'
            />
            <CardItem
              src='images/PreWheat.jpg'
              text='Bansi wheat'
              label='Growing wheat'
              path='/products'
            />
            <CardItem
              src='images/Gate.jpg'
              text='Welcome to Kampilya Farm'
              label='Gate'
              path='/contactdetails'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
