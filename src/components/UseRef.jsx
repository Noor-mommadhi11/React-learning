import React, { useRef, useState } from "react";
import "../styles/UseRef.css";

function UseRef() {
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Profile Image Update</h2>

        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />

        <button onClick={handleButtonClick} className="upload-btn">
          Upload New Image
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default UseRef;