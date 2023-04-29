import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit=(e)=>{

    }
  return (
    <div>
    <p className="text-center text-secondary text-3xl font-bold mt-10">Login</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[30vw] mx-auto mt-[30px]"
      >
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
      <p className="text-black text-center mt-2">Don't have an account? <Link to='/signup' className="text-secondary hover:text-accent font-bold">Signup</Link></p>
    </div>
  );
};

export default Login;
