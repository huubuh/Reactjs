import "./Content.css";
const Content = () => {
  return (
    <>
      <div className="header_content">
        <div>Home</div>
        <div>
          <img src="src/assets/imgs/Arrow_forward_ios_2.png" alt="" />
        </div>
        <div className="Recipe_box">Your Recipe Box</div>
      </div>
      <div className="main_content">
        <div className="title">
          <h2>Emma Gonzalez's Recipe Box</h2>
        </div>
        <div className="row">
          <div className="side1">
            <img src="src/assets/imgs/avatar.png" alt="" />
          </div>
          <div className="side2">
            <div className="main_content">
              Emma Gonzales is a deputy editor at Chefify , bringing her
              expertise as a former cooking editor at The Los Angeles Times. She
              is also an accomplished author, contributing to numerous cookbooks
              and food publications. Originally from East Los Angeles, Emma now
              resider in New York City , where she explores a wide range of
              culinary delights.
            </div>
            <div className="info">
              <a href="#">6.5k Subscribes</a>
              <button>
                Share <img src="src/assets/imgs/Share fat.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
