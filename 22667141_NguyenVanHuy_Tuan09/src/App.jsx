import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SummerRecipes from "./components/SummerRecipes";
import VideoRecipes from "./components/VideoRecipes";
import EditorsPick from "./components/EditorsPick";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 pt-[72px]">
          <Hero />
          <SummerRecipes />
          <VideoRecipes />
          <EditorsPick />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
