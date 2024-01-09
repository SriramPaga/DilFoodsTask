import React, { useContext } from 'react';
import { FoodContext } from '../App';
import Data from '../JSONData/data.json';
function CartView(props) {
  const { cart } = useContext(FoodContext);
  let totalPrice = 0;
  return (
    <div className="container">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <h2 className="text-4xl">Cart</h2>
      </div>

      {cart.map((item, index) => {
        let foodData;
        {
          Data.map((element, i) => {
            if (item.id === element.id) {
              foodData = element;
              console.log(foodData);
              console.log(element);
            }
          });
        }
        {
          totalPrice = totalPrice + foodData.price * item.quantity;
        }
        return (
          <div class="border mx-1 my-1 border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-6">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {foodData.productName}
              </div>
              <p class="text-gray-700 text-base">{foodData.price}</p>
              <p class="text-gray-700 text-base">{item.quantity}</p>
              <p class="text-gray-700 text-base">
                {foodData.price * item.quantity}
              </p>
            </div>
          </div>
        );
      })}
      {totalPrice}
      <div></div>
    </div>
  );
}

export default CartView;
