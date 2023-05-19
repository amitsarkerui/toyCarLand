import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className="overflow-x-auto w-full py-20">
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
                <span className="badge badge-ghost badge-sm">{toy.email}</span>
              </td>

              <td>$ {toy.price}</td>
              <td>{toy.quantity}</td>
              <th>
                <button className="btn bg-[#ECCC68] border-none text-gray-900 hover:text-white">
                  details
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllToys;
