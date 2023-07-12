import construirResultadoDaResposta from "./FormatoEmpresa/construirResultadoDaResposta.js"

const buscarJson = async (requestData) => {

    const apiAddress = "https://www.4devs.com.br/ferramentas_online.php"

    const responseFromApi = await fetch(
        apiAddress,
        {
            method: "POST",
            body: requestData.form
        }
    )

    if (responseFromApi.ok) {

        let rawJson
        if (requestData.module == "empresa") {
            rawJson = await construirResultadoDaResposta(responseFromApi)
        } else if (requestData.module == "pessoa") {
            rawJson = await responseFromApi.json()
            rawJson = rawJson[0]
        } else {
            throw new Error("O módulo não é reconhecido.")
        }

        const results = rawJson

        return {
            content: results
        }
    }

    throw new Error("A bad thing happened...")
}

export default buscarJson