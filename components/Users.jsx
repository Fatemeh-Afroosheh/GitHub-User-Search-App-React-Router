import UserList from "./UserList";

const Users = ({ users }) => {
  return (
    users?.length > 0 && (
      <section className="users-wrapper">
        <h2>Users</h2>
        <ul className="users">
          {users?.map((user) => (
            <UserList user={user} />
          ))}
        </ul>
      </section>
    )
  );
};

export default Users;
