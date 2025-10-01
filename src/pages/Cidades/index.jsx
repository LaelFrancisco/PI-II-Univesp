import styled from "styled-components";
import saopedro from "../../assets/images/vista-sp.jpg";
import aguas from "../../assets/images/aguas.jpg";
import brotas from "../../assets/images/brotas.jpg";

const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const CityCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #007bff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }
`;

export default function Cidades() {
  const cidades = [
    {
      nome: "Águas de São Pedro",
      imagem: aguas,
      descricao:
        "Pequena e charmosa, Águas de São Pedro é conhecida pelas suas fontes termais de águas medicinais, procuradas por quem busca relaxamento e bem-estar. A cidade também se destaca pelo clima tranquilo, ruas arborizadas e boa infraestrutura para receber visitantes, com hotéis, spas e restaurantes que valorizam a hospitalidade local. É um destino perfeito para quem quer descansar e aproveitar momentos de calma.",
    },
    {
      nome: "Brotas",
      imagem: brotas,
      descricao:
        "Famosa como a “capital do turismo de aventura”, Brotas é o lugar certo para quem curte contato com a natureza e esportes radicais. Entre as atrações mais procuradas estão o rafting no Rio Jacaré-Pepira, as trilhas em meio ao verde e as cachoeiras impressionantes. Além da adrenalina, a cidade oferece opções de turismo rural, gastronomia típica do interior e muito aconchego.",
    },
    {
      nome: "São Pedro",
      imagem: saopedro,
      descricao:
        "Com mirantes de tirar o fôlego, São Pedro é uma cidade que combina natureza, tradição e lazer. Localizada na Serra do Itaqueri, tem vistas panorâmicas incríveis, cachoeiras e trilhas que atraem os amantes do ecoturismo. O centro histórico preserva a atmosfera de cidade do interior, com praças charmosas e igrejas antigas. É um destino que agrada tanto famílias quanto aventureiros.",
    },
  ];

  return (
    <Wrapper>
      <h1>Cidades</h1>
      {cidades.map((cidade) => (
        <CityCard key={cidade.nome}>
          <Image src={cidade.imagem} alt={`Foto de ${cidade.nome}`} />
          <Content>
            <h2>{cidade.nome}</h2>
            <p>{cidade.descricao}</p>
          </Content>
        </CityCard>
      ))}
    </Wrapper>
  );
}
