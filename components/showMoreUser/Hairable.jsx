import { Link } from "react-router-dom";
import Home from "../../pages/Home";

const Hairable = ({ singleUser }) => {
  return (
    <div className="top">
      <Link to="/" element={<Home />}>
        Back to search
      </Link>
      <span>
        Hairable
        {singleUser?.hairable ? (
          <i className="fa fa-check"></i>
        ) : (
          <i className="fa fa-times"></i>
        )}
      </span>
    </div>
  );
};

export default Hairable;
