import "./styles.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Escooter from "./pages/escooter";
import Accessories from "./pages/accessories";
import Shipping from "./pages/shipping";
import About from "./pages/about";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="escooter" element={<Escooter />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
