class NegociacaoController {

    private data: HTMLInputElement;
    private quantidade: HTMLInputElement;
    private valor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {
        this.data = <HTMLInputElement> document.querySelector('#data');
        this.quantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this.valor = <HTMLInputElement> document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(event: Event) {
            
        event.preventDefault(); //não recarregar página após submit

        const negociacao = new Negociacao(
            new Date(this.data.value.replace(/-/g,'/')),
            parseInt(this.quantidade.value),
            parseFloat(this.valor.value));

            this.negociacoes.adiciona(negociacao);

            this.negociacoesView.update(this.negociacoes);

    }

}