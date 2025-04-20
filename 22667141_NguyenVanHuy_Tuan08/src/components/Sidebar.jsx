import logo from "../assets/img/Image 1858.png";
import Projects from "../assets/img/Folder.png";
import Teams from "../assets/img/Groups.png";
import Analytics from "../assets/img/Pie chart.png";
import Message from "../assets/img/Chat.png";
import Intergations from "../assets/img/Code.png";
import Group from "../assets/img/Group.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navbar = [
    { label: "Dashboard", icon: Projects, path: "/" },
    { label: "Projects", icon: Projects, path: "/projects" },
    { label: "Teams", icon: Teams, path: "/teams" },
    { label: "Analytics", icon: Analytics, path: "/analytics" },
    { label: "Message", icon: Message, path: "/messages" },
    { label: "Intergations", icon: Intergations, path: "/integrations" },
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
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md transition duration-200 ${
                      isActive
                        ? "text-pink-50 bg-pink-600"
                        : "text-gray-500 hover:text-pink-500 hover:bg-pink-50"
                    }`
                  }
                >
                  <img src={item.icon} alt={item.label} className="w-5 h-5" />
                  {item.label}
                </NavLink>
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
