import "./App.css";

import Header from "./components/Header";
import Overview from "./components/Overview";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-full">
          <Header />
          <Overview />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
