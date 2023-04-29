import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {};
  return (
    <div>
      <p className="text-center text-secondary text-3xl font-bold mt-10">
        Signup
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[30vw] mx-auto mt-[30px]"
      >
        <input
          className="p-2 mb-2 text-black"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          className="p-2 mb-2 text-black"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          className="p-2 mb-2 text-black"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <input
          type="submit"
          className="btn btn-secondary border-none text-white hover:bg-accent"
        />
      </form>
      <p className="text-black text-center mt-2">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-secondary hover:text-accent font-bold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
