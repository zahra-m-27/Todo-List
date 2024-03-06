import { Button, Container, ListGroup, Form } from "react-bootstrap";
import classes from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const TodosListPage = ({ todos, handleToggle }) => {
  const navigate = useNavigate();

  return (
    <Container className={classes.container}>
      <h1>To Do List</h1>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <Form.Check
              checked={todo.completed}
              type="checkbox"
              onChange={() => handleToggle(todo.id)}
              id={todo.id}
              label={todo.text}
              className={todo.completed ? classes.checked : null}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Button
        className={classes.btn}
        variant="primary"
        onClick={() => navigate("/add")}
      >
        Add Task
      </Button>
    </Container>
  );
};

export default TodosListPage;
