import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Welcome to the Finance Corporation
        </h1>
        <p className="text-gray-600 text-lg text-center">
          This is a simple home page built with React and Tailwind CSS.
        </p>
        <div className="flex justify-center mt-6">
          <p className="text-gray-600 text-lg text-center">
            {" "}
            Explore the application
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
