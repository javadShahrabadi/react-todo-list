import { useRef, useContext } from "react";
import { randomNumner } from "../utils/utils";
import { TableContext } from "../data/AppContext";

const Form = () => {
  const todoTitleRef = useRef();
  const todoDescriptionRef = useRef();
  const todoImportanceRef = useRef();
  const TableCtx = useContext(TableContext);
  // submitHandler
  const submitHandler = () => {
    const todoTitle = todoTitleRef.current.value;
    const todoDesc = todoDescriptionRef.current.value; // optional
    const todoImp = todoImportanceRef.current.value;
    if (todoTitle && todoTitle.trim() !== "") {
      const newTodo = {
        id: randomNumner(),
        title: todoTitle.trim(),
        description: todoDesc.trim(),
        importance: todoImp,
      };
      TableCtx.addToList(newTodo);
      todoTitleRef.current.value = "";
      todoDescriptionRef.current.value = "";
      todoImportanceRef.current.value = "not important";
    }
  };

  return (
    <form className="flex items-center justify-center flex-col space-y-4">
      <div className="flex flex-col space-y-2 w-full md:w-1/3">
        <label htmlFor="todo-title" className="text-gray-500 font-semibold">
          Todo Title:{" "}
        </label>
        <input
          ref={todoTitleRef}
          type="input"
          id="todo-title"
          placeholder="Enter Your Todo Title..."
          className="focus:outline-0 bg-[#DBE2EF] rounded-md px-4 py-2 text-[14px] text-[#112D4E] font-semibold"
        />
      </div>
      <div className="flex flex-col space-y-2 w-full md:w-1/3">
        <label
          htmlFor="todo-description"
          className="text-gray-500 font-semibold"
        >
          Todo Description:{" "}
        </label>
        <input
          ref={todoDescriptionRef}
          type="input"
          id="todo-description"
          placeholder="Enter Your Todo Description..."
          className="focus:outline-0 bg-[#DBE2EF] rounded-md px-4 py-2 text-[14px] text-[#112D4E] font-semibold"
        />
      </div>
      <div className="flex flex-col space-y-2 w-full md:w-1/3 pb-2">
        <label
          htmlFor="todo-description"
          className="text-gray-500 font-semibold"
        >
          Todo Importance:{" "}
        </label>
        <select
          defaultValue="not important"
          className="bg-[#DBE2EF] py-2 rounded-md px-4 text-[14px] text-[#112D4E] cursor-pointer font-semibold"
          ref={todoImportanceRef}
        >
          <option value="very important">Very important</option>
          <option value="important">important</option>
          <option value="not important">not important</option>
        </select>
      </div>
      <button
        onClick={submitHandler}
        type="button"
        className="bg-[#DBE2EF] py-2 rounded-md px-5 text-[14px] text-[#112D4E] font-semibold hover:scale-95 transition-all duration-300 ease-out"
      >
        {" "}
        Add To List
      </button>
    </form>
  );
};
export default Form;
