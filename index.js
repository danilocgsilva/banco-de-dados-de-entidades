let http = require("http");

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'application/json'});

    const apiAddress = "https://www.4devs.com.br/ferramentas_online.php"
    const verb = "POST"
    const querydata = "acao=gerar_pessoa&sexo=I&pontuacao=S&idade=0&cep_estado=&txt_qtde=1&cep_cidade="

    const response = {
        "key": "John Doe"
    }
    
	res.end(JSON.stringify(response));
}).listen(3000, "0.0.0.0");

console.log("Servidor de http em node rodando. Acesse 0.0.0.0, porta 3000");
