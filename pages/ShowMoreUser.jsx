import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/home/Loading";
import Repos from "../components/showMoreUser/Repos";
import Hairable from "../components/showMoreUser/Hairable";
import ShowMoreSingleUser from "../components/showMoreUser/ShowMoreSingleUser";

const ShowMoreUser = () => {
  const { username } = useParams();
  const baseURL = "https://api.github.com/users";
  const [singleUser, setSingleUser] = useState({});
  const [repoes, setRepo] = useState([]);
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingRepo, setLoadingRepo] = useState(false);

  const getSingleUserForShowMore = async () => {
    setLoadingUser(true);
    const response = await fetch(`${baseURL}/${username}`);
    const data = await response.json();
    setSingleUser(data);
    setLoadingUser(false);
  };

  const getRepoForShowMore = async () => {
    setLoadingRepo(true);
    const response = await fetch(
      `${baseURL}/${username}/repos?per_page=5&sort=created:asc`
    );
    const data = await response.json();
    setRepo(data);
    setLoadingRepo(false);
  };

  useEffect(() => {
    getSingleUserForShowMore();
    getRepoForShowMore();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="show-more-for-user">
      <Hairable singleUser={singleUser} />
      <div className="show-more-user-wrapper">
        {loadingUser ? (
          <Loading />
        ) : (
          <ShowMoreSingleUser singleUser={singleUser} />
        )}
        {loadingRepo ? <Loading /> : <Repos repoes={repoes} />}
      </div>
    </div>
  );
};

export default ShowMoreUser;
