import http from "http"

const getDataFromApi = async () => {

    const apiAddress = "https://www.4devs.com.br/ferramentas_online.php"

    var form = new FormData();
    form.append('acao', "gerar_pessoa")
    form.append('sexo', 'I')
    form.append('pontuacao', 'S')
    form.append('txt_qtde', '1')

    const responseFromApi = await fetch(
        apiAddress,
        {
            method: verb,
            body: "POST"
        }
    )

    if (responseFromApi.ok) {
        return await responseFromApi.json()
    }

    throw new Error("A bad thing happened...")
}

http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const contentToResponde = await getDataFromApi()
    res.end(JSON.stringify(contentToResponde));
}).listen(3000, "0.0.0.0");
