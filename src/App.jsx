import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosListPage from "./components/TodosListPage";
import { useState } from "react";
import AddTodoPage from "./components/AddTodoPage";

function App() {
  const [todos, setTodos] = useState([
    { id: Date.now(), text: "Buy Grocery", completed: false },
    { id: Date.now() - 1, text: "Send Email", completed: false },
  ]);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<TodosListPage todos={todos} handleToggle={handleToggle} />}
        />
        <Route path="/add" element={<AddTodoPage addTodo={addTodo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
