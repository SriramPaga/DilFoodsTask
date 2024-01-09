import React from 'react';
import { useContext, useState } from 'react';
import { FoodContext } from '../App';
function Button(props) {
  const { cart, cartAddition } = useContext(FoodContext);
  function handleCounts() {
    // const variableName = [...cart]
    cartAddition(props.prodId);
    // console.log(cart);
  }
  return (
    <>
      <button
        class={`w-full flex items-center align-items-center rounded-lg justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700 ${props.bgcolor}`}
        onClick={handleCounts}
      >
        Add
      </button>
    </>
  );
}

export default Button;
