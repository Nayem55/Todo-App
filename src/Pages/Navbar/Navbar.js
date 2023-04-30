import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faClockFour } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="sticky top-0 bg-white z-40">
      <div className="flex items-center">
        <Link to="/" className="text-3xl text-accent p-5 font-bold font-serif">
        <FontAwesomeIcon icon={faClockFour} className="text-secondary"></FontAwesomeIcon>
          {" "}
          tick<span className="text-secondary">and</span>tock{" "}
        </Link>
        {user ? (
          <Link
            to="/login"
            className="text-secondary ms-auto mr-10 text-xl font-bold hover:text-accent"
            onClick={()=>signOut(auth)}
          >
            <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
          </Link>
        ) : (
          <Link
            to="/login"
            className="text-secondary ms-auto mr-10 text-xl font-bold hover:text-accent"
          >
            Login
          </Link>
        )}
      </div>
      <hr className="h-2 bg-secondary" />
    </div>
  );
};

export default Navbar;
