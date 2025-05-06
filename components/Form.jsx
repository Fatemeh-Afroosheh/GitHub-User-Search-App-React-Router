const Form = ({
  searchUsersHandler,
  searchUsers,
  setSearchUsers,
  users,
  clearUsers,
  error,
}) => {
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
