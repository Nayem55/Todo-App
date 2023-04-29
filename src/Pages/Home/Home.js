import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home p-10">
      <div className="flex justify-between">
        {/* search bar */}
        <div className="form-control text-black">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search task name"
              className="input input-bordered w-[300px]"
            />
            <button className="btn btn-square bg-secondary border-none hover:bg-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Add todo button */}
        <Link to="/todo" className="btn btn-accent text-white mb-6 w-[200px] hover:bg-accent border-none">
          Add Todo
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table-compact bg-white text-left text-black w-full">
          <thead className="bg-secondary text-white">
            <tr className="">
              <th></th>
              <th>Task</th>
              <th>Date</th>
              <th>Time</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
          </tbody>
          <tfoot className="bg-secondary text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Home;
