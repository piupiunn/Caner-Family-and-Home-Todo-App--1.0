import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { timestamp } from "../../firebase/config";
import { useFirestore } from "../../hooks/useFirestore";
import ProfilePhoto from "../../components/profile-photo/ProfilePhoto";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function TodoComments({ todo }) {
  const { updateDocument, response } = useFirestore("todos");
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument(todo.id, {
      comments: [...todo.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="todo-comments">
      <h4>Todo Comments: </h4>
      <ul>
        {todo.comments.length > 0 &&
          todo.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <ProfilePhoto src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>
                  {formatDistanceToNow(comment.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comments: </span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className="btn">Add comment</button>
      </form>
    </div>
  );
}
