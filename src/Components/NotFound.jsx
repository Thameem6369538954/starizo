import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div className="max-w-lg">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">The page you're looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
