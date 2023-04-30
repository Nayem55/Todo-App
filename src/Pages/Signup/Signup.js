import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const navigate = useNavigate();
  const [passError, setPassError]=useState("")
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  if (loading) {
    return;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(password.length<6){
        setPassError("Password must contain 6 characters")
        return
    }
    createUserWithEmailAndPassword(email, password);
    setPassError("")
  };
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
        <p className="text-error m-2 font-bold">{error?error.message:passError}</p>
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
