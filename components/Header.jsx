import menuItems from "../constant/menuItems";
const Header = () => {
  return (
    <header>
      <div className="logo"> Github Search</div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.menuItem}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
