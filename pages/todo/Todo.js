import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

// styles
import "./Todo.css";
import TodoComments from "./TodoComments";
import TodoSummary from "./TodoSummary";

export default function Todo() {
  const { id } = useParams();
  const { document, error } = useDocument("todos", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="todo-details">
      <TodoSummary todo={document} />
      <TodoComments todo={document} />
    </div>
  );
}
