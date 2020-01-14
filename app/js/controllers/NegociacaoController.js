class NegociacaoController {
    constructor() {
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault(); //não recarregar página após submit
        const negociacao = new Negociacao(new Date(this.data.value.replace(/-/g, '/')), parseInt(this.quantidade.value), parseFloat(this.valor.value));
        console.log(negociacao);
    }
}
