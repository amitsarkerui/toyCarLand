import React from "react";

const Newsletter = () => {
  return (
    <div className="grid grid-cols-1 gap-3 items-center bg-slate-100 p-8 rounded-xl md:grid-cols-3">
      <img
        className="h-full object-cover rounded-lg"
        src="https://i.ibb.co/9qjW45K/red-toy-car-with-christmas-tree-it-bunch-gifts-christmas-tree-background-min.jpg"
        alt=""
      />
      <div className="col-span-2 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="">
          <h2 className="mb-4 text-3xl tracking-tight  text-gray-900 sm:text-4xl dark:text-white">
            Subscribe our newsletter
          </h2>
          <p className="mx-auto mb-4 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay in the loop with the latest updates, new releases, and
            exclusive offers for our fantastic toy car collection. Sign up now
            to receive our newsletter straight to your inbox.
          </p>
          <input
            type="email"
            placeholder="Email please"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn bg-[#ECCC68] border-none ml-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
