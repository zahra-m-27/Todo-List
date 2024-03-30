import { Button, ListGroup, Form } from "react-bootstrap";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TodosListPage({ todos, handleToggle, onEdit, onDelete }) {
  const [newText, setNewText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (editingId) {
      const todo = todos.find((t) => t.id === editingId);
      if (todo) {
        setNewText(todo.text);
      }
    }
  }, [editingId, todos]);

  return (
    <div className={classes.container}>
      <h1>Todos List</h1>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id} className={classes.list}>
            {editingId && todo.id === editingId ? (
              <Form.Control
                className={classes.editInput}
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <Form.Check
                checked={todo.completed}
                type="checkbox"
                onChange={() => handleToggle(todo.id)}
                id={todo.id}
                label={todo.text}
                className={todo.completed ? classes.checked : null}
              />
            )}
            <div>
              <Button
                className={classes.editBtn}
                variant="warning"
                onClick={
                  editingId && todo.id === editingId
                    ? () => {
                        onEdit(editingId, newText);
                        setEditingId(null);
                        setNewText("");
                      }
                    : () => setEditingId(todo.id)
                }
              >
                {editingId && todo.id === editingId ? "Save" : "Edit"}
              </Button>
              <Button
                className={classes.deleteBtn}
                variant="danger"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Button
        className={classes.addBtn}
        variant="primary"
        onClick={() => navigate("/add")}
      >
        Add Task
      </Button>
    </div>
  );
}

export default TodosListPage;
