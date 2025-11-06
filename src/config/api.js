const API_BASE = import.meta.env.VITE_API_URL || "";

const API_URLS = {
  PONTOS_TURISTICOS: `${API_BASE}/api/pontos-turisticos`,
  PONTOS_POR_CIDADE: (cidade) =>
    `${API_BASE}/api/pontos-turisticos/cidade/${cidade}`,

  REGISTRO: `${API_BASE}/api/usuarios/registro`,
  LOGIN: `${API_BASE}/api/usuarios/login`,

  COMENTARIOS: `${API_BASE}/api/comentarios`,
  COMENTARIOS_POR_PONTO: (pontoId) =>
    `${API_BASE}/api/comentarios/ponto/${pontoId}`,

  CIDADES: `${API_BASE}/api/cidades`,

  EVENTOS: `${API_BASE}/api/eventos`,
};

export default API_URLS;
