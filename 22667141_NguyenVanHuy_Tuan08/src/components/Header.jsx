import Search from "../assets/img/Search.png";
import Bell from "../assets/img/Bell 1.png";
import Question from "../assets/img/Question 1.png";
import Avatar from "../assets/img/Avatar 313.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center bg-white border-b border-gray-300 px-6 py-1">
        <div className="mr-auto">
          <p className="text-pink-600 font-bold  text-2xl"> Dashboard</p>
        </div>

        <div className="flex items-center space-x-6 px-6 py-4 w-full justify-end">
          <div className="relative w-[300px] ">
            <img
              src={Search}
              alt=""
              className="absolute  left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 py-2 border-0 rounded-md  bg-gray-200 "
            />
          </div>
          <div className="flex space-x-6 ">
            <img src={Bell} alt="" className="w-6 h-6 cursor-pointer" />
            <img src={Question} alt="" className="w-6 h-6 cursor-pointer" />
            <img src={Avatar} alt="" className="w-10 h-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
