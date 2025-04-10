import logo from "../assets/img/Image 1858.png";
import Projects from "../assets/img/Folder.png";
import Teams from "../assets/img/Groups.png";
import Analytics from "../assets/img/Pie chart.png";
import Message from "../assets/img/Chat.png";
import Intergations from "../assets/img/Code.png";
import Group from "../assets/img/Group.png";
const Sidebar = () => {
  const navbar = [
    { label: "Dashboard", icon: Projects },
    { label: "Projects", icon: Projects },
    { label: "Teams", icon: Teams },
    { label: "Analytics", icon: Analytics },
    { label: "Message", icon: Message },
    { label: "Intergations", icon: Intergations },
  ];
  return (
    <>
      <div className="w-[260px] min-h-screen bg-white border-r border-gray-300 flex flex-col  p-6">
        <div className="flex justify-start mb-5">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            {navbar.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className=" flex items-center gap-3 text-gray-700 hover:text-pink-500 font-medium px-3 py-1 rounded-md transition duration-200"
                >
                  <img src={item.icon} alt={item.label} className="w-5 h-5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 text-center mt-auto">
          <img src={Group} alt="" />
          <p className="text-2xl text-gray-600 mb-2 font-bold my-6">
            V2.0 is available
          </p>
          <button className="bg-white text-blue-400 text-lg font-medium px-4 py-1 w-50 border-2 rounded-lg hover:bg-blue-100 transition ">
            try now
          </button>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
