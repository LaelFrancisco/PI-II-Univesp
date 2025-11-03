import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  FormCard,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  LinkContainer,
  LinkText,
} from "./styles";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    "Senha de acesso": "",
  });
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (erro) setErro("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    try {
      const response = await fetch("http://localhost:5000/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao fazer login");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      navigate("/");
    } catch (error) {
      console.error("Erro no login:", error);
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container>
      <FormCard>
        <Title>Bem-vindo de volta</Title>
        <Subtitle>Entre na sua conta para continuar</Subtitle>

        {erro && <ErrorMessage>{erro}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="Email"
              value={formData["Email"]}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
              disabled={carregando}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="senha">Senha</Label>
            <Input
              type="password"
              id="senha"
              name="Senha de acesso"
              value={formData["Senha de acesso"]}
              onChange={handleChange}
              placeholder="Sua senha"
              required
              disabled={carregando}
            />
          </InputGroup>

          <Button type="submit" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar"}
          </Button>
        </Form>

        <LinkContainer>
          <LinkText>
            Não tem uma conta? <Link to="/registro">Cadastre-se</Link>
          </LinkText>
        </LinkContainer>
      </FormCard>
    </Container>
  );
}
