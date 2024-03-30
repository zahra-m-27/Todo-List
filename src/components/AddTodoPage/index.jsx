import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./styles.module.css";
import { useState } from "react";

function AddTodoPage({ addTodo }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
      navigate("/");
    }
  };

  return (
    <Container className={classes.container}>
      <h1>Add Task</h1>
      <Form.Group controlId="task">
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSubmit(e) : null)}
        />
      </Form.Group>
      <Button className={classes.btn} variant="success" onClick={handleSubmit}>
        Add
      </Button>
    </Container>
  );
}

export default AddTodoPage;
