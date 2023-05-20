import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const toys = useLoaderData();
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
  } = toys;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      name,
      seller,
      email,
      price,
      category,
      rating,
      photo,
      quantity,
      description,
    };
    console.log(updatedToy);

    fetch(`http://localhost:5000/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.insertedId) {
        //   Swal.fire({
        //     title: "Toys Added Successfully!",
        //     text: "Want to add more toys ?",
        //     icon: "success",
        //     confirmButtonText: "Yeah",
        //   });
        //   form.reset();
        // }
        console.log(data);
      });
  };
  return (
    <div className="container mx-auto py-20">
      <Link to={"/myToys"}>
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <h4>Back to My Toys</h4>
        </span>
      </Link>
      <div className="bg-gray-200 mt-10 px-10 p-12 rounded-xl grid grid-cols-1 items-center md:grid-cols-2 gap-8">
        <div className="h-full ">
          <img className="h-full object-cover rounded-xl" src={photo} alt="" />
        </div>
        <div>
          <h2 className="text-2xl text-center mb-6">Update Toys</h2>
          <div>
            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <div className="">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Toys Name
                </label>
                <input
                  required
                  defaultValue={name}
                  type="text"
                  placeholder="Toys Name"
                  name="name"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div className="">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Seller Name
                </label>
                <input
                  value={seller}
                  required
                  type="text"
                  name="seller"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div className="">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Seller Email
                </label>
                <input
                  required
                  value={email}
                  type="email"
                  name="email"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div className="">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Price
                </label>
                <input
                  required
                  defaultValue={price}
                  type="number"
                  placeholder="Toys price"
                  name="price"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div>
                <label className="mb-3 block text-base font-medium text-black">
                  Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    defaultValue={category}
                    className="border-form-stroke text-body-color focus:border-primary active:border-primary w-full appearance-none rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                  >
                    <option value="Racing Car">Racing Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Monster Car">Monster Car</option>
                  </select>
                  <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2"></span>
                </div>
              </div>
              <div className="">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Rating
                </label>
                <input
                  required
                  defaultValue={rating}
                  type="number"
                  placeholder="Rating"
                  name="rating"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div className="">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Photo URL
                </label>
                <input
                  defaultValue={photo}
                  required
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div className="">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Available Quantity
                </label>
                <input
                  required
                  defaultValue={quantity}
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <div className="col-span-2">
                <label className="mb-3 ml-1 block text-base font-medium text-black">
                  Descriptions
                </label>
                <textarea
                  required
                  defaultValue={description}
                  type="text"
                  placeholder="Descriptions"
                  name="description"
                  className="h-32 border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
              <input
                required
                className="btn btn-block col-span-2 my-5 bg-[#ECCC68] border-none"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
