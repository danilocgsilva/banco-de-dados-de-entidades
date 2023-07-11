const form = new FormData();
form.append('acao', "gerar_pessoa")
form.append('sexo', 'I')
form.append('pontuacao', 'S')
form.append('txt_qtde', '1')

const requestData = {
    form,
    module: "pessoa"
}

export default requestData