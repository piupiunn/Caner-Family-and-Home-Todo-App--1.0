import React, { useState } from "react";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/config";

//style
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let file = e.target.files[0];
    let fileRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    });

    if (!file) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!file.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (file.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(file);
    console.log("thumbnail updated");
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <span>Thumbnail:</span>
          <input type="file" onChange={handleFileChange} />

          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        <button className="btn">Signup</button>
      </form>
    </div>
  );
}
