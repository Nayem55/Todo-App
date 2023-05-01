import React, { useContext, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Contexts/ThemeContext";
import useTodo from "../../Hooks/useTodo";
import empty from "./empty.avif";
const Home = () => {
  const [searchText, setSearchText] = useState();
  const { setEditId } = useContext(ThemeContext);
  const [todos, setTodos] = useTodo();
  const navigate = useNavigate();

  let searchedTodos = [];
  searchedTodos = todos.filter(
    (todo) => todo?.task.toLowerCase() === searchText?.toLowerCase()
  );

  let mappedArray = searchedTodos.length > 0 ? searchedTodos : todos;

  const handleEdit = (id) => {
    setEditId(id);
    navigate("/todo");
  };
  const handleAdd = () => {
    navigate("/todo");
    setEditId("");
  };

  const handleDelete = (item) => {
    fetch("https://todo-app-nayem55.vercel.app/todos", {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const rest = todos.filter((todo) => todo._id !== item._id);
    setTodos(rest);
  };

  return (
    <div className="home px-2 py-5 md:p-10">
      <div className="flex justify-between flex-col md:flex-row lg:flex-row">
        {/* search bar */}
        <div className="form-control text-black">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchText(e.target.searchText.value);
            }}
            className="input-group"
          >
            <input
              type="text"
              name="searchText"
              placeholder="Search task name"
              className="input input-bordered w-[300px]"
            />
            <button className="btn btn-square text-white bg-secondary border-none hover:bg-accent">
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
          </form>
        </div>
        {/* Add todo button */}
        <button
          onClick={handleAdd}
          className="btn btn-accent mt-5 mx-auto text-white mb-6 w-[200px] hover:bg-accent border-none md:mx-0 lg:mx-0 "
        >
          Add Todo
        </button>
      </div>
      <div className="overflow-x-auto">
        {mappedArray.length < 1 ? (
          <div>
            <p className="text-center text-secondary text-4xl my-10 font-bold">
              Your Todo List Is Empty!!!
            </p>
            <img src={empty} className="w-[60%] mx-auto " alt="" />
          </div>
        ) : (
          <table className="table-compact bg-white text-left text-black w-full">
            <thead className="bg-secondary text-white">
              <tr>
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
              {mappedArray.map((todo) => (
                <tr>
                  <th>{todos.indexOf(todo) + 1}</th>
                  <td>{todo.task}</td>
                  <td>{todo.date}</td>
                  <td>
                    {todo.startTime} - {todo.endTime}
                  </td>
                  <td>
                    <p
                      className={`${
                        todo.priority === "High Priority"
                          ? "bg-[#fc0328]"
                          : todo.priority === "Midium Priority"
                          ? "bg-accent"
                          : "bg-[#1f993a]"
                      } w-[100%] md:w-[50%] rounded-full text-center font-bold px-2 text-white`}
                    >
                      {todo.priority}
                    </p>
                  </td>
                  <td>
                      {todo.status}
                  </td>
                  <td>
                    <div className="flex">
                      <button onClick={() => handleEdit(todo._id)}>
                        <FontAwesomeIcon
                          className="mr-2 text-accent hover:text-secondary"
                          icon={faPenToSquare}
                        ></FontAwesomeIcon>
                      </button>

                      <button onClick={() => handleDelete(todo)}>
                        <FontAwesomeIcon
                          className="text-secondary hover:text-accent"
                          icon={faTrash}
                        ></FontAwesomeIcon>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-secondary text-white">
              <tr>
                <th></th>
                <th>Task</th>
                <th>Date</th>
                <th>Time</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
