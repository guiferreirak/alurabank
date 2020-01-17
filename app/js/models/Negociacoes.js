class Negociacoes {
    constructor() {
        this.negocioacoes = [];
    }
    adiciona(negociacao) {
        this.negocioacoes.push(negociacao);
    }
    getNegociacoes() {
        return this.negocioacoes;
    }
}
