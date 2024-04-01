import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodoPage from "./components/AddTodoPage";
import { useEffect, useState } from "react";
import TodosListPage from "./components/TodosListPage";

function App() {
  const initialValue = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [{ id: Date.now(), text: "Send Email", completed: false }];

  const [todos, setTodos] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
          element={
            <TodosListPage
              todos={todos}
              handleToggle={handleToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
        <Route path="/add" element={<AddTodoPage addTodo={addTodo} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
