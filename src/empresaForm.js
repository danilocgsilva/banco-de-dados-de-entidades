const form = new FormData();
form.append('acao', "gerar_empresa")
form.append('estado', 'SP')
form.append('pontuacao', 'S')
form.append('idade', '5')

const requestData = {
    form,
    module: "empresa"
}

export default requestData