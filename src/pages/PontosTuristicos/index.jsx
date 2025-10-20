import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  FilterWrapper,
  FilterButton,
  PointsWrapper,
  PointCard,
} from "./styles";

const allPoints = [
  {
    id: 1,
    cidade: "Águas de São Pedro",
    nome: "Balneário Municipal",
    tipo: "Parque Aquático",
    descricao: "Complexo de piscinas termais com águas naturais.",
    horario: "08:00 - 18:00",
  },
  {
    id: 2,
    cidade: "Brotas",
    nome: "Cachoeira do Saltinho",
    tipo: "Natureza",
    descricao: "Linda cachoeira com piscina natural para banho.",
    horario: "09:00 - 17:00",
  },
  {
    id: 3,
    cidade: "São Pedro",
    nome: "Museu da Cidade",
    tipo: "Cultural",
    descricao: "Museu com acervo histórico da região.",
    horario: "10:00 - 16:00 (fechado às segundas)",
  },
  {
    id: 4,
    cidade: "Águas de São Pedro",
    nome: "Parque Dr. Octavio Moura Andrade",
    tipo: "Parque",
    descricao: "Área verde ideal para caminhadas e piqueniques.",
    horario: "06:00 - 20:00",
  },
  {
    id: 5,
    cidade: "Brotas",
    nome: "Rio Jacaré-Pepira",
    tipo: "Natureza",
    descricao: "Rio de águas cristalinas para rafting e natação.",
    horario: "24 horas",
  },
];

export default function PontosTuristicos() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cidadeInicial = queryParams.get("cidade") || "Todos";

  const [filtro, setFiltro] = useState(cidadeInicial);

  // Extrai as cidades únicas dos pontos turísticos
  const cidades = ["Todos", ...new Set(allPoints.map((point) => point.cidade))];

  const pontosFiltrados =
    filtro === "Todos"
      ? allPoints
      : allPoints.filter((point) => point.cidade === filtro);

  useEffect(() => {
    setFiltro(cidadeInicial);
  }, [cidadeInicial]);

  return (
    <Container>
      <h1>Pontos Turísticos</h1>
      <p>Descubra os melhores lugares para visitar na nossa região</p>

      <FilterWrapper>
        {cidades.map((cidade) => (
          <FilterButton
            key={cidade}
            $ativo={filtro === cidade}
            onClick={() => setFiltro(cidade)}
          >
            {cidade}
          </FilterButton>
        ))}
      </FilterWrapper>

      <PointsWrapper>
        {pontosFiltrados.map((point) => (
          <PointCard key={point.id}>
            <h2>{point.nome}</h2>
            <p className="tipo">{point.tipo}</p>
            <p>{point.descricao}</p>
            <div className="details">
              <p>
                <strong>Horário:</strong> {point.horario}
              </p>
            </div>
            <span className="cidade">{point.cidade}</span>
          </PointCard>
        ))}
      </PointsWrapper>
    </Container>
  );
}
