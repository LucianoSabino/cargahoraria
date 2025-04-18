# 📅 cargahoraria

![Imagem do Projeto](https://github.com/LucianoSabino/rotaApiRas/blob/master/img/rasfoto.jpeg?raw=true)

**Sistema de ponto para a equipe de robótica.**  
Gerencia e registra as horas de voluntários de forma eficiente.

---

## 🛆 Como rodar o projeto

1. Certifique-se de ter o **Node.js** instalado (versão recomendada: LTS).
   - Para verificar: `node -v && npm -v`
2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-repositorio.git
   cd seu-repositorio
   ```
3. Crie um arquivo `.env` na raiz do projeto e copie o conteúdo de `.env.example`.
4. Defina a variável `JWT_SECRET` com uma sequência aleatória de caracteres:

   ```env
   JWT_SECRET=kdksfksjfkgjgks
   ```

5. Defina a variável `BaseUrl` com link da conexão com o banco de dados postgres.

6. Instale as dependências:
   ```bash
   npm install
   ```
7. Execute o projeto:
   ```bash
   npm run dev
   ```

---

1. Prisma

- Comandos lib: `@prisma/cliant prisma`

- Comando para iniciar o prisma: `npx prisma init`

- Comando para gera a migração `npx prisma generate`
  `npx prisma migrate dev --name init`

## 💻 Rotas da API

### 🔹 **Endpoints Teste**

| Método | Rota | Descrição     | Retorno             |
| ------ | ---- | ------------- | ------------------- |
| GET    | `/`  | Rota de teste | Mensagem de sucesso |

### 🔹 **Endpoints Usuario**

| Método | Rota           | Descrição                                                  | Retorno                         |
| ------ | -------------- | ---------------------------------------------------------- | ------------------------------- |
| GET    | `/user`        | Busca todos os usuario                                     | Todas as informações do usuario |
| GET    | `/user`        | Busca todos usuario.                                       |
| GET    | `/horario`     | Busca os todas as informações horarios intervalo de tempo. |
| GET    | `/calcular`    | Calcula o horario dos vonlurario.                          |
| GET    | `/buscainfo`   | Busca todas as infomações do usuario.                      |
| GET    | `/admin_busca` | Retorma asinformações da carga horaria do usuario.         |
| POST   | `/user`        | Cria Usuario.                                              |
| POST   | `/login`       | Faz login.                                                 |
| POST   | `/upmembresia` | Atualiza informação de membresia do voluntario.            |
| POST   | `/admin_role`  | Atualiza nivel de acesso do volutario                      |

### 🔹 **Exemplo de Requisição e Resposta**

#### 📌 **Criar um usuário**

**Requisição:**

```json
POST /usuario
Content-Type: application/json

{
    "nome": "test2",
    "matricula": "2020114915",
    "membresia": "1010/Off",
    "email": "test2@gmail.com",
    "senha": "123",
    "telefone": "0800-0000",
    "role": "user",
    "sobre": "Sou um aluno do bcet",
    "robo": "test"
}
```

**Resposta (201 - Created):**

```json
{
  "id": 1
}
```

---
