import React from "react";
import { Link } from "react-router-dom";
import ProfilePhoto from "../profile-photo/ProfilePhoto";

//style
import "./TodoList.css";

export default function TodoList({ todos }) {
  console.log(todos);

  return (
    <div className="todo-list">
      {todos.length === 0 && <p>No todo yet</p>}
      {todos.map((todo) => (
        <Link to={`/todos/${todo.id}`} key={todo.id}>
          <div className="todo-card">
            <h4>{todo.title}</h4>

            <p>Due by {todo.date.toDate().toDateString()}</p>
            <div className="assigned-to">
              <p>
                <strong>Assigned to:</strong>
              </p>
              <ul>
                {todo.assignedUsersList.map((user) => (
                  <li key={user.photoURL}>
                    <ProfilePhoto src={user.photoURL} />
                    <div className="name">{user.displayName}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
