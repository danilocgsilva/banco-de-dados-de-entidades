import http from "http"
import buscarJson from "./src/buscarJson.js";
import pessoaForm from "./src/pessoaForm.js"
import empresaForm from "./src/empresaForm.js"
import UrlErrada from "./src/UrlErrada.js"

http.createServer(async (req, res) => {

    try {
        let form
        if (req.url == "/empresa") {
            form = empresaForm
        } else if (req.url == "/pessoa") {
            form = pessoaForm
        } else {
            throw new UrlErrada("Deve adicionar o caminho para dizer o que se deseja buscar como dados. Digite /empresa ou /pessoa no caminho.")
        }
    
        const contentResults = await buscarJson(form)
        
        res.writeHead(200, { 'Content-Type': "application/json" });
        res.end(contentResults.content);
    } catch (e) {
        if (e instanceof UrlErrada) {
            res.writeHead(400, { 'Content-Type': "application/json" });
            res.end(JSON.stringify({message: e.message}));
        } else {
            throw e
        }
    }

}).listen(3000, "0.0.0.0");
