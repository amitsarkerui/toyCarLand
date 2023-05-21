import React, { useContext, useEffect, useState } from "react";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user, loading } = useContext(AuthContextProvider);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await fetch(
          `https://toy-cars-server-psi.vercel.app/allToys?email=${user?.email}`
        );
        const data = await response.json();
        setMyToys(data);
      } catch (error) {
        console.log("Error fetching toys:", error);
      }
    };

    if (!loading && user?.email) {
      fetchToys();
    }
  }, [user?.email, loading, control]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-cars-server-psi.vercel.app/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setControl(!control);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  if (loading) {
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full py-24">
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
        {myToys.map((toy) => (
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
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="btn mr-4"
                >
                  Delete
                </button>
                <Link to={`/update/${toy._id}`}>
                  <button className="btn bg-[#ECCC68] border-none text-gray-900 hover:text-white">
                    Update
                  </button>
                </Link>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyToys;
