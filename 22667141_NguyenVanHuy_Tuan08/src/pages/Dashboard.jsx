import React, { useState } from "react";
import Create from "../assets/img/create.png";
import Filetext from "../assets/img/File text 1.png";
import Avatar1 from "../assets/img/Avatar 1.png";
import Avatar2 from "../assets/img/Avatar 2.png";
import Avatar3 from "../assets/img/Avatar 3.png";
import Avatar4 from "../assets/img/Avatar 4.png";
import Avatar5 from "../assets/img/Avatar 5.png";
import Avatar6 from "../assets/img/Avatar 6.png";

const data = [
  {
    name: "Elizabeth Lee",
    company: "AvatarSystems",
    value: "$359",
    date: "10/07/2023",
    status: "New",
    avatar: Avatar1,
  },
  {
    name: "Carlos Garcia",
    company: "SmoozeShift",
    value: "$747",
    date: "24/07/2023",
    status: "New",
    avatar: Avatar2,
  },
  {
    name: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    value: "$564",
    date: "08/08/2023",
    status: "In-progress",
    avatar: Avatar3,
  },
  {
    name: "Ryan Brown",
    company: "OmniTech Corporation",
    value: "$541",
    date: "31/08/2023",
    status: "In-progress",
    avatar: Avatar4,
  },
  {
    name: "Ryan Young",
    company: "DataStream Inc.",
    value: "$769",
    date: "01/05/2023",
    status: "Completed",
    avatar: Avatar5,
  },
  {
    name: "Hailey Adams",
    company: "FlowRush",
    value: "$922",
    date: "10/06/2023",
    status: "Completed",
    avatar: Avatar6,
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-600";
    case "In-progress":
      return "bg-yellow-100 text-yellow-700";
    case "Completed":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const Dashboard = () => {
  const itemsPerPage = 6;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="p-6 bg-white ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img src={Filetext} alt="icon" className="w-5 h-5" />
          <h2 className="text-xl font-bold">Detailed report</h2>
        </div>
        <button className="text-pink-600 border-2 border-pink-400 w-24 p-1 rounded-md hover:bg-pink-50 transition">
          Add
        </button>
      </div>

      <table className="w-full text-left rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <thead className="bg-gray-100 text-gray-600 text-sm font-semibold">
          <tr>
            <th className="px-4 py-3">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-3">CUSTOMER NAME</th>
            <th className="px-4 py-3">COMPANY</th>
            <th className="px-4 py-3">ORDER VALUE</th>
            <th className="px-4 py-3">ORDER DATE</th>
            <th className="px-4 py-3">STATUS</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr
              key={i}
              className="border-t border-gray-200  hover:bg-gray-50 text-sm text-gray-700"
            >
              <td className="px-4 py-4">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-4 flex items-center gap-3">
                <img
                  src={row.avatar}
                  alt={row.name}
                  className="w-9 h-9 rounded-full"
                />
                <span className="font-bold">{row.name}</span>
              </td>
              <td className="px-4 py-4">{row.company}</td>
              <td className="px-4 py-4">{row.value}</td>
              <td className="px-4 py-4">{row.date}</td>
              <td className="px-4 py-4">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-4">
                <button>
                  <img
                    src={Create}
                    alt="edit"
                    className="w-4 h-4 cursor-pointer"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-6 text-sm">
        <div className="text-gray-500">{totalItems} results</div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-400 hover:text-gray-600"
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {renderPageNumbers().map((page, idx) => (
            <button
              key={idx}
              disabled={page === "..."}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full border 
                ${
                  page === currentPage
                    ? "bg-pink-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                } ${
                page === "..." ? "cursor-default text-gray-400 border-none" : ""
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-400 hover:text-gray-600"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
