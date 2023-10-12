import React from 'react';
import cart from '../../assets/shopping-cart-empty-side-view_318-50806.svg';
import '../CartWidget/Cartwidget.css';

const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt="cart-widget" />
      0
    </div>
  );
};

export default CartWidget;
