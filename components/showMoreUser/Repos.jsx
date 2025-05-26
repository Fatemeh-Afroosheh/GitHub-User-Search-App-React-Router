const Repos = ({ repoes }) => {
  return (
    <div className="right-show-more-user">
      Popular repositories:
      <ul>
        {repoes.map((repo) => (
          <li key={repo?.id}>{repo?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
