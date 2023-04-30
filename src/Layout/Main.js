import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Main = () => {
  const [editId,setEditId]=useState("")

  return (
    <div>
      <Navbar></Navbar>
      <Outlet editId={editId} setEditId={setEditId}></Outlet>
    </div>
  );
};

export default Main;
