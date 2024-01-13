import React from 'react';
import { Link } from 'react-router-dom';

function PlacedAlert() {
  return (
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div class="rounded-lg bg-gray-50 px-16 py-14">
        <div class="flex justify-center">
          <div class="rounded-full bg-green-200 p-6">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-400 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-8 w-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <h3 class="my-4 text-center text-3xl font-semibold text-gray-700">
          Congratulation!!!
        </h3>
        <p class="w-[230px] text-center font-normal text-gray-600">
          Your order have been taken and is being attended to
        </p>
        <Link to="/products">
          <button class="mx-auto mt-8 block rounded-xl border-4 border-transparent bg-red-400 px-6 py-3 text-center text-base font-medium text-red-100 outline-8 hover:outline hover:duration-300">
            Done
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PlacedAlert;
