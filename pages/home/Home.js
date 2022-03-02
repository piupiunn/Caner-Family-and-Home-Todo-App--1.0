import React from "react";
import TodoList from "../../components/todo-list/TodoList";
import { useCollection } from "../../hooks/useCollection";

//style
import "./Home.css";

export default function Home() {
  const { documents, error } = useCollection("todos");

  return (
    <div>
      <h2 className="page-title">Home</h2>
      {error && <p className="error">{error}</p>}
      {documents && <TodoList todos={documents} />}
    </div>
  );
}
