import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 20px;
`;

export const ComentarioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;

export const ComentarioItem = styled.div`
  padding: 16px;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

export const ComentarioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const UsuarioNome = styled.span`
  font-weight: 600;
  color: #1f2937;
`;

export const Data = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const ComentarioTexto = styled.p`
  color: #374151;
  line-height: 1.5;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }

  &:disabled {
    background-color: #f9fafb;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: ${(props) => (props.disabled ? "#9ca3af" : "#2563eb")};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#9ca3af" : "#1d4ed8")};
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

export const LoginMessage = styled.div`
  padding: 20px;
  text-align: center;
  background: #f3f4f6;
  border-radius: 8px;
  color: #6b7280;
  margin-bottom: 20px;

  a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
