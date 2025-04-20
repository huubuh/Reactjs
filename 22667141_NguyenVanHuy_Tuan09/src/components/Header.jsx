import Logo from "../assets/img/logo_header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={Logo} alt="logo" className="h-15" />
          <input
            type="text"
            placeholder="What would you like to cook"
            className="pl-10 pr-4 py-2 w-[250px] bg-gray-100 rounded-sm focus:outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-pink-600">
              What to cook
            </Link>
            <Link to="/recipes" className="hover:text-pink-600">
              Recipes
            </Link>
            <Link to="/ingredients" className="hover:text-pink-600">
              Ingredients
            </Link>
            <Link to="/occasions" className="hover:text-pink-600">
              Occasions
            </Link>
            <Link to="/about" className="hover:text-pink-600">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button className="px-4 py-1 text-pink-600 bg-pink-100 rounded-lg hover:bg-pink-200 transition text-sm">
              Login
            </button>
            <button className="px-4 py-1 text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
