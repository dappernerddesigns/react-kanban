import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { GuestBoard } from "./pages/GuestBoard";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<GuestBoard />} />
      </Routes>
    </>
  );
}

export default App;
