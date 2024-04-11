import React from "react";
import "./Users.css";
function Users({ name }) {
  return (
    <div className="userBox">
      <div>{name}</div>
    </div>
  );
}

export default Users;
