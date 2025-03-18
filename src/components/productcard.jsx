// write product card here
// write product card here
import React from 'react';
import ViewProductButton from '../components/button';


const ProductCard = () => {
  const productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiApF_JfOty2_Gde2L9SfXbAuSceRpiFv_KQ&s';
  const productName = 'Bayerische Motoren Werke';
  const productPrice = '2.17 crore';

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', textAlign: 'center', borderRadius: '8px', width: '250px' }}>
      <img src={productImage} alt="Product" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{productName}</h3>
      <p style={{ color: 'green', fontWeight: 'bold' }}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default ProductCard;
