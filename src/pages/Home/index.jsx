import { useState, useEffect } from "react";
import styled from "styled-components";
import CardCidades from "../../components/CardCidades";
import slide from "../../assets/images/slide.jpg";
import slide2 from "../../assets/images/slide-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import slide4 from "../../assets/images/slide-4.jpg";
import slide5 from "../../assets/images/slide-5.jpg";
import slide6 from "../../assets/images/slide-6.jpg";

const Banner = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  text-align: center;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 75vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(p) => p.$image}) center/cover no-repeat;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 3;

  ${(p) => (p.$left ? "left: 1rem;" : "right: 1rem;")}

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

const cidades = [
  {
    nome: "Águas de São Pedro",
    imagem: slide4,
  },
  {
    nome: "Brotas",
    imagem: slide2,
  },
  {
    nome: "São Pedro",
    imagem: slide5,
  },
];

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 2rem 0;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function Home() {
  const slides = [slide, slide2, slide3, slide4, slide5, slide6];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <Banner>
        {slides.map((img, i) => (
          <Slide key={i} $image={img} $active={i === current} />
        ))}

        <Arrow
          $left
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
        >
          ‹
        </Arrow>
        <Arrow onClick={() => setCurrent((current + 1) % slides.length)}>
          ›
        </Arrow>

        <Content>
          <h1>
            Descubra os encantos da região da Serra do Itaqueri: natureza,
            aventura e bem-estar!
          </h1>
        </Content>
      </Banner>
      <CardCidades cidades={cidades} />
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198412.80949633458!2d-47.973412154242844!3d-22.474897363135174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7a5007db4222d%3A0x127337ea5cd62713!2sSerra%20do%20Itaqueri%20em%20S%C3%A3o%20Pedro!5e0!3m2!1spt-BR!2sbr!4v1758647764682!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapWrapper>
    </div>
  );
}
