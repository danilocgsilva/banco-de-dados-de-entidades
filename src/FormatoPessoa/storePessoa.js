const storePessoa = (content, dbConnection) => {
    const dataToInsert = {
        nome: content.nome,
        idade: content.idade,
        cpf: content.cpf,
        rg: content.rg,
        data_nasc: content.data_nasc,
        sexo: content.sexo,
        signo: content.signo,
        mae: content.mae,
        pai: content.pai,
        email: content.email,
        senha: content.senha,
        cep: content.cep,
        endereco: content.endereco,
        numero: content.numero,
        bairro: content.bairro,
        cidade: content.cidade,
        estado: content.estado,
        telefone_fixo: content.telefone_fixo,
        celular: content.celular,
        altura: content.altura,
        peso: content.peso,
        tipo_sanguineo: content.tipo_sanguineo,
        cor: content.cor
    }

    dbConnection.query('INSERT INTO pessoas SET ?', dataToInsert, function (error, results, fields) {
        if (error) throw error
    })
}

export default storePessoa