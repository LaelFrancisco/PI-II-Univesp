import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #374151;
  text-align: center;
  margin: 0.75rem 0 2rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f3f4f6 0%, #f9fafb 100%);
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-weight: 500;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  background: ${(p) => (p.$ativo ? "#0077ff" : "#eee")};
  color: ${(p) => (p.$ativo ? "white" : "#333")};

  &:hover {
    background: ${(p) => (p.$ativo ? "#005ecc" : "#ddd")};
  }
`;

export const EventsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EventCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    margin: 0.25rem 0;
  }

  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #555;
  }
`;
