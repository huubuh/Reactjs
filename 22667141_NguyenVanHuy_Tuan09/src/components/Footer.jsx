import Logo from "../assets/img/logo_footer.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-300 mb-4">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex gap-5 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md bg-white text-gray-800 text-sm w-full focus:outline-none"
              />
              <button className="px-4 bg-pink-500 text-white text-sm font-semibold rounded-md hover:bg-pink-600 transition">
                Send
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="h-15" />
            <span className="text-gray-400 text-sm ml-4">
              © 2023 Chefify Company
            </span>

            <span className="text-gray-400 text-sm ml-4">
              Terms of Service | Privacy Policy
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2">
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  FAQ
                </a>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4">Recipes</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-pink-500">
                  What to Cook This Week
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Pasta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Healthy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Vegetarian
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Christmas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
