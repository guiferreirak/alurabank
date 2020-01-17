class Negociacoes {

    private negocioacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negocioacoes.push(negociacao);
    }

    getNegociacoes(): Negociacao[] {
        return this.negocioacoes;
    }

}