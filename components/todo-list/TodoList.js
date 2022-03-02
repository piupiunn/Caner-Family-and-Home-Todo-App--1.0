import React from "react";
import { Link } from "react-router-dom";
import ProfilePhoto from "../profile-photo/ProfilePhoto";

//style
import "./TodoList.css";

export default function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.length === 0 && <p>No todo yet</p>}
      {todos.map((todo) => (
        <Link to={`/todos/${todos.is}`} key={todo.id}>
          <h4>{todo.title}</h4>
          <p>Due by {todo.date.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {todo.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <ProfilePhoto src={user.photoURL} />
                  {user.displayName}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
