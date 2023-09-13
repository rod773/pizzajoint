import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Base } from "./components/Base";
import { Topings } from "./components/Topings";
import { Order } from "./components/Order";
import { Home } from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="base" element={<Base />}></Route>
        <Route path="topings" element={<Topings />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
