# pw2-app-web

Aplicação web desenvolvida durante a disciplina de **Programação com Acesso a Banco de Dados** no **IFRO — Campus Ji-Paraná**, no 5º período do curso.

## Descrição

Sistema de gerenciamento de produtos e fornecedores construído com **NestJS** e **TypeORM**, utilizando **MySQL** como banco de dados relacional. A interface é renderizada no servidor com o mecanismo de templates **EJS**, sobre um tema de painel administrativo baseado em Bootstrap.

A aplicação foi desenvolvida de forma incremental ao longo das aulas, cobrindo desde a configuração inicial do banco de dados até operações completas de CRUD com validação de dados e relacionamentos entre entidades.

## Objetivo

Praticar o desenvolvimento de aplicações web com acesso a banco de dados, abordando:

- Configuração e integração de banco de dados relacional (MySQL) em uma aplicação NestJS
- Mapeamento objeto-relacional com TypeORM (entidades, colunas, relacionamentos)
- Operações CRUD: criação, listagem, edição e exclusão de registros
- Validação de dados em formulários com `class-validator`
- Relacionamento Many-to-One entre as entidades **Produto** e **Fornecedor**
- Renderização de views server-side com EJS e layouts reutilizáveis

## Tecnologias

| Tecnologia | Uso |
|---|---|
| NestJS | Framework principal (backend) |
| TypeScript | Linguagem de programação |
| TypeORM | ORM para acesso ao banco de dados |
| MySQL | Banco de dados relacional |
| EJS | Motor de templates (views) |
| Bootstrap | Estilização da interface |
| class-validator | Validação dos DTOs |

## Configuração

Copie o arquivo de exemplo de variáveis de ambiente e preencha com os dados do seu banco:

```bash
cp .env.example .env
```

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=pw2_app_web
DB_SYNCHRONIZE=false
DB_LOGGING=false
```

Instale as dependências e inicie o servidor em modo desenvolvimento:

```bash
npm install
npm run dev
```

## Módulos

- **Produtos** — listagem, criação, edição e exclusão de produtos, com vínculo a um fornecedor
- **Fornecedores** — listagem dos fornecedores cadastrados

---

IFRO — Instituto Federal de Educação, Ciência e Tecnologia de Rondônia | Campus Ji-Paraná
# pw2-app-web
