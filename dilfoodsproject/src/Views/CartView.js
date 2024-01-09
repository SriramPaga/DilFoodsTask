import React, { useContext } from 'react';
import CartProduct from '../Components/CartProduct';
import { FoodContext } from '../App';
import Data from '../JSONData/data.json';
import { Link } from 'react-router-dom';
function CartView(props) {
  const { cart } = useContext(FoodContext);
  let totalPrice = 0;
  const shippingCost = 5;
  let grandTotal = 0;
  const EmptyCart = (
    <>
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Empty</h1>
      <div className='container flex justify-center'>
        <img
          src="https://i.pinimg.com/564x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"
          className="w-1/2 rounded-lg "
        />
      </div>
      {/* Image taken from pinterest */}
    </>
  );
  const fullCart = (
    <div className=''>
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-2/3">
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
              {
                grandTotal = totalPrice + shippingCost;
              }
            }
            return (
              <CartProduct
                foodData={foodData}
                item={item}
                totalPrice={totalPrice}
              />
            );
          })}
        </div>
        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">${totalPrice}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">${shippingCost}</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">${grandTotal} USD</p>
              {/* <p class="text-sm text-gray-700">including VAT</p> */}
            </div>
          </div>
          <Link to="/Payment">
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  return (
    <div class="h-full bg-gray-100 pt-20">
      {cart.length > 0 ? fullCart : EmptyCart}
    </div>
  );
}

export default CartView;
