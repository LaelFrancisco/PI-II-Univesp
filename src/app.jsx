import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cidades from "./pages/Cidades";
import Eventos from "./pages/Eventos";
import PontosTuristicos from "./pages/PontosTuristicos";
import Registro from "./pages/Registro";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cidades" element={<Cidades />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/pontos-turisticos" element={<PontosTuristicos />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
