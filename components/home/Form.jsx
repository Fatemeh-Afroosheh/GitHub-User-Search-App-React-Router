import { useState } from "react";

const Form = ({ setUsers, setIsLoading, users }) => {
  const [searchUsers, setSearchUsers] = useState("");
  const [error, setError] = useState(false);

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
    <form action="" onSubmit={searchUsersHandler}>
      {error && <p>Please enter an username</p>}
      <input
        autoFocus
        type="search"
        placeholder="Search Users"
        value={searchUsers}
        onChange={(e) => setSearchUsers(e?.target?.value)}
      />
      <button type="submit">Search</button>
      {users?.length > 0 && (
        <button type="button" onClick={clearUsers}>
          Clear
        </button>
      )}
    </form>
  );
};

export default Form;
