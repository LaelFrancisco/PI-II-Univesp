import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  FilterWrapper,
  FilterButton,
  EventsWrapper,
  EventCard,
} from "./styles";

export default function Eventos() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cidadeInicial = queryParams.get("cidade") || "Todos";

  const [filtro, setFiltro] = useState(cidadeInicial);
  const [eventos, setEventos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        setCarregando(true);
        setErro(null);

        const response = await fetch("http://localhost:5000/api/eventos");

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setEventos(data);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        setErro("Falha ao carregar eventos. Tente novamente.");
      } finally {
        setCarregando(false);
      }
    };

    fetchEventos();
  }, []);

  const cidades = ["Todos", ...new Set(eventos.map((evento) => evento.cidade))];

  const eventosFiltrados =
    filtro === "Todos"
      ? eventos
      : eventos.filter((evento) => evento.cidade === filtro);

  useEffect(() => {
    setFiltro(cidadeInicial);
  }, [cidadeInicial]);

  if (carregando) {
    return (
      <Container>
        <h1>Eventos</h1>
        <p>Carregando eventos...</p>
      </Container>
    );
  }

  if (erro) {
    return (
      <Container>
        <h1>Eventos</h1>
        <p style={{ color: "red" }}>{erro}</p>
        <p>Verifique se o servidor back-end está rodando na porta 5000.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Eventos</h1>
      <p>Confira os próximos eventos na nossa região</p>

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

      {eventosFiltrados.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        <EventsWrapper>
          {eventosFiltrados.map((evento) => (
            <EventCard key={evento.id}>
              <h2>{evento.titulo}</h2>
              <p>
                <strong>{evento.data}</strong>
              </p>
              <p>{evento.descricao}</p>
              {evento.endereco && (
                <p>
                  <strong>Local:</strong> {evento.endereco}
                </p>
              )}
              <span>{evento.cidade}</span>
            </EventCard>
          ))}
        </EventsWrapper>
      )}
    </Container>
  );
}
