import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erro from "./pages/Erro";
import Filme from "./pages/Filme";
import Home from "./pages/Home";

import Header from "./components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
