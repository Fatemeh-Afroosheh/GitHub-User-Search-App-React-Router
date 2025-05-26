import { Link } from "react-router-dom";
import menuItems from "../../constant/menuItems";

const Header = () => {
  return (
    <header>
      <div className="logo"> Github Search</div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.href}>{item.menuItem}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
