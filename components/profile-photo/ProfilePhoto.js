import React from "react";

import "./ProfilePhoto.css";

export default function ProfilePhoto({ src }) {
  return (
    <div className="profile-photo">
      <img src={src} alt="profile" />
    </div>
  );
}
