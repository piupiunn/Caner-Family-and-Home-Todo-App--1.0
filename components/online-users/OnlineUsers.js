import React from "react";
import { useCollection } from "../../hooks/useCollection";
import ProfilePhoto from "../profile-photo/ProfilePhoto";

import "./OnlineUsers.css";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2>All Users:</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span className="user-name-unique">{user.displayName}</span>
            <ProfilePhoto src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
