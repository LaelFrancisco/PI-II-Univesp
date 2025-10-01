import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cidades from "./pages/Cidades";
import Eventos from "./pages/Eventos";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cidades" element={<Cidades />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
