import React from "react";

const Video = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mb-6">Watch Kid's Fun</h2>
      <div className="bg-[url('https://i.ibb.co/cJxkB2T/Optimized-children-playing-grass.jpg')] bg-cover bg-center  rounded-2xl">
        <div className="bg-gradient-to-r from-[#000000] to-[rgba(236, 204, 104, 0.6)] text-2xl text-center py-52 rounded-2xl">
          <h2 className=" text-white">
            We make your children happier with the best toys
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="text-center mx-auto w-24 h-24 mt-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Video;
