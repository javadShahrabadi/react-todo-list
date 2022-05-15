import React, { useContext } from "react";
import { TableContext } from "../data/AppContext";
import { MdDelete, MdOutlineErrorOutline } from "react-icons/md";

const TodoTable = (props) => {
  const tableCtx = useContext(TableContext);

  if (tableCtx.TodoList.length !== 0) {
    return (
      <table className="w-full mt-10">
        <thead className="bg-[#DBE2EF] text-[#112D4E] p-3">
          <tr className="">
            <th className="py-2">ID</th>
            <th className="py-2">Title</th>
            <th className="py-2">Description</th>
            <th className="py-2">Importance</th>
            <th className="py-2">Edit</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tableCtx.TodoList?.map((todo) => {
            return (
              <tr key={todo.id}>
                <td className="py-2 text-[15px] ">{todo.id}</td>
                <td className="py-2 text-[15px]">{todo.title}</td>
                <td className="py-2 text-[15px]">{todo.description}</td>
                <td className="py-2 text-[15px]">{todo.importance}</td>
                <td className="py-2 flex justify-center">
                  <MdDelete
                    className="text-gray-500 w-5 h-5 hover:text-red-500 transition-all duration-300 ease-out cursor-pointer"
                    onClick={() => {
                      tableCtx.removeFromList(todo.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <p className="text-center  mt-5 py-2 text-[14px] font-semibold rounded-md flex items-center justify-center">
        <span>
          <MdOutlineErrorOutline className="w-5 h-5 text-red-500 mr-0.5" />
        </span>
        <span className="text-[14px] font-semibold">Todo List Is Empty!</span>
      </p>
    );
  }
};
export default TodoTable;
