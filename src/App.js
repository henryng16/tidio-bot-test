import React, { useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";

function App() {
  useEffect(() => {
    document.title = "Fossil-Tidio-testbot";
  }, []);

  return (
    <>
      <Header />
      <div className="row">
        <SideMenu />
        <MainContent />
      </div>
    </>
  );
}

export default App;
