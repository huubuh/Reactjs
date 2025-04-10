import Squaresfour from "../assets/img/Squares four 1.png";
import Avatar from "../assets/img/Button 1530.png";
import Dollar from "../assets/img/Button 1529.png";
import Cart from "../assets/img/Button 1509.png";
const Overview = () => {
  return (
    <>
      <div className="flex flex-col mb-4">
        <div className="flex flex-1 m-4 space-x-3">
          <img src={Squaresfour} alt="" />
          <p className="text-xl font-bold ">Overview</p>
        </div>

        <div className="flex mx-4  space-x-6">
          <div className="bg-pink-100 w-1/3 p-5 rounded-md">
            <div className="flex justify-between pb-3">
              <div>
                <p className="font-bold">Turnover</p>
                <span className="text-3xl font-bold">$92,405</span>
              </div>
              <div>
                <img src={Cart} alt="" />
              </div>
            </div>
            <div className="flex  gap-2 ">
              <p className="text-green-600 font-bold">5.39%</p>
              <p className="text-gray-500">period of change</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
