import { Link } from "react-router-dom";

const UserList = ({ user }) => {
  return (
    <li className="user">
      <img src={user?.avatar_url} alt={user?.login} />
      <h2>{user?.login}</h2>
      <button>
        <Link to={`/more-User/${user?.login}`}>Show more</Link>
      </button>
    </li>
  );
};

export default UserList;
