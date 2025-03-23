import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/imgs/avatar_small.png" alt="" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="      what would you like to cook" />
      </div>
      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#">What to cook</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Ingredients</a>
          </li>
          <li>
            <a href="#">Occasions</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      <div className="user-actions">
        <button className="recipe-box">
          <img
            className="icon"
            src="src/assets/imgs/archive_check.png"
            alt=""
          />{" "}
          Your Recipe Box
        </button>
        <img className="avatar" src="src/assets/imgs/avatar.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
