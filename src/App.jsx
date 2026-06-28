import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import ReducerDemo from "./pages/ReducerDemo";
import UseRefDemo from "./pages/UseRefDemo";

import FoodList from "./admin/FoodList";
import AddFood from "./admin/AddFood";
import EditFood from "./admin/EditFood";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/menu" element={<Menu />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/admin" element={<Admin />}>
            <Route index element={<FoodList />} />

            <Route path="add" element={<AddFood />} />

            <Route path="edit/:id" element={<EditFood />} />
          </Route>

          <Route path="/reducer" element={<ReducerDemo />} />

          <Route path="/useref" element={<UseRefDemo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
