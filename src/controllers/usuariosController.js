let usuarios = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com", idade: 28 },
  { id: 2, nome: "Bruno Costa", email: "bruno@email.com", idade: 34 },
  { id: 3, nome: "Carla Souza", email: "carla@email.com", idade: 22 },
];

let proximoId = 4;

const listarUsuarios = (req, res) => {
  res.status(200).json({ status: "sucesso", total: usuarios.length, dados: usuarios });
};

const buscarUsuarioPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);
  if (!usuario) {
    return res.status(404).json({ status: "erro", error: `Usuário com ID ${id} não encontrado`, data: null });
  }
  res.status(200).json({ status: "sucesso", error: null, data: usuario });
};

const criarUsuario = (req, res) => {
  const { nome, email, idade } = req.body;
  if (!nome || !email || !idade) {
    return res.status(400).json({ status: "erro", error: "Campos obrigatórios: nome, email e idade", data: null });
  }
  const emailExistente = usuarios.find((u) => u.email === email);
  if (emailExistente) {
    return res.status(409).json({ status: "erro", error: "E-mail já cadastrado", data: null });
  }
  const novoUsuario = { id: proximoId++, nome, email, idade };
  usuarios.push(novoUsuario);
  res.status(201).json({ status: "sucesso", error: null, data: novoUsuario });
};

const atualizarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ status: "erro", error: `Usuário com ID ${id} não encontrado`, data: null });
  }
  const { nome, email, idade } = req.body;
  usuarios[index] = { ...usuarios[index], ...(nome && { nome }), ...(email && { email }), ...(idade && { idade }) };
  res.status(200).json({ status: "sucesso", error: null, data: usuarios[index] });
};

const deletarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ status: "erro", error: `Usuário com ID ${id} não encontrado`, data: null });
  }
  usuarios.splice(index, 1);
  res.status(200).json({ status: "sucesso", error: null, data: `Usuário com ID ${id} removido com sucesso` });
};

module.exports = { listarUsuarios, buscarUsuarioPorId, criarUsuario, atualizarUsuario, deletarUsuario };