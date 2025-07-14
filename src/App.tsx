import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./Mainpage";
import Collection from "./Collection";
import About from "./About";
import Contact from "./Contact";
import Wishlist from "./Wishlist";
import Wish from "./Wish";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/product/:productname" element={<Wish />} />
    </Routes>
  );
}

export default App;
