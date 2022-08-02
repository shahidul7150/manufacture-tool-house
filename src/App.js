import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Blogs from './Components/Pages/Blogs/Blogs';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import AddReview from './Components/Pages/Dashboard/AddReview';
import AllUser from './Components/Pages/Dashboard/AllUser';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageAllOrder from './Components/Pages/Dashboard/ManageAllOrder';
import ManageAllProducts from './Components/Pages/Dashboard/ManageAllProducts';
import MyOrders from './Components/Pages/Dashboard/MyOrders';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import Payment from './Components/Pages/Dashboard/Payment';
import Announce from './Components/Pages/Home/Announce';
import Home from './Components/Pages/Home/Home';
import ToolsSection from './Components/Pages/Home/ToolsSection';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register';
import RequireAdmin from './Components/Pages/Login/RequireAdmin';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';
import Purchase from './Components/Pages/Purchase/Purchase';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import NotFund404 from './Components/Shared/NotFund404';

function App() {
  return (
    <div>
      <Announce/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="profile" element={<MyProfile/>} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="manageorder" element={<ManageAllOrder />} />
          <Route path="allUser" element={<RequireAdmin><AllUser /></RequireAdmin>} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="manageproduct" element={<ManageAllProducts />} />
        </Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/service" element={<ToolsSection />}></Route>
        <Route path="*" element={<NotFund404/>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
