import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";
import useTodo from "../../Hooks/useTodo";
import { toast } from "react-hot-toast";

const TodoFrom = () => {
  const { editId } = useContext(ThemeContext);
  const [todos] = useTodo();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let editedProduct = todos.find((todo) => todo._id === editId);
  if (editedProduct) {
    document.getElementById("task").defaultValue = editedProduct.task;
    document.getElementById("date").defaultValue = editedProduct.date;
    document.getElementById("startTime").defaultValue = editedProduct.startTime;
    document.getElementById("endTime").defaultValue = editedProduct.endTime;
  }

  // Add todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const date = form.date.value;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;
    const priority = form.priority.value;
    const status = form.status.value;
    const todo = {
      task,
      date,
      startTime,
      endTime,
      priority,
      status,
      email: user?.email,
    };
    fetch("https://todo-app-nayem55.vercel.app/todos", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.target.reset();
    navigate("/");
    toast.success("Task added successfully")
  };

  // update todo
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const _id = editedProduct._id;
    const task = form.task.value;
    const date = form.date.value;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;
    const priority = form.priority.value;
    const status = form.status.value;
    const updatedTodo = {
      _id,
      task,
      date,
      startTime,
      endTime,
      priority,
      status,
      email: user?.email,
    };
    fetch("https://todo-app-nayem55.vercel.app/todos", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    navigate("/");
    toast.success("Task edited successfully")
  };

  return (
    <div>
      <p className="text-3xl text-center text-secondary font-bold mt-4">
        {editId ? "Edit Todo" : "Add Todo"}
      </p>
      <form
        onSubmit={editId ? handleUpdate : handleSubmit}
        className="flex flex-col w-[90vw] md:w-[50vw] mx-auto mt-[30px]"
      >
        <input
          className="p-2 mb-2 text-black"
          type="text"
          name="task"
          id="task"
          placeholder="Enter task name"
          required
        />
        <input
          className="p-2 mb-2 w-[100%] text-black"
          type="date"
          id="date"
          name="date"
          required
        />
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div className="flex justify-between w-[100%]">
            <p className="text-black mt-2 ml-2">Start</p>
            <input
              className="p-2 mb-2 text-black w-[80%]"
              type="time"
              id="startTime"
              name="startTime"
              required
            />
          </div>
          <div className="flex w-[100%] justify-between">
            <p className="text-black ml-4 mt-2">End</p>
            <input
              className="p-2 mb-2 text-black w-[80%]"
              type="time"
              id="endTime"
              name="endTime"
              required
            />
          </div>
        </div>
        <select
          className="p-2 mb-2 text-black"
          name="priority"
          id="priority"
          required
        >
          <option>
            {editId ? editedProduct?.priority : "Select Priority"}
          </option>
          <option>High Priority</option>
          <option>Midium Priority</option>
          <option>Low Priority</option>
        </select>
        <select
          className="p-2 mb-2 text-black"
          name="status"
          id="status"
          required
        >
          <option>{editId ? editedProduct?.status : "Select Status"}</option>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <input
          type="submit"
          className="btn btn-secondary w-[40%] mt-4 mx-auto border-none text-white hover:bg-accent"
          value={editId?"Edit Task":"Add Task"}
        />
      </form>
    </div>
  );
};

export default TodoFrom;
