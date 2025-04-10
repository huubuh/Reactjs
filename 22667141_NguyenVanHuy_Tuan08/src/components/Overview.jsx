import Squaresfour from "../assets/img/Squares four 1.png";
import Avatar from "../assets/img/Button 1530.png";
import Dollar from "../assets/img/Button 1529.png";
import Cart from "../assets/img/Button 1509.png";
import { useEffect, useState } from "react";
const Overview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/overview")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="flex flex-col mb-4">
        <div className="flex flex-1 m-4 space-x-3 items-center">
          <img src={Squaresfour} alt="" className="w-5 h-5" />
          <p className="text-xl font-bold ">Overview</p>
        </div>

        <div className="flex mx-4  space-x-6">
          {data.map((item, index) => (
            <div key={index} className={`${item.bg} w-1/3 p-5 rounded-md`}>
              <div className="flex justify-between pb-3">
                <div>
                  <p className="font-bold">{item.title}</p>
                  <span className="text-3xl font-bold">{item.value}</span>
                </div>
                <div>
                  <img src={item.icon} alt="" />
                </div>
              </div>
              <div className="flex  gap-2 ">
                <p className="text-green-600 font-bold">{item.change}</p>
                <p className="text-gray-500">period of change</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Overview;
