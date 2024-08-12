# Documentação - Backend

Este é o backend do projeto, desenvolvido com NestJS, Prisma, e TypeScript, utilizando o PostgreSQL como banco de dados.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Docker](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Clonando o Repositório

Para clonar o repositório, execute o seguinte comando no terminal:

```bash
git clone https://https://github.com/nandamsouza/PRODUCTIONLINE-BACKEND.git
cd nome-do-repositorio-backend
```
## Configurando o Ambiente
##### Com Docker
Se você estiver usando Docker, siga os passos abaixo:
* Copie o arquivo .env.example para .env e configure as variáveis de ambiente necessárias:

```bash
cp .env.example .env
```
* Construa e inicie os contêineres:
```bash
docker-compose up --build
```
* Execute as migrações do Prisma:
```bash
docker-compose exec core-api npx prisma migrate dev
```
##### Acesse a aplicação:

* A aplicação estará disponível em ex: http://localhost:3000.

##### Sem Docker
Se você preferir rodar a aplicação localmente sem Docker, siga os passos abaixo:

* Instale as dependências:

```bash
npm install
```
ou

```bash
yarn install
```
* Configure as variáveis de ambiente:

* Copie o arquivo .env.example para .env e configure as variáveis de ambiente necessárias, incluindo a URL de conexão com o banco de dados PostgreSQL.

```bash
cp .env.example .env
```
  * Execute as migrações do Prisma:

``` bash
npx prisma migrate dev
```
* Inicie a aplicação:

```bash
npm run start:dev
```
ou
```bash
yarn start:dev
```
##### Acesse a aplicação:
* A aplicação estará disponível em ex: http://localhost:3000.