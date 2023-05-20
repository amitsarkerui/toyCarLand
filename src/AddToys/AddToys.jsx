import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user, loading } = useContext(AuthContextProvider);
  const handleAddToys = (e) => {
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

    const newToy = {
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
    console.log(newToy);

    fetch("https://toy-cars-server-psi.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Toys Added Successfully!",
            text: "Want to add more toys ?",
            icon: "success",
            confirmButtonText: "Yeah",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="container mx-auto py-20">
      <Link to={"/"}>
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
          <h4>Back to home</h4>
        </span>
      </Link>
      <div className="bg-gray-200 mt-10 px-10 p-12 rounded-xl">
        <h2 className="text-2xl text-center">Add a new toys</h2>
        <p className="text-center max-w-2xl mx-auto my-5 text-gray-600">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <div>
          <form
            onSubmit={handleAddToys}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div className="">
              <label className="mb-3 ml-1 block text-base font-medium text-black">
                Toys Name
              </label>
              <input
                required
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
                required
                type="text"
                value={user?.displayName}
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
                type="email"
                value={user?.email}
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
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
