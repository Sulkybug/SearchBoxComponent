import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [resultUsers, setResultUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://randomuser.me/api/?results=40")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results);
          setResultUsers(data.results);
        });
    };
    getData();
  }, []);

  const filterUsers = (searchString) => {
    const filtered = users.filter((user) =>
      user.name.first.includes(searchString)
    );
    setResultUsers(filtered);
  };

  return (
    <>
      <Search filterUsers={filterUsers} />
      <div className="usersBox">
        {resultUsers.length > 0
          ? resultUsers.map((user) => (
              <div key={user.cell}>
                <Users name={user.name.first} />
              </div>
            ))
          : "No matches"}
      </div>
    </>
  );
}

export default App;
