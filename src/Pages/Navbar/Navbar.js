import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-40">
      <div className="flex items-center">
        <Link to="/" className="text-3xl text-accent p-5 font-bold font-serif"> tick<span className="text-secondary">and</span>tock </Link>
        <Link to="/login" className="text-secondary ms-auto mr-10 text-xl font-bold hover:text-accent">
          Login
        </Link>
      </div>
      <hr className="h-2 bg-secondary" />
    </div>
  );
};

export default Navbar;
