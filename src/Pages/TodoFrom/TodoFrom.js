import React from "react";

const TodoFrom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const date = form.date.value;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;
    const priority = form.priority.value;
    const status = form.status.value;
    const todo={
        task,
        date,
        startTime,
        endTime,
        priority,
        status
    }
    console.log(todo)
  };
  return (
    <div>
      <p className="text-3xl text-center text-secondary font-bold mt-4">
        Add Todos
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[50vw] mx-auto mt-[30px]"
      >
        <input
          className="p-2 mb-2 text-black"
          type="text"
          name="task"
          placeholder="Enter task name"
        />
        <input
          className="p-2 mb-2 text-black"
          type="date"
          name="date"
          placeholder="Enter task name"
        />
        <div className="flex justify-between">
          <div className="flex justify-between w-[100%]">
            <p className="text-black mt-2 ml-2">Start</p>
            <input
              className="p-2 mb-2 text-black w-[80%]"
              type="time"
              name="startTime"
            />
          </div>
          <div className="flex w-[100%] justify-between">
            <p className="text-black ml-4 mt-2">End</p>
            <input className="p-2 mb-2 text-black w-[80%]" type="time" name="endTime" />
          </div>
        </div>
        <select
          className="p-2 mb-2 text-black"
          name="priority"
        >
          <option>Select Priority</option>
          <option>High Priority</option>
          <option>Midium Priority</option>
          <option>Low Priority</option>
        </select>
        <select className="p-2 mb-2 text-black" name="status">
          <option>Select Status</option>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <input
          type="submit"
          className="btn btn-secondary border-none text-white hover:bg-accent"
        />
      </form>
    </div>
  );
};

export default TodoFrom;
