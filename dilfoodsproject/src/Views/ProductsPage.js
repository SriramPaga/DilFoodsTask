import React from 'react';
import ProductCard from '../Components/ProductCard2';
// import 'bootstrap/dist/css/bootstrap.min.css';
function ProductsPage() {
  return (
    <>
      <div className="container flex flex-wrap space-x-4 ">
        <ProductCard />
      </div>
    </>
  );
}

export default ProductsPage;
