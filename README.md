# Banco de dados de entidades

1. Instale os pacotes
```
npm install
```

2. Execute a aplicação
```
node index.js
```

3. Configure as credenciais de banco de dados para salvar os dados. No ambiente em que for rodar a aplicação, é preciso configurar as seguintes variáveis de ambiente:

* DB_HOST
* DB_USER
* DB_PASSWORD
* DB_NAME
* DB_PORT

Pronto: basta acessar o endereço local normalmente.

É preciso colocar um caminho para indicar se quer informações aleatórias de pessoas ou de empresas (sendo que nem a pessoa nem a empresa retornada pela api existem). São *entidades* usadas para realizar testes em programação usando um conteúdo mais fidedigno.

Exemplo:

```
http://localhost:3000/pessoa
```

Ou

```
http://localhost:3000/empresa
```
