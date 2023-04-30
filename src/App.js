import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./App.css";
import { ThemeContext } from "./Contexts/ThemeContext";
import { useState } from "react";

function App() {
  const [editId,setEditId]=useState("")
  return (
    <div className="app">
      <ThemeContext.Provider  value={{editId ,setEditId}}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
