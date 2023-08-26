import React from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <nav className="py-3 border-b-4 border-blue-700 text-center top-0 bg-blue-600 font-bold w-50 text-lg text-white">
      <ul>
        <li className="inline-block py-4">
          <Link to="/signup" className="pl-6 pr-8">
            Sign In
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/signin" className="pl-6 pr-8">
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Choose;
