import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/Dropdown";
import MainStack from "./navigation/MainStack";
import { BrowserRouter } from "react-router-dom";
import Nav from "./navigation/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const Main = true;

  return (
    <BrowserRouter>
      {Main ? (
        <>
          <Header />
          <Nav />
          <MainStack />
          <Footer />
        </>
      ) : (
        <Dashboard />
      )}
    </BrowserRouter>
  );
}

export default App;
