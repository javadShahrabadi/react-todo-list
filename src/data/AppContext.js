import { createContext, useState } from "react";

export const TableContext = createContext({
  TodoList: [],
  addToList: (obj) => {},
  removeFromList: (id) => {},
});

const TableContextProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const addToList = (obj) => {
    setTodoList((prevList) => [...todoList, obj]);
  };

  const removeFromList = (id) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };

  const contextValue = {
    TodoList: todoList,
    addToList: addToList,
    removeFromList: removeFromList,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
