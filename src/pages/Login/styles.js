import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: #f8fafc;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 30px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

export const Button = styled.button`
  padding: 14px 20px;
  background-color: ${(props) => (props.disabled ? "#9ca3af" : "#16a34a")};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#9ca3af" : "#15803d")};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
  }
`;

export const ErrorMessage = styled.div`
  padding: 12px 16px;
  background-color: #fef2f2;
  color: #dc2626;
  border: 1px solid #dc2626;
  border-radius: 8px;
  font-size: 0.875rem;
  text-align: center;
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`;

export const LinkText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
