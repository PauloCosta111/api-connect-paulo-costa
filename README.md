# API Connect — Gerenciamento de Usuários

## Objetivo
API REST desenvolvida em Node.js com Express para gerenciamento de usuários. Projeto MVP desenvolvido para a startup de tecnologia, permitindo cadastro, listagem, atualização e remoção de usuários via protocolo HTTP.

## Tecnologias
- Node.js v24
- Express

## Como executar localmente

1. Clonar o repositório
git clone https://github.com/PauloCosta111/api-connect-paulo-costa.git

2. Entrar na pasta
cd api-connect-paulo-costa

3. Instalar dependências
npm install

4. Iniciar o servidor
node src/server.js

O servidor estará disponível em: http://localhost:3000

## Endpoints

| Método | Rota | Descrição | Status |
|--------|------|-----------|--------|
| GET | /usuarios | Lista todos os usuários | 200 OK |
| GET | /usuarios/:id | Busca usuário por ID | 200 OK |
| POST | /usuarios | Cadastra novo usuário | 201 Created |
| PUT | /usuarios/:id | Atualiza usuário por ID | 200 OK |
| DELETE | /usuarios/:id | Remove usuário por ID | 200 OK |

## Códigos de status

| Código | Descrição |
|--------|-----------|
| 200 | OK — operação bem-sucedida |
| 201 | Created — usuário cadastrado |
| 400 | Bad Request — campos obrigatórios ausentes |
| 404 | Not Found — usuário não encontrado |
| 409 | Conflict — e-mail já cadastrado |