import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  ComentarioList,
  ComentarioItem,
  ComentarioHeader,
  UsuarioNome,
  Data,
  ComentarioTexto,
  Form,
  TextArea,
  Button,
  ErrorMessage,
  LoginMessage,
} from "./styles";

export default function Comentarios({ pontoId }) {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/comentarios/ponto/${pontoId}`
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar comentários");
        }
        const data = await response.json();
        setComentarios(data);
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
      }
    };

    fetchComentarios();
  }, [pontoId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!novoComentario.trim()) return;

    setCarregando(true);
    setErro("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          texto: novoComentario,
          ponto_turistico_id: pontoId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao adicionar comentário");
      }

      const comentariosResponse = await fetch(
        `http://localhost:5000/api/comentarios/ponto/${pontoId}`
      );
      const comentariosData = await comentariosResponse.json();
      setComentarios(comentariosData);

      setNovoComentario("");
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error);
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return (
      data.toLocaleDateString("pt-BR") +
      " às " +
      data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <Container>
      <Title>Comentários</Title>

      {usuario ? (
        <>
          {erro && <ErrorMessage>{erro}</ErrorMessage>}

          <Form onSubmit={handleSubmit}>
            <TextArea
              value={novoComentario}
              onChange={(e) => setNovoComentario(e.target.value)}
              placeholder="Escreva seu comentário..."
              required
              disabled={carregando}
            />
            <Button type="submit" disabled={carregando}>
              {carregando ? "Enviando..." : "Enviar Comentário"}
            </Button>
          </Form>
        </>
      ) : (
        <LoginMessage>
          <Link to="/login">Faça login</Link> para comentar.
        </LoginMessage>
      )}

      <ComentarioList>
        {comentarios.map((comentario) => (
          <ComentarioItem key={comentario.idComentario}>
            <ComentarioHeader>
              <UsuarioNome>{comentario.usuario_nome}</UsuarioNome>
              <Data>{formatarData(comentario.data_criacao)}</Data>
            </ComentarioHeader>
            <ComentarioTexto>{comentario.texto}</ComentarioTexto>
          </ComentarioItem>
        ))}

        {comentarios.length === 0 && (
          <p style={{ textAlign: "center", color: "#6b7280" }}>
            Nenhum comentário ainda. Seja o primeiro a comentar!
          </p>
        )}
      </ComentarioList>
    </Container>
  );
}
