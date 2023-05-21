import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContextProvider);
  const loadedToys = useLoaderData();
  const [allToys, setAllToys] = useState(loadedToys);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchBox.value.toLowerCase();
    console.log(searchText);
    const filteredToys = loadedToys.filter((toy) => {
      return toy.name.toLowerCase().includes(searchText);
    });
    console.log(filteredToys);
    setAllToys(filteredToys);
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
    <div className="overflow-x-auto w-full py-16">
      <h2 className="text-2xl text-center mb-8">All Toys</h2>

      <form onSubmit={handleSearch} className="w-1/3 mx-auto mb-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            name="searchBox"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search cars by name..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-[#ECCC68] hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#ECCC68] dark:hover:grey-blue-700 dark:focus:ring-grey-800"
          >
            Search
          </button>
        </div>
      </form>
      {allToys.length === 0 ? (
        <div className="my-4">
          <img
            className="text-center mx-auto"
            src="https://i.ibb.co/wKwT9wG/Sorry.png"
            alt=""
          />
          <h3 className="text-2xl text-center">
            Sorry ! Can't find any result
          </h3>
        </div>
      ) : (
        <>
          {" "}
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toys Name</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            {allToys.map((toy) => (
              <tbody key={toy._id}>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-28 h-28">
                          <img
                            src={toy.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="">{toy.name}</h4>
                        <div className="text-sm mt-2">
                          <span className="bg-[#ECCC68] px-2 py-[2px] rounded-lg text-gray-900">
                            {toy.category}
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {toy.seller}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {toy.email}
                    </span>
                  </td>

                  <td>$ {toy.price}</td>
                  <td>{toy.quantity}</td>
                  <th>
                    <Link
                      onClick={handleConfirmation}
                      to={`/toyDetails/${toy._id}`}
                    >
                      <button className="btn bg-[#ECCC68] border-none text-gray-900 hover:text-white">
                        Details
                      </button>
                    </Link>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      )}
    </div>
  );
};

export default AllToys;
