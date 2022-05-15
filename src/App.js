import React from "react";
import Form from "./components/Form";
import TodoTable from "./components/TodoTable";

function App() {
  return (
    <React.Fragment>
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md mt-10 py-10 px-8 md:px-16">
        <Form />
        <TodoTable />
      </section>
    </React.Fragment>
  );
}

export default App;
