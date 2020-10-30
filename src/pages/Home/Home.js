import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (input === "") {
      //alert("please enter a username");
      return;
    }
    setIsLoading(true);

    fetch(`https://api.github.com/search/users?q=${input}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
        console.log(data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setIsLoading(true);
      });
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div>
      {err && <div>{err}</div>}
      <form onChange={handleSubmit}>
        <input type="text" name="input" placeholder="Search User" />
      </form>
      {isLoading && <p>Loading...</p>}
      {input !== "" && users.length > 0 ? (
        <ul>
          {input !== "" &&
            users.map((user) => {
              return (
                <div key={user.id}>
                  <img
                    src={user.avatar_url}
                    style={{ width: "5rem", borderRadius: "10rem" }}
                    alt="profile"
                  />{" "}
                  <br />
                  <Link to={`/profile/${user.id}`}>{user.login}</Link>
                </div>
              );
            })}
        </ul>
      ) : (
        <div>Sorry, No result</div>
      )}
    </div>
  );
};

export default Home;
