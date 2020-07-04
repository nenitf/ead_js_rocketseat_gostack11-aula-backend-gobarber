# bootcamp
- [Anotações](https://www.notion.so/nenitfeadrocketseat/GoStack-11-9aa1f5390b77432a8b150e175580af3f)

## initial setup

```sh
# criação dos containers
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
docker run --name mongodb -p 27017:27017 -d -t mongo
docker run --name redis -p 6379:6379 -d -t redis:alpine

# download de dependências js
yarn

# criação de tabelas
yarn typeorm migration:run
```

## setup

```sh
# iniciar os containers previamente existente caso não esteja ativo
docker start gostack_postgres
docker start mongodb
docker start redis
# caso não de para iniciar pelo nome do container
#docker start <id-container> # docker ps -a

# iniciar servidor em modo de desenvolvimento
yarn dev:server
```

## testes

- Pelo terminal:

```sh
# executa todos testes
yarn test

# executa teste recomevendo qualquer cache existente do jest
yarn test --clearCache

# executa todos testes de um diretório
yarn test src/path/to/specs
# path windows não funciona
#yarn test .\src\path\to\specs

# executa um teste (exemplo.spec.ts)
yarn test src/path/to/exemplo
# path windows não funciona
#yarn test \.src\path\to\exemplo
```

- Pelo vim:

```vim
" dentro do arquivo.spec.ts
:!yarn test %
```

## Padrão de commit

- A uniformização dos commits é feita através de uma função criada no vim:

```vim
" script para os meus commits padrões de aula
fun! NN_GitAula()
    let log = system("git log --pretty=format:\%s")
    vnew
    put=log
    normal! gg
    if search('^:tv: add aula')>0
        normal! 3W
        let s:numero_aula = expand('<cword>')+1
        echom system("git add -A && git commit -m \":tv: add aula ".s:numero_aula."\"")
    else
        echom system("git add -A && git commit -m \":tv: add aula 1\"")
    endif
    bdelete!
endfun

" executar com:
" :call NN_GitAula()
```
