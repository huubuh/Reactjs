import { useEffect, useState } from "react";
import "./Recipes.css";
const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://67df90807635238f9aa9e8b6.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);

  return (
    <>
      <div className="Navbar_Recipes">
        <div className="Nav_Saved ">Saved Recipes</div>
        <div className="Nav_Folders"> Folders </div>
        <div className="Nav_Genevieve">Recipes by Genevieve</div>
      </div>
      <div className="products">
        {data.map((item) => (
          <div className="product_items" key={item.id}>
            <img src={item.img} alt="" />
            <div className="title_name">
              <div className="name">{item.name}</div>
              <img
                className="icon_btn"
                src="src/assets/imgs/Icon Button 73.png"
                alt=""
              />
            </div>
            <div className="time">{item.time} minutes</div>
          </div>
        ))}
      </div>
      <div className="Pagination">
        <img src="src/assets/imgs/Button 89.png" alt="" />
        <button className="btn active">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
        <button className="btn">...</button>
        <button className="btn">10</button>
        <button className="btn">11</button>

        <img src="src/assets/imgs/Button 96.png" alt="" />
      </div>
    </>
  );
};
export default Recipes;
