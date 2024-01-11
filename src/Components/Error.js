// import React from "react";
import { useRouteError } from "react-router-dom";
import { ERR_URL } from "../utils/constants";

const Error = () => {
  let err = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="error-container text-center bg-white p-8 rounded shadow-md">
        <img src={ERR_URL} alt="Error" className="error-image mb-4" />
        <div className="error-content">
          <h1 className="text-4xl font-bold text-red-500">Oops...</h1>
          <h2 className="text-2xl font-semibold mb-4">Something Went Wrong</h2>
          <p className="text-gray-600">
            We're sorry, but it seems like there was an error.
          </p>
          <p className="text-gray-600 mb-4">
            Please try again later or contact support.
          </p>
          <div className="error-details text-left">
            <p className="text-gray-700">
              <span className="font-semibold">Status:</span> {err.status}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Status Code:</span>{" "}
              {err.statusText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
