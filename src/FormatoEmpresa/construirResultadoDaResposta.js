import cheerio from "cherio"

const construirResultadoDaResposta = async (respostaApi) => {

    const rawFetches = await respostaApi.text()
    const smartFetches = cheerio.load(rawFetches)

    const nome = smartFetches('input#nome').attr('value')
    const cnpj = smartFetches('input#cnpj').attr('value')
    const ie = smartFetches('input#ie').attr('value')
    const data_abertura = smartFetches('input#data_abertura').attr('value')
    const site = smartFetches('input#site').attr('value')
    const email = smartFetches('input#email').attr('value')
    const cep = smartFetches('input#cep').attr('value')
    const endereco = smartFetches('input#endereco').attr('value')
    const numero = smartFetches('input#numero').attr('value')
    const bairro = smartFetches('input#bairro').attr('value')
    const cidade = smartFetches('input#cidade').attr('value')
    const estado = smartFetches('input#estado').attr('value')
    const telefone_fixo = smartFetches('input#telefone_fixo').attr('value')
    const celular = smartFetches('input#celular').attr('value')
    
    return {
        nome,
        cnpj,
        ie,
        data_abertura,
        site,
        email,
        cep,
        endereco,
        numero,
        bairro,
        cidade,
        estado,
        telefone_fixo,
        celular
    }
}

export default construirResultadoDaResposta