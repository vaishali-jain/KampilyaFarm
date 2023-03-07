import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const items = [
  {
    name: 'AshGourd',
    shortDescription: 'Winter Melon',
    imageUrl: 'Images/Vegetables/AshGourd.jpg'
  },
  {
    name: 'Bhindi',
    shortDescription: 'Lady Finger',
    imageUrl: 'Images/Vegetables/Bhindi.jpg'
  },
  {
    name: 'BottleGourd',
    shortDescription: 'Lauki',
    imageUrl: 'Images/Vegetables/BottleGourd.jpg'
  },
  {
    name: 'Bitter Gourd',
    shortDescription: 'Karela',
    imageUrl: 'Images/Vegetables/BitterGourd.jpg'
  },{
    name: 'Chilli',
    shortDescription: 'Chiili',
    imageUrl: 'Images/Vegetables/Chilli.jpg'
  },
  {
    name: 'CowPea',
    shortDescription: 'Lobiya',
    imageUrl: 'Images/Vegetables/CowpeaLobiya.jpg'
  },{
    name: 'Cucumber',
    shortDescription: 'Kheera',
    imageUrl: 'Images/Vegetables/Cucumber.jpg'
  },
  {
    name: 'French Beans',
    shortDescription: 'Beans',
    imageUrl: 'Images/Vegetables/FrenchBeans.jpg'
  },{
    name: 'Green Capsicum',
    shortDescription: 'Shimla Mirch',
    imageUrl: 'Images/Vegetables/GreenCapsicum.jpg'
  },
  {
    name: 'Green Amaranth',
    shortDescription: 'Amaranth',
    imageUrl: 'Images/Vegetables/GreenAmaranth.jpg'
  },{
    name: 'Kakri',
    shortDescription: 'Cucumber - Kakri',
    imageUrl: 'Images/Vegetables/KakriLong.jpg'
  },
  {
    name: 'Saijan',
    shortDescription: 'Moringa',
    imageUrl: 'Images/Vegetables/MoringaSaijanDrumstick.jpg'
  },{
    name: 'Sambar Cucumber',
    shortDescription: 'Yellow Sambar Cucumber',
    imageUrl: 'Images/Vegetables/SambarCucumber.jpg'
  },
  {
    name: 'Spinach',
    shortDescription: 'Spinach',
    imageUrl: 'Images/Vegetables/Spinach.jpg'
  },
  {
    name: 'Apple Gourd',
    shortDescription: 'Tinda',
    imageUrl: 'Images/Vegetables/TindaAppleGourd.jpg'
  },{
    name: 'Tomato',
    shortDescription: 'Red Tomatoes',
    imageUrl: 'Images/Vegetables/Tomato.jpg'
  },
  // Add more items here
];

function ItemList() {
  return (
    <>
    <h1 className='products'>Vegetables</h1>
    <div className="item-list">
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="item-image">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="item-description">
            <h2>{item.name}</h2>
            <Link to='/Vegetables/AshGourd'>Know more</Link>
            <p className="short-description">{item.shortDescription}</p>
            <div className='blog-flex-container custom-font'><p className='custom-text'><b>
              </b></p>

        </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default ItemList;

// export default function Products() {
//   return (
//     <>
//        <h1 className='products'>Vegetables</h1> 7836926580
//       <div className='flex-container'>
//         <div><div><img src="Images/Vegetables/TindaAppleGourd.jpg" width="100px" height="100px"></img></div><div><a href='#'>Know More</a></div></div>
//         <div>French Beans</div>
//         <div>Tomato</div>
//         <div>Cucumber</div>
//         <div>Bottle Gourd</div>
//         </div>
      
//     </>
//   );
// }
