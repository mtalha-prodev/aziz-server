import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainStack from "./navigation/MainStack";
import { BrowserRouter } from "react-router-dom";
import Nav from "./navigation/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./page/Dashboard";

function App() {
  const [role, setRole] = useState("user");

  const getRole = () => {
    let user = localStorage.getItem("user");

    user = JSON.parse(user);

    console.log(user);

    if (user?.role) {
      setRole(user.role);
    }
  };
  useEffect(() => {
    getRole();
  }, []);


  return (
    <BrowserRouter>
      {role == "user" ? (
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
