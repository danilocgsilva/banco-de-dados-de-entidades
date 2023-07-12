import http from "http"
import buscarJson from "./src/buscarJson.js";
import pessoaForm from "./src/FormatoPessoa/pessoaForm.js"
import empresaForm from "./src/FormatoEmpresa/empresaForm.js"
import UrlErrada from "./src/UrlErrada.js"
import Input from "./src/Input.js";
import FiltroCampos from "./src/FiltroCampos.js"
import mysql from "mysql"
import storePessoa from "./src/FormatoPessoa/storePessoa.js";

http.createServer(async (req, res) => {

    try {
        let form
        const input = new Input(req.url)
        if (input.pedido == "/empresa") {
            form = empresaForm
        } else if (input.pedido == "/pessoa") {
            form = pessoaForm
        } else {
            throw new UrlErrada("Deve adicionar o caminho para dizer o que se deseja buscar como dados. Digite /empresa ou /pessoa no caminho.")
        }

        const contentResults = await buscarJson(form)
        const filtroCampos = new FiltroCampos(contentResults.content, input.campos)

        res.writeHead(200, { 'Content-Type': filtroCampos.formato() });

        const finalContent = filtroCampos.buscaConteudo()

        const dbConnection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });
        
        storePessoa(contentResults.content, dbConnection)

        res.end(
            JSON.stringify(finalContent, null, 4)
        );
    } catch (e) {
        if (e instanceof UrlErrada) {
            res.writeHead(400, { 'Content-Type': "application/json" });
            res.end(JSON.stringify({ message: e.message }));
        } else {
            throw e
        }
    }

}).listen(3000, "0.0.0.0");
