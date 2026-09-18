/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="profile-section">
        <div className="profile-icon">?</div>
        <h2>Profile</h2>
        <p className="login-message">
          Please login to see your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="profile-section">
      <div className="profile-icon">
        {user.username.charAt(0).toUpperCase()}
      </div>
      <h2>Welcome</h2>
      <p className="welcome-message">
        {user.username}
      </p>
      <p className="profile-status">
        You are successfully logged in.
      </p>
    </div>
  );
}

export default Profile;