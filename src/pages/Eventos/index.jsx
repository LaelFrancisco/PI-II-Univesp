import { useState } from "react";
import {
  Container,
  FilterWrapper,
  FilterButton,
  EventsWrapper,
  EventCard,
} from "./styles";

const allEvents = [
  {
    id: 1,
    cidade: "Águas de São Pedro",
    titulo: "Feira Gastronômica",
    data: "15/10/2025",
    descricao: "Um evento com comidas típicas e regionais.",
  },
  {
    id: 2,
    cidade: "Brotas",
    titulo: "Festival de Aventura",
    data: "22/10/2025",
    descricao: "Atividades radicais como rafting, tirolesa e trilhas.",
  },
  {
    id: 3,
    cidade: "São Pedro",
    titulo: "Encontro de Carros Antigos",
    data: "05/11/2025",
    descricao: "Exposição de carros clássicos e raridades.",
  },
];

export default function Eventos() {
  const [filtro, setFiltro] = useState("Todos");

  const cidades = ["Todos", "Águas de São Pedro", "Brotas", "São Pedro"];

  const eventosFiltrados =
    filtro === "Todos"
      ? allEvents
      : allEvents.filter((evento) => evento.cidade === filtro);

  return (
    <Container>
      <h1>Eventos</h1>

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

      <EventsWrapper>
        {eventosFiltrados.map((evento) => (
          <EventCard key={evento.id}>
            <h2>{evento.titulo}</h2>
            <p>
              <strong>{evento.data}</strong>
            </p>
            <p>{evento.descricao}</p>
            <span>{evento.cidade}</span>
          </EventCard>
        ))}
      </EventsWrapper>
    </Container>
  );
}
