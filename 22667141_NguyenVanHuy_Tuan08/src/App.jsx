import "./App.css";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-full">
          <Header />
          <Overview />
          <DataTable />
        </div>
      </div>
    </>
  );
}

export default App;
