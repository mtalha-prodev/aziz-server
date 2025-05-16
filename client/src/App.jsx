import "./App.css";
import MainStack from "./navigation/MainStack";
import { BrowserRouter } from "react-router-dom";
import Nav from "./navigation/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./page/Dashboard";
import { useSelector } from "react-redux";

function App() {
  let { role } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      {role !== "admin" ? (
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
