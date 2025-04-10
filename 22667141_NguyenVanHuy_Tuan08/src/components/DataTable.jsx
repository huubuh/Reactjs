import Create from "../assets/img/create.png";
import Filetext from "../assets/img/File text 1.png";
import Moveup from "../assets/img/Move up.png";
const DataTable = () => {
  return (
    <>
      <div className="flex flex-col  m-4 ">
        <div className="flex ">
          <div className="flex gap-2 items-center">
            <img src={Filetext} alt="" className="w-5 h-5" />
            <p className="font-bold text-xl w-50">Detailed report</p>
          </div>
          <div className="flex ml-auto">
            <button className="text-pink-600 border-2 w-24 p-1  rounded-md  hover:bg-pink-50 transition">
              Add
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default DataTable;
