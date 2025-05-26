import { useState } from "react";
import Form from "../components/home/Form";
import Users from "../components/home/Users";
import Loading from "../components/home/Loading";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Form setIsLoading={setIsLoading} setUsers={setUsers} users={users} />
      {isLoading ? <Loading /> : <Users users={users} />}
    </>
  );
};

export default Home;
