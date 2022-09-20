import React, { useState } from "react";
import TodoList from "../../components/todo-list/TodoList";
import { useCollection } from "../../hooks/useCollection";
import TodoFilter from "./TodoFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

//style
import "./Home.css";

export default function Home() {
  const { documents, error } = useCollection("todos");
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const todos = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "cook":
          case "cleaning":
          case "kids":
          case "shopping":
          case "bill":
          case "rent":
          case "bank":
          case "mortgage":
          case "family":
          case "car":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Home</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <TodoFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {documents && <TodoList todos={todos} />}
    </div>
  );
}
