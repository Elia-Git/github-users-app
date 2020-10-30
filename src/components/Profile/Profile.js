import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/user/${id}`)
      .then((req) => req.json())
      .then((res) => {
        setUserDetails(res);
      });
  }, [id]);
  return (
    <div className="container">
      <img
        src={userDetails.avatar_url}
        alt="profile"
        style={{ width: "5rem", borderRadius: "10rem" }}
      />
      <br />
      <div>Followed by :{userDetails.following} uers</div>
      <div>Follows to : {userDetails.followers} users</div>
      <div> Number of Repos: {userDetails.public_repos} </div>
      <div> Location : {userDetails.location}</div>
      <div>
        Github-Page :
        <a
          href="https://github.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          {userDetails.html_url}
        </a>
      </div>
    </div>
  );
}

export default Profile;
