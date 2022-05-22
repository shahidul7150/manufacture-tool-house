import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Login from "./Components/Pages/Login/Login";
import Navbar from "./Components/Shared/Navbar";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Footer from "./Components/Shared/Footer";
import Register from "./Components/Pages/Login/Register";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/purchase" element={<Purchase/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/portfolio" element={<MyPortfolio/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
