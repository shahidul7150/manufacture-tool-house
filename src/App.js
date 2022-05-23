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
import ToolsSection from "./Components/Pages/Home/ToolsSection";
import RequireAuth from "./Components/Pages/Login/RequireAuth";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/purchase/:purchaseId" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/portfolio" element={<MyPortfolio/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/service" element={<ToolsSection/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
