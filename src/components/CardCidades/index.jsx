import styled from "styled-components";
import { Link } from "react-router-dom";

const CardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const CityCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0;
  }
`;

const SaibaMais = styled(Link)`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background: #007bff;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  text-decoration: none;

  &:hover {
    background: #0056b3;
  }
`;

export default function CardCidades({ cidades }) {
  return (
    <CardsWrapper>
      {cidades.map((cidade) => (
        <CityCard key={cidade.nome}>
          <img src={cidade.imagem} alt={`Foto de ${cidade.nome}`} />
          <h3>{cidade.nome}</h3>

          <SaibaMais to={`/eventos?cidade=${encodeURIComponent(cidade.nome)}`}>
            Saiba mais
          </SaibaMais>
        </CityCard>
      ))}
    </CardsWrapper>
  );
}
