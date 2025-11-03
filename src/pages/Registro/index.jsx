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

export default function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    "Nome do usuario": "",
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
      const response = await fetch(
        "http://localhost:5000/api/usuarios/registro",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      navigate("/");
    } catch (error) {
      console.error("Erro no registro:", error);
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container>
      <FormCard>
        <Title>Criar Conta</Title>
        <Subtitle>Junte-se à nossa comunidade de viajantes</Subtitle>

        {erro && <ErrorMessage>{erro}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              type="text"
              id="nome"
              name="Nome do usuario"
              value={formData["Nome do usuario"]}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
              disabled={carregando}
            />
          </InputGroup>

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
              placeholder="Crie uma senha segura"
              required
              disabled={carregando}
            />
          </InputGroup>

          <Button type="submit" disabled={carregando}>
            {carregando ? "Cadastrando..." : "Criar Conta"}
          </Button>
        </Form>

        <LinkContainer>
          <LinkText>
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </LinkText>
        </LinkContainer>
      </FormCard>
    </Container>
  );
}
