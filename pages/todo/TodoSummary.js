import React from "react";
import ProfilePhoto from "../../components/profile-photo/ProfilePhoto";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function TodoSummary({ todo }) {
  const { deleteDocument } = useFirestore("todos");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = (e) => {
    deleteDocument(todo.id);
    navigate("/");
  };

  return (
    <div>
      <div className="todo-summary">
        <h2 className="page-title">{todo.title}</h2>
        <p>By {todo.createdBy.displayName}</p>
        <p className="date">Todo due by {todo.date.toDate().toDateString()}</p>
        <div className="details">{todo.details}</div>

        <div>{todo.movie[0].original_title}</div>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${todo.movie[0].poster_path}`}
          alt={todo.movie[0].title}
        />
        <h4>Todo assigned to:</h4>
        <div className="assigned-users">
          {todo.assignedUsersList.map((user) => (
            <div key={user.id}>
              <ProfilePhoto src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {/*   {user.uid === todo.createdBy.id && ( */}
      <button className="btn" onClick={handleClick}>
        Mark as Complete
      </button>
      {/*  )} */}
    </div>
  );
}
