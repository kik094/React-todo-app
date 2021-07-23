import React from "react";

const Input = ({ input, setInput, handleSubmit, dropdownHandler }) => {
  return (
    <div className='todo-heading-wrapper'>
      <h2 className="todo-heading-wrapper-h2">Todo list</h2>
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add todo..."
      />
      <button>Add to list</button>
      <select className="dropdown" onChange={dropdownHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not completed</option>
      </select>
    </form>
    </div>
  );
};

export default Input;
