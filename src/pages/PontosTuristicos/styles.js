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

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const PointsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PointCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  h2 {
    color: #2d3748;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  .tipo {
    color: #718096;
    font-style: italic;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .details {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;

    p {
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }
  }

  .cidade {
    display: inline-block;
    background: #edf2f7;
    color: #4a5568;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

export const PointImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    height: 250px;
  }
`;

export const PointImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: 8px 8px 0 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    height: 250px;
  }
`;
