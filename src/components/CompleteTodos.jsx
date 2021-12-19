import React from 'react';

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="mt-10 w-96 text-center bg-red-300 ">
      <p>完了TODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="bg-yellow-200 border-2">
              <li>{todo}</li>
              <button
                onClick={() => onClickBack(index)}
                className="text-white rounded-3xl py-2 px-3 bg-black  hover:bg-gray-400 hover:text-black mr-3 "
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
