import React from "react";
import './Users.css'
import { useSelector } from "react-redux";
import User from "./User";

const UserList = () => {
  const users = useSelector((state) => state.usersReducer);
  // console.log(users);
  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UserList;
