const ShowMoreSingleUser = ({ singleUser }) => {
  return (
    <div className="left-show-more-user">
      <ul>
        <li>
          {singleUser.avatar_url && (
            <span>
              <img src={singleUser?.avatar_url} alt="" />
            </span>
          )}
          <h2>{singleUser.name}</h2>
          <h2 className="bio">{singleUser.bio}</h2>
          {singleUser.html_url && (
            <span className="github-link">
              GitHub Link:&nbsp;
              <a href={singleUser.html_url} target="_blank" rel="noreferrer">
                {singleUser.html_url}
              </a>
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ShowMoreSingleUser;
