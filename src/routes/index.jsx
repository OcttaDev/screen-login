import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./privateRoutes/private";



import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import DashBoard from "../pages/DashBoard";



function RoutesApp() { 
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/dashboard" element={
      <PrivateRoutes>
         <DashBoard/>
      </PrivateRoutes>}/>
      
    </Routes>
  );
}
export default RoutesApp;
