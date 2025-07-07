import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./Mainpage";
import Collection from "./Collection";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
