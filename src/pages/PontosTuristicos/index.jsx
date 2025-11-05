import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  FilterWrapper,
  FilterButton,
  PointsWrapper,
  PointCard,
} from "./styles";
import Comentarios from "../../components/Comentarios";

export default function PontosTuristicos() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cidadeInicial = queryParams.get("cidade") || "Todos";

  const [filtro, setFiltro] = useState(cidadeInicial);

  const [pontos, setPontos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchPontos = async () => {
      try {
        setCarregando(true);
        setErro(null);

        const response = await fetch(
          "http://localhost:5000/api/pontos-turisticos"
        );

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setPontos(data);
      } catch (error) {
        console.error("Erro ao buscar pontos:", error);
        setErro("Falha ao carregar pontos turísticos. Tente novamente.");
      } finally {
        setCarregando(false);
      }
    };

    fetchPontos();
  }, []);

  const cidades = ["Todos", ...new Set(pontos.map((point) => point.cidade))];

  const pontosFiltrados =
    filtro === "Todos"
      ? pontos
      : pontos.filter((point) => point.cidade === filtro);

  useEffect(() => {
    setFiltro(cidadeInicial);
  }, [cidadeInicial]);

  if (carregando) {
    return (
      <Container>
        <h1>Pontos Turísticos</h1>
        <p>Carregando pontos turísticos...</p>
      </Container>
    );
  }

  if (erro) {
    return (
      <Container>
        <h1>Pontos Turísticos</h1>
        <p style={{ color: "red" }}>{erro}</p>
        <p>Verifique se o servidor back-end está rodando na porta 5000.</p>
      </Container>
    );
  }

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

      {pontosFiltrados.length === 0 ? (
        <p>Nenhum ponto turístico encontrado.</p>
      ) : (
        <PointsWrapper>
          {pontosFiltrados.map((point) => (
            <PointCard key={point.id}>
              <h2>{point.nome}</h2>
              <p className="tipo">{point.tipo}</p>
              <p>{point.descricao}</p>
              <div className="details">
                {point.horario && (
                  <p>
                    <strong>Horário:</strong> {point.horario}
                  </p>
                )}
                {point.endereco && (
                  <p>
                    <strong>Endereço:</strong> {point.endereco}
                  </p>
                )}
              </div>
              <span className="cidade">{point.cidade}</span>

              <Comentarios pontoId={point.id} />
            </PointCard>
          ))}
        </PointsWrapper>
      )}
    </Container>
  );
}
