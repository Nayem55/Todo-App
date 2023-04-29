import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
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
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <p className="text-center text-secondary text-3xl font-bold mt-10">
        Login
      </p>
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
        <p className="text-error m-2">{error?.message}</p>
        <input
          type="submit"
          className="btn btn-secondary border-none text-white hover:bg-accent"
        />
      </form>
      <p className="text-black text-center mt-2">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-secondary hover:text-accent font-bold"
        >
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
