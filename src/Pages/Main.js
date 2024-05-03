import Auth from "../Components/Authorization";
import RegisterForm from "../Components/Register";
import Home from '../Pages/Home'
import { Route, Routes } from "react-router-dom";

const Main = () => {



  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/registration" element={<RegisterForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Main;