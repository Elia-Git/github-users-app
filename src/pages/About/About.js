import React from "react";

const About = () => {
  return (
    <div
      style={{
        alignItems: "center",
        marginLeft: "30px",
        paddingBottom: "20px",
        paddingRight: "50px",
        backgroundColor: "darkgray",
        borderRadius: "150px",
        width: "80%",
      }}
    >
      <h2>What does this app do?</h2>
      <p>
        This app uses to search github users. <br />
        One can search a user by enserting a <br />
        github username in the searchfield
        <br /> where users are fetched from an Api.
      </p>
      <h4>This app is developed using</h4>
      <ul>
        <li>React-hooks</li>
        <li>React-router-dom</li>
        <li>React-buildpack</li>
        <li>and deployed to Heroku</li>
      </ul>
    </div>
  );
};
export default About;
