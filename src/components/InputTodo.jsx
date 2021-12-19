import React from 'react';

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="mt-10">
      <input
        className="rounded-3xl py-3 px-3 outline-none bg-green-300 p-3"
        placeholder="Todo"
        value={todoText}
        onChange={onChange}
      />
      <button
        onClick={onClick}
        className="text-white rounded-3xl py-3 px-5 bg-black  hover:bg-gray-400 hover:text-black "
      >
        Add
      </button>
    </div>
  );
};
