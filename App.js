import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Users from "./components/Users";
const App = () => {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchUserFromApi = async (text) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${text}`
      );
      const data = await response.json();
      setUsers(data?.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const searchUsersHandler = (e) => {
    e.preventDefault();
    const trimSearchUsers = searchUsers.trim();
    if (trimSearchUsers === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      searchUserFromApi(trimSearchUsers);
    }
  };
  const clearUsers = () => {
    setUsers([]);
    setSearchUsers("");
  };

  return (
    <div className="wrapper">
      {/* header */}
      <Header />
      {/* form search users */}
      <Form
        searchUsersHandler={searchUsersHandler}
        searchUsers={searchUsers}
        setSearchUsers={setSearchUsers}
        users={users}
        clearUsers={clearUsers}
        error={error}
      />
      {isLoading ? (
        /* Loading spinner */
        <Loading />
      ) : (
        /* Users list - only show if not loading AND users exist */
        <Users users={users} />
      )}
      {/* footer */}
      <footer>footer</footer>
    </div>
  );
};

export default App;
