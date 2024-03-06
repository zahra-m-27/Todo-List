import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosListPage from "./components/TodosListPage";
import { useState } from "react";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<TodosListPage todos={todos} handleToggle={handleToggle} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
