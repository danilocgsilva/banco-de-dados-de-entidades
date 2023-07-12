class Input {
    pedido
    campos
    constructor(full_url_path) {
        const urlTotalQuebrada = full_url_path.split("?")
        this.pedido = urlTotalQuebrada[0]
        this.campos = urlTotalQuebrada[1]
    }
}

export default Input