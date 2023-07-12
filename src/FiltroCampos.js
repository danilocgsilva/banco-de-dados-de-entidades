class FiltroCampos {

    conteudo
    
    campos

    constructor(conteudo, campos) {
        this.conteudo = conteudo
        this.campos = campos
    }

    buscaConteudo() {
        if (this.campos === undefined) {
            return this.conteudo
        } else {
            return this.conteudo.nome
        }
    }

    formato() {
        if (this.campos === undefined) {
            return "application/json; charset=utf-8"
        } else {
            return "text/html"
        }
    }
}

export default FiltroCampos