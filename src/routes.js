import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filme from "./pages/Filme";
import Home from "./pages/Home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filme/:id" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
