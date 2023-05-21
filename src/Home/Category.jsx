import { Rating } from "@smastrom/react-rating";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";

const Category = (props) => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);
  const { user } = useContext(AuthContextProvider);
  const allToys = props.allToys;
  const [racing, setRacing] = useState([]);
  const [truck, setTruck] = useState([]);
  const [monster, setMonster] = useState([]);

  //   Racing car filter
  const handleRacingCar = () => {
    const racingCar = allToys.filter((toy) => toy.category === "Racing Car");
    setRacing(racingCar);
  };
  //   Truck car filter
  const handleTruck = () => {
    const racingTruck = allToys.filter((toy) => toy.category === "Truck");
    setTruck(racingTruck);
  };
  //   Monster car filter
  const handleMonster = () => {
    const monsterTruck = allToys.filter(
      (toy) => toy.category === "Monster Car"
    );
    setMonster(monsterTruck);
  };

  const handleConfirmation = (id) => {
    if (!user) {
      Swal.fire({
        title: "Please login!",
        text: "Please Login before view details",
        icon: "warning",
        confirmButtonText: "okey",
      });
    }
  };
  return (
    <div className="my-16">
      <h1 className="text-4xl text-center mb-8">Search by Category</h1>
      <Tabs>
        <TabList>
          <Tab>
            <button className="btn bg-[#ECCC68] border-none">All</button>
          </Tab>
          <Tab>
            <button
              onClick={handleRacingCar}
              className="btn bg-[#ECCC68] border-none"
            >
              Racing Car
            </button>
          </Tab>
          <Tab>
            <button
              onClick={handleTruck}
              className="btn bg-[#ECCC68] border-none"
            >
              Truck
            </button>
          </Tab>
          <Tab>
            <button
              onClick={handleMonster}
              className="btn bg-[#ECCC68] border-none"
            >
              Monster Car
            </button>
          </Tab>
        </TabList>
        {/* -----------------All ---------------------- */}
        <TabPanel data-aos="fade-right">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {allToys.map((toy) => (
              <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 rounded-2xl bg-gray-100 p-5">
                <img
                  className="rounded-lg h-full object-cover"
                  src={toy.photo}
                  alt=""
                />
                <div>
                  <h1 className="text-2xl my-3">Toy's Name: {toy.name}</h1>
                  <p className="bg-[#ECCC68] inline text-sm font-semibold text-gray-900 px-2 py-1 rounded-full">
                    {toy.category}
                  </p>
                  <p className="font-medium mt-8 mb-2">Seller: {toy.seller}</p>
                  <p className="font-medium mb-2">Seller-email: {toy.email}</p>
                  <span className="flex  gap-2 mb-3">
                    <p className="text-xl font-bold text-[#ECCC68]">
                      ${toy.price}
                    </p>
                    <span className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={toy.rating}
                        readOnly
                      />{" "}
                      <span>({toy.rating})</span>
                    </span>
                  </span>
                  <p>In stock: {toy.quantity}</p>
                  <Link
                    onClick={handleConfirmation}
                    to={`/toyDetails/${toy._id}`}
                  >
                    <button className="btn btn-block bg-[#ECCC68] border-none text-gray-900 hover:text-white mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* -----------------Racing ---------------------- */}
        <TabPanel>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {racing.map((toy) => (
              <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 rounded-2xl bg-gray-100 p-5">
                <img
                  className="rounded-lg h-full object-cover"
                  src={toy.photo}
                  alt=""
                />
                <div>
                  <h1 className="text-2xl my-3">Toy's Name: {toy.name}</h1>
                  <p className="bg-[#ECCC68] inline text-sm font-semibold text-gray-900 px-2 py-1 rounded-full">
                    {toy.category}
                  </p>
                  <p className="font-medium mt-8 mb-2">Seller: {toy.seller}</p>
                  <p className="font-medium mb-2">Seller-email: {toy.email}</p>
                  <span className="flex  gap-2 mb-3">
                    <p className="text-xl font-bold text-[#ECCC68]">
                      ${toy.price}
                    </p>
                    <span className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={toy.rating}
                        readOnly
                      />{" "}
                      <span>({toy.rating})</span>
                    </span>
                  </span>
                  <p>In stock: {toy.quantity}</p>
                  <Link
                    onClick={handleConfirmation}
                    to={`/toyDetails/${toy._id}`}
                  >
                    <button className="btn btn-block bg-[#ECCC68] border-none text-gray-900 hover:text-white mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* -----------------Truck ---------------------- */}
        <TabPanel>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {truck.map((toy) => (
              <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 rounded-2xl bg-gray-100 p-5">
                <img
                  className="rounded-lg h-full object-cover"
                  src={toy.photo}
                  alt=""
                />
                <div>
                  <h1 className="text-2xl my-3">Toy's Name: {toy.name}</h1>
                  <p className="bg-[#ECCC68] inline text-sm font-semibold text-gray-900 px-2 py-1 rounded-full">
                    {toy.category}
                  </p>
                  <p className="font-medium mt-8 mb-2">Seller: {toy.seller}</p>
                  <p className="font-medium mb-2">Seller-email: {toy.email}</p>
                  <span className="flex  gap-2 mb-3">
                    <p className="text-xl font-bold text-[#ECCC68]">
                      ${toy.price}
                    </p>
                    <span className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={toy.rating}
                        readOnly
                      />{" "}
                      <span>({toy.rating})</span>
                    </span>
                  </span>
                  <p>In stock: {toy.quantity}</p>
                  <Link
                    onClick={handleConfirmation}
                    to={`/toyDetails/${toy._id}`}
                  >
                    <button className="btn btn-block bg-[#ECCC68] border-none text-gray-900 hover:text-white mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* -----------------Monster ---------------------- */}
        <TabPanel>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {monster.map((toy) => (
              <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 rounded-2xl bg-gray-100 p-5">
                <img
                  className="rounded-lg h-full object-cover"
                  src={toy.photo}
                  alt=""
                />
                <div>
                  <h1 className="text-2xl my-3">Toy's Name: {toy.name}</h1>
                  <p className="bg-[#ECCC68] inline text-sm font-semibold text-gray-900 px-2 py-1 rounded-full">
                    {toy.category}
                  </p>
                  <p className="font-medium mt-8 mb-2">Seller: {toy.seller}</p>
                  <p className="font-medium mb-2">Seller-email: {toy.email}</p>
                  <span className="flex  gap-2 mb-3">
                    <p className="text-xl font-bold text-[#ECCC68]">
                      ${toy.price}
                    </p>
                    <span className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={toy.rating}
                        readOnly
                      />{" "}
                      <span>({toy.rating})</span>
                    </span>
                  </span>
                  <p>In stock: {toy.quantity}</p>
                  <Link
                    onClick={handleConfirmation}
                    to={`/toyDetails/${toy._id}`}
                  >
                    <button className="btn btn-block bg-[#ECCC68] border-none text-gray-900 hover:text-white mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
