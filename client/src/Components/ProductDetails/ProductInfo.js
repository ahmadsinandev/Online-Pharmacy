import React from "react";
import ShowRating from "../Common/ShowRating";
const ProductInfo = ({ product: { image, brand, description,totalReview } }) => {
  return (
    <div className="mx-auto flex flex-wrap justify-between">
      <img
        alt="ecommerce"
        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={image}
      />
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
          The Catcher in the Rye
        </h1>
        <h2 className="text-sm title-font text-gray-900 tracking-widest mb-2">
          Brand: {brand}
        </h2>
        <div className="mb-2">
        <ShowRating value={4}/>
        </div>
        <p className="leading-relaxed h-20 overflow-hidden">{description}</p>
        <div className="flex mt-4 items-center pb-4 border-b-2 border-gray-100 mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
        </div>
        <div className="flex ml-6 items-center">
          <span className="mr-3">Size</span>
          <div className="relative">
            <select
              className={`rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2  text-base pl-3 pr-10`}
            >
              <option>SM</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
