import React from 'react';

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="mt-10 w-96 text-center bg-blue-300 ">
      <p>未完了TODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="bg-orange-300 border-2">
              <li>{todo}</li>
              <button
                onClick={() => onClickComplete(index)}
                className="text-white rounded-3xl py-2 px-3 bg-black  hover:bg-gray-400 hover:text-black mr-3 "
              >
                完了
              </button>
              <button
                onClick={() => onClickDelete(index)}
                className="text-white rounded-3xl py-2 px-3 bg-black  hover:bg-gray-400 hover:text-black mr-3 "
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
