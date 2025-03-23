// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <>
      <Header></Header>

      <Content></Content>

      <Recipes></Recipes>

      <Footer></Footer>
    </>
  );
}

export default App;
