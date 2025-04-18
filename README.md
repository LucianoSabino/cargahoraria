# 📅 cargahoraria

![Imagem do Projeto](https://github.com/LucianoSabino/rotaApiRas/blob/master/img/rasfoto.jpeg?raw=true)

**Sistema de ponto para a equipe de robótica.**  
Gerencia e registra as horas de voluntários de forma eficiente.

---

## 💻 Rotas da API

### 🔹 **Endpoints Teste**

| Método | Rota | Descrição     | Retorno             |
| ------ | ---- | ------------- | ------------------- |
| GET    | `/`  | Rota de teste | Mensagem de sucesso |

### 🔹 **Endpoints Usuario**

| Método | Rota          | Descrição                    | Retorno                                            |
| ------ | ------------- | ---------------------------- | -------------------------------------------------- |
| GET    | `/users`      | Busca todos os usuario       | Retorna o id, nome matricula, membresia do usuario |
| GET    | `/user/1`     | Busca um usuario espercifico | Retorna todas as infornações                       |
| DELETE | `/user/1`     | Deleta o usuario             | Retorna mensagem de sucesso                        |
| POST   | `/user`       | Cria usuario                 | Retorna todas as informações do usuario            |
| PUT    | `/user/1`     | Atualiza os dados do usuario | Retorna todas informações atualizada               |
| POST   | `/user/login` | Faz o login no sistema       | Retorna um token com (uid,nome,matricula)          |

### 🔹 **Exemplo de Requisição**

#### 📌 **Login**

```json
POST /user/login
Content-Type: application/json

{
    "matricula": "2020114916",
    "senha": "123"
}

```

---

#### 📌 **Criar um usuário**

```json
POST /user
Content-Type: application/json

{
    "nome": "test",
    "matricula": "1010101010",
    "membresia": "101010/Off",
    "curso": "BCET",
    "email": "test@gmail.com",
    "senha": "123",
    "telefone": "0800-0000",
    "role": "user",
    "sobre": "Sou um aluno do bcet",
    "robo": "test"
}
```

---

#### 📌 **Atualizar dados**

```json
PUT /user/1
Content-Type: application/json
{
    "nome": "Ras"
}
```

---

1. Prisma

- Comandos lib: `@prisma/cliant prisma`

- Comando para iniciar o prisma: `npx prisma init`

- Comando para gera a migração `npx prisma generate`
  `npx prisma migrate dev --name init`
