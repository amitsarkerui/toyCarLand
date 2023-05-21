import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import PageTitle from "../PageTitle";

const ToyDetails = () => {
  const loadedToy = useLoaderData();
  const {
    _id,
    name,
    seller,
    email,
    price,
    category,
    rating,
    photo,
    quantity,
    description,
  } = loadedToy;

  return (
    <div>
      <PageTitle title="Toy Details"></PageTitle>
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 rounded-2xl bg-gray-100 p-10 mt-16">
        <img className="rounded-lg h-full object-cover" src={photo} alt="" />
        <div>
          <h1 className="text-2xl my-3">Toy's Name: {name}</h1>
          <p className="bg-[#ECCC68] inline text-sm font-semibold text-gray-900 px-2 py-1 rounded-full">
            {category}
          </p>
          <p className="font-medium mt-8 mb-2">Seller: {seller}</p>
          <p className="font-medium mb-2">Seller-email: {email}</p>
          <span className="flex  gap-2 mb-3">
            <p className="text-xl font-bold text-[#ECCC68]">${price}</p>
            <span className="flex items-center gap-2">
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
              <span>({rating})</span>
            </span>
            <p>In stock: {quantity}</p>
          </span>
          <span className="mt-10">
            <p>Description :{description}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
