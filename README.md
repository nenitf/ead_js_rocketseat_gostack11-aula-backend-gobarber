# bootcamp
- [Anotações](https://www.notion.so/nenitfeadrocketseat/GoStack-11-9aa1f5390b77432a8b150e175580af3f)
## initial setup
```sh
yarn
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
## setup
```sh
docker start <id-container> # docker ps -a
yarn dev:server
```
