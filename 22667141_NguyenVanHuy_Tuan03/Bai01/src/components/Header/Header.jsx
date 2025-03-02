import './Header.css'
const Header = () => {
    return (
      <header className="header">
            <div className="logo">
                <img src="src/assets/img/chefify.png" alt="" /> 
            </div>
            <div className="search-bar">
                <input type="text" placeholder="      cakescascasa"/>
            </div>
           <nav>
            <ul className="menu">
                <li><a href="#">What to cook</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Ingredients</a></li>
                <li><a href="#">Occasions</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
           </nav>
           <div className="user-actions">
            <button className="recipe-box"><img className="icon" src="src/assets/img/check.png" alt="" /> Your Recipe Box</button>
            <img className="avatar" src="src/assets/img/avatar (1).png" alt="" />
           </div>
      </header>
    );
}

export default Header