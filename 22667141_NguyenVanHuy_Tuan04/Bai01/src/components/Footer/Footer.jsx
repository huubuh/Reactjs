import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className=" AboutUs">
          <div className="about">
            <h3>AboutUs</h3>
            <p>
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>

            <div className="sendEmail">
              <input type="text" placeholder="   Enter your email" />
              <button>Send</button>
            </div>
          </div>
          <div className="bottom">
            <div className="logo">
              <img src="src/assets/imgs/chefifywhite.png" alt="" />

              <p>2023 Chefify Company</p>
              <div className="links">
                <a href="#">Terms of service</a>
                <a href="#">|Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div className=" Learn-shop">
          <div className="footer-section">
            <h3>Learn More</h3>
            <a href="#">Our Cooks</a>
            <a href="#">See Our Features</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-section">
            <h3>Shop</h3>
            <a href="#">Gift Subscription</a>
            <a href="#">Send Us Feedback</a>
          </div>
        </div>
        <div className="Recipes">
          <h3>Recipes</h3>
          <a href="#">What to Cook This Week</a>
          <a href="#">Pasta</a>
          <a href="#">Dinner</a>
          <a href="#">Healthy</a>
          <a href="#">Vegetarian</a>
          <a href="#">Vegan</a>
          <a href="#">Christmas</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
