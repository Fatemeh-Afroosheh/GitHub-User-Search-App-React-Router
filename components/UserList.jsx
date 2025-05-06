import React from "react";

const UserList = ({ user }) => {
  return (
    <li className="user" key={user?.id}>
      <img src={user?.avatar_url} alt={user?.login} />
      <h2>{user?.login}</h2>
      <button>Show more</button>
    </li>
  );
};

export default UserList;
