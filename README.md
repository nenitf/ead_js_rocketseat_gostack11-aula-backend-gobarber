# bootcamp
- [Anotações](https://www.notion.so/nenitfeadrocketseat/GoStack-11-9aa1f5390b77432a8b150e175580af3f)
## initial setup
```sh
# criação do container
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# download de dependências js
yarn

# criação de tabelas
yarn typeorm migration:run
```
## setup
```sh
# iniciar o container previamente existente caso não esteja ativo
docker start gostack_postgres
# caso não de para iniciar pelo nome do container
#docker start <id-container> # docker ps -a

# iniciar servidor em modo de desenvolvimento
yarn dev:server
```
