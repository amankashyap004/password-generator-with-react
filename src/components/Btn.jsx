import React from "react";

const Button = ({ value }) => {
   return (
      <button className="flex items-center justify-center px-4 py-2 bg-green-600 text-white font-bold text-lg  leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
         {value}
      </button>
   );
};

export default Button;
