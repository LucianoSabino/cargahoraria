# 📅 cargahoraria

![Imagem do Projeto](https://github.com/LucianoSabino/cargahoraria/blob/main/img/TrabalhandoRob%C3%B3ticaTecnologia.png?raw=true)

**Sistema de ponto para a equipe de robótica.**  
Gerencia e registra as horas de voluntários de forma eficiente.

---

## 💻 Rotas da API

### 🔹 **Endpoints Teste**

| Método | Rota | Descrição     | Retorno             |
| ------ | ---- | ------------- | ------------------- |
| GET    | `/`  | Rota de teste | Mensagem de sucesso |

---

### 🔹 **Endpoints Usuario**

| Método | Rota          | Descrição                    | Retorno                                            |
| ------ | ------------- | ---------------------------- | -------------------------------------------------- |
| GET    | `/users`      | Busca todos os usuario       | Retorna o id, nome matricula, membresia do usuario |
| GET    | `/user/1`     | Busca um usuario espercifico | Retorna todas as infornações                       |
| DELETE | `/user/1`     | Deleta o usuario             | Retorna mensagem de sucesso                        |
| POST   | `/user`       | Cria usuario                 | Retorna todas as informações do usuario            |
| PUT    | `/user/1`     | Atualiza os dados do usuario | Retorna todas informações atualizada               |
| POST   | `/user/login` | Faz o login no sistema       | Retorna um token com (uid,nome,matricula, role)    |

---

### 🔹 **Endpoints Admin**

| Método | Rota                       | Descrição                                               | Retorno                     |
| ------ | -------------------------- | ------------------------------------------------------- | --------------------------- |
| GET    | `/admin/relatorio/membros` | Mostra o relario geral de todos os membros              | Retorna um json             |
| GET    | `/admin/gerar/relatorio`   | Gera um arquivo word com relatorio de todos os usuarios | Retorna um arquivo          |
| POST   | `/agenda/admin`            | Cadastra evendo na agenda                               | Retorna o evento cadastrado |

---

### 🔹 **Endpoints Agenda**

| Método | Rota                       | Descrição                | Retorno                                  |
| ------ | -------------------------- | ------------------------ | ---------------------------------------- |
| GET    | `/lista/agenda`            | Lista todos os eventos   | Retorna um json                          |
| PUT    | `/agenda/admin/update/:id` | Atualiza dados do evento | Retorna um json com os datos atualizados |
| DELETE | `/agenda/admin/delete/:id` | Deleta um evento         | Retorna uma mensagen                     |

---

### 🔹 **Endpoints Plano de Trabalho**

| Método | Rota                      | Descrição                                 | Retorno                                  |
| ------ | ------------------------- | ----------------------------------------- | ---------------------------------------- |
| GET    | `/user/planotrabalho/:id` | Lista todo o plano de trabalho do usuario | Retorna um json                          |
| POST   | `/user/planotrabalho`     | Cria o plano de trabalho                  | Retorna todas as informações             |
| PUT    | `/user/planotrabalho/:id` | Atualiza dados do evento                  | Retorna um json com os datos atualizados |
| DELETE | `/user/planotrabalho/:id` | Deleta o plano de trabalho                | Retorna uma mensagen                     |

---

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

#### 📌 **Agenda**

```json
POST /agenda/admin
Content-Type: application/json

{
    "nomeEvento": "Reunião de equipe",
    "horas": "2",
    "descricao": "Reunião para discutir o andamento do projeto",
    "data": "2025-05-10"
}
```

---
